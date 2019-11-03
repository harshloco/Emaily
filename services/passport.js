const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
require("../models/User");

const User = mongoose.model("User");

passport.serializeUser((user, done) => {
  //first argument below is error, we don't except error here
  //so it's null
  //2nd argument is user.id to identify user in follow up requests
  //user.id is unique id from mongoose collections
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(err => {
      console.log("line 23:error at User.findone");
    });
});

//tell passport to use below google clientId,clientSecret,
// and callbackURl
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log(profile.id);

      //find if this user exist, if yes don't save
      User.findOne({ googleId: profile.id })
        .then(existingUser => {
          if (existingUser) {
            //this records already exits with given profil.id
            //don't save

            //tell passport that we're done and it can resume the  auth process
            done(null, existingUser);
          } else {
            //make a new record

            new User({ googleId: profile.id })
              .save()
              .then(user => done(null, user))
              .catch(err => {
                //handle error
              });
          }
        })
        .catch(err => {
          console.log("error at User.findone");
        });
    }
  )
);

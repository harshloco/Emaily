const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");

require("./models/User");
require("./services/passport");

mongoose
  .connect(keys.mongoURI)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch(err => {
    console.log("Not Connected to Database ERROR! ", err);
  });
const app = express();

//tell exprees needs to make use of cookies inside application
app.use(
  cookieSession({
    maxAge: 24 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

//tell passport to make use of cookie
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

// app.get("/,", (req, res) => {
//   res.send({ hi: "there" });
// });
const PORT = process.env.PORT || 5000;
app.listen(PORT);

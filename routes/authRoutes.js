const passport = require("passport");

module.exports = app => {
  //send user to google's login page, redirects user to callbaclURL
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  //
  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });
  app.get("/api/current_user", (req, res) => {
    // res.send("here");
    res.send(req.session);
  });
};

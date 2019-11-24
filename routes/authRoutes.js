const passport = require("passport");

module.exports = app => {
  // app.use(function(req, res, next) {
  //   if (process.env.NODE_ENV === "production") {
  //     const reqType = req.headers["x-forwarded-proto"];
  //     // if not https redirect to https unless logging in using OAuth
  //     if (reqType !== "https") {
  //       req.url.indexOf("auth/google") !== -1
  //         ? next()
  //         : res.redirect("https://" + req.headers.host + req.url);
  //     }
  //   } else {
  //     next();
  //   }
  // });

  console.log("line 18 authRoutes ");
  //send user to google's login page, redirects user to callbaclURL
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  //
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      successRedirect: "/api/current_user",
      failureRedirect: "/api/logout"
    })
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });
  app.get("/api/current_user", (req, res) => {
    // res.send("here");
    res.send(req.session);
  });
};

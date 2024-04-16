const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/user/no-permission" }),
  (req, res) => {
    res.redirect("/user/logged");
  }
);

router.get("/logout", function (req, res, next) {
  req.logout();
  req.session.destroy(function (err) {
    if (err) {
      console.log("error: ", err);
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;

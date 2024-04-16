const express = require("express");
const router = express.Router();

const isLogged = (req, res, next) => {
  if (!req.user) {
    res.redirect("/user/no-permission");
  } else {
    next();
  }
};

router.get("/logged", isLogged, (req, res) => {
  //console.log(req.user);
  res.render("logged", {
    name: req.user.displayName,
    photo: req.user.photos[0].value,
  });
});

router.get("/no-permission", (req, res) => {
  res.render("noPermission");
});

module.exports = router;

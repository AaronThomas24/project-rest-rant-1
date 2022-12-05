const router = require("express").Router();
const db = require("../models");

router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
})((module.exports = mongoose.model("Place", placeSchema)));

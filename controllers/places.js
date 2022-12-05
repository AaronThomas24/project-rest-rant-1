const router = require("express").Router();
const places = require("../models/places.js");

router.get("/", (req, res) => {
  res.render("places/index", { places });
});

// GET /places
app.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/h-thai-ml-tables.png",
      pic: "/images/thai food.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "/images/coffee-cat.jpg",
      pic: "/images/espresso.jpg",
    },
  ];

  res.render("places/index", { places });
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.all("/", (req, res, next) => {
  // res.json({ message: "return form ticket router" });

  next();
});

router.post("/", (req, res) => {
  console.log(req.body);
});

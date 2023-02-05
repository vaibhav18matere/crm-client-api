const express = require("express");
const router = express.Router();
const { insertUser } = require("./../model/user/UserModal");
const { route } = require("./ticket-router");

router.all("/", (req, res, next) => {
  // console.log(name);
  // to get a specific error

  // res.json({ message: "user router" });
  next();
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const result = await insertUser(req.body);
  console.log(result);
  res.json({ message: "new user created" });

  // try {
  //   const result = await insertUser(req.body);
  //   console.log(result);
  // } catch (error) {
  //   console.log(error);
  //   res.json({ status: "error", message: error.message });
  // }
});

module.exports = router;

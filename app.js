console.log("starting the node server");

const express = require("express");

const app = express();

const PORT = process.env.port || 3001;

app.use("/", (req, res) => {
  res.json({ message: "Hii world!!!" });
});

app.listen(PORT, () => {
  console.log(`api is ready at port ${PORT} click
  http://localhost:${PORT}`);
});

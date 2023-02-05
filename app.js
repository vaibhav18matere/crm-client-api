require("dotenv").config();
console.log("starting the node server");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

const PORT = process.env.port || 3001;

// API security
app.use(helmet());

// handle CORS error
app.use(cors());

// MongoDB Connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGO_URL, {});

if (process.env.NODE_ENV !== "production") {
  const mongodb = mongoose.connection;
  mongodb.on("open", () => {
    console.log("mongo db is connected");
  });

  mongodb.on("error", (error) => {
    console.log(error);
  });
}

// set body parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

// load routers
const userRouter = require("./src/routers/user-router");
const ticketRouter = require("./src/routers/ticket-router");

// user router
app.use("/v1/user", userRouter);
app.use("/v1/ticket", ticketRouter);

// error handler
const handleError = require("./src/utils/errorHandler");

app.use((req, res, next) => {
  const error = new Error("Resource not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  handleError(error, res);
});

app.listen(PORT, () => {
  console.log(`API is ready at port ${PORT} click
  http://localhost:${PORT}`);
});

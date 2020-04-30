const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
dotenv.config({ path: "./config/config.env" });

const connectDB = require("./config/db");
connectDB();

const app = express();

const transactionsRoute = require("./routes/transactionsRoute");
app.use("/api/transactions", transactionsRoute);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);

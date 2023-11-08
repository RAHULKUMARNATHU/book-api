const express = require("express");
const db = require("./config/mongoose");
const dotenv = require("dotenv");
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");

dotenv.config({ path: "./config.env" });

const app = express();


app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));


app.use('/', require('./routes'))

app.all("*", (req, res, next) => {
  // res.status(404).json({
  //   status: 'fail',
  //   message: `Can not find ${req.originalUrl} on this server`,
  // });
  // const err = new Error(`Can't find ${req.originalUrl} on this server`);
  // err.status = 'fail';
  // err.statusCode = 404;
  // next(err);
  next(new AppError(`Can not find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);


module.exports = app



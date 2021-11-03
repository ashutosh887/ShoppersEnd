const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error...";

  // MongoDB Error : Cast Error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid ${err.path}`;

    err = new ErrorHandler(message, 400);
  }

  // MongoDB Duplicate Key Error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered...`;
    err = new ErrorHandler(message, 400);
  }

  // Wrong JWT Token Added
  if (err.name === "JsonWebTokenError") {
    const message = `JSON WEB TOKEN is invalid. Please try again...`;
    err = new ErrorHandler(message, 400);
  }

  // JWT Expire Error
  if (err.name === "TokenExpiredError") {
    const message = "JSON WEB TOKEN is expired. Please try again...";
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

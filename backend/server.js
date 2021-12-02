const app = require("./app");
const connectDatabase = require("./config/database");

// Config Variables
const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });

// Cloudinary
const cloudinary = require("cloudinary");

// Uncaught Exception Handling
process.on("uncaughtException", (err) => {
  console.log(`Error caught : ${err.message}`);
  console.log("Server closed due to Uncaught Exception");

  process.exit(1);
});

// Database Connectivity
connectDatabase();

// Cloudinary Connectivity
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server started at PORT ${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error Occured : ${err.message}`);
  console.log(`Shutting Down the Server due to Unhandled Promise Rejection.`);
  server.close(() => {
    process.exit(1);
  });
});

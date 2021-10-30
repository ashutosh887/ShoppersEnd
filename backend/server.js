const app = require("./app");

// Config Variables
const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });

// Database Connectivity
const connectDatabase = require("./config/database");
-connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server started at PORT ${process.env.PORT}`);
});

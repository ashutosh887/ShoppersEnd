const app = require("./app");

// Config Variables
const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });

app.listen(process.env.PORT, () => {
  console.log(`Server started at PORT ${process.env.PORT}`);
});

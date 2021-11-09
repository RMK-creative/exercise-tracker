const express = require("express");
const app = express();
const connectDB = require("./config/database");

require("dotenv").config({ path: "./config/.env" });

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running!`);
});

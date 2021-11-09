const express = require("express");
const app = express();
const connectDB = require("./config/database");

require("dotenv").config({ path: "./config/.env" });

connectDB();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*
        ROUTES
*/
app.use("/", require("./routes/home"));
// app.use("/sessions", require("./routes/sessions"));

/*
        LISTEN
*/
app.listen(process.env.PORT, () => {
  console.log(`Server is running!`);
});

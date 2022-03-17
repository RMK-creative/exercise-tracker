const express = require("express");
const app = express();
const connectDB = require("./config/database");

require("dotenv").config({ path: "./config/.env" });

connectDB();

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ejs
app.set("view engine", "ejs");

// moment date formatter - allow access in all files
app.locals.moment = require("moment");

// static files
app.use(express.static("public"));

/*
        ROUTES
*/
app.use("/", require("./routes/home"));
app.use("/user", require("./routes/authRoutes"));
app.use("/session/addSession", require("./routes/home"));
app.use("/sessions", require("./routes/sessions"));
app.use("/sessions/createSession", require("./routes/sessions"));
app.use("/sessions/:id", require("./routes/sessions"));

/*
        LISTEN
*/
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port 5080`);
});

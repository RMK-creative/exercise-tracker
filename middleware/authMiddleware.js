const jwt = require("jsonwebtoken");
const User = require("../models/User");

require("dotenv").config({ path: "./config/.env" });

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/user/login");
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect("/user/login");
  }
};

module.exports = { requireAuth };

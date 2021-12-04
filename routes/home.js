const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home");

router.get("/", homeController.getIndex);
router.get("/session/addSession", homeController.getAddSessionView);

module.exports = router;

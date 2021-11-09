const express = require("express");
const router = express.Router();
const sessionsController = require("../controllers/sessions");

router.get("/", sessionsController.getSessions);
router.post("/createSession", sessionsController.createSession); 

module.exports = router;

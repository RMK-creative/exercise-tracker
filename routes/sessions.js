const express = require("express");
const router = express.Router();
const sessionsController = require("../controllers/sessions");
const sessionDataController = require("../controllers/sessionData");

router.get("/", sessionsController.getSessions);
router.get("/:id", sessionDataController.getSessionData);
router.post("/createSession", sessionsController.createSession);

module.exports = router;

const express = require("express");
const router = express.Router();
const sessionsController = require("../controllers/sessions");

router.get("/", sessionsController.getSessions);
router.get("/:id", sessionsController.getSessionData);
router.post("/createSession", sessionsController.createSession);

module.exports = router;

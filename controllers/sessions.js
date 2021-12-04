const Session = require("../models/Session");

module.exports = {
  getSessions: async (req, res) => {
    try {
      const sessionItems = await Session.find().sort({ date: -1 });
      res.render("sessions.ejs", { sessions: sessionItems });
    } catch (err) {
      console.log(err);
    }
  },
  getSessionData: async (req, res) => {
    try {
      const data = await Session.findById(req.params.id);
      console.log(`data contains: ${data}, id: ${req.params.id}`);
      res.render("sessionData.ejs", { data: data });
    } catch (err) {
      console.log(err);
    }
  },
  createSession: async (req, res) => {
    try {
      await Session.create({
        type: req.body.sessionItemType,
        date: req.body.sessionItemDate,
        hr: req.body.sessionItemHR,
        calories: req.body.sessionItemCals,
        duration: req.body.sessionItemDuration,
        notes: req.body.sessionItemNotes,
      });
      console.log("Session has been added!");
      res.redirect("/sessions");
    } catch (err) {
      console.log(err);
    }
  },
};

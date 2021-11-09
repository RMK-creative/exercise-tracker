const Session = require("../models/Session");

module.exports = {
  getSessions: async (req, res) => {
    try {
      const sessionItems = await Session.find();
      res.render("sessions.ejs", { sessions: sessionItems });
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
      });
      console.log("Session has been added!");
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  },
};

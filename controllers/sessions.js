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
      // creates a new Session using the Model. create is a mongoose method
      // req.body.sessionItem comes from the form (name="session")
      await Session.create({
        sessionType: req.body.sessionItemType,
        sessionDate: req.body.sessionItemDate,
        sessionHR: req.body.sessionItemHR,
        sessionCalories: req.body.sessionItemCals,
      });
      console.log("Session has been added!");
      res.redirect("/ ");
    } catch (err) {
      console.log(err);
    }
  },
};

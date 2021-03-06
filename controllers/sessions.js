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
      res.render("sessionData.ejs", { data: data });
    } catch (err) {
      console.log(err);
    }
  },
  createSession: async (req, res) => {
    console.log(req.body);
    try {
      await Session.create({
        type: req.body.sessionItemType,
        date: req.body.sessionItemDate,
        hr: req.body.sessionItemHR,
        calories: req.body.sessionItemCals,
        duration: req.body.sessionItemDuration,
        notes: req.body.sessionItemNotes,
      });
      res.redirect("/sessions");
    } catch (err) {
      console.log(err);
    }
  },
  deleteSession: (req, res) => {
    const id = req.params.id;

    Session.findByIdAndDelete(id)
      .then((result) => {
        res.json({ redirect: "/sessions" });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

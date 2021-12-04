module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getAddSessionView: (req, res) => {
    res.render("addSession.ejs");
  },
};

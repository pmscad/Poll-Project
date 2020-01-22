
const path = require("path");


 // Each of the below routes just handles the HTML page that the user gets sent to.

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/new", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/new.html"));
  });

  app.get("/question", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/question.html"));
  });

  app.get("/answers", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/answers.html"));
  });

  app.get('/question/:id/', function (req, res) {
    res.send(req.params);
  })

};




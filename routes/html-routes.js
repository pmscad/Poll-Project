
const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const routers = express.Router();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

 
 const urlencodedParser = bodyParser.urlencoded({ extended: false })

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.post("/", urlencodedParser, function(req, res) {
    console.log(req.body);
      res.render('question', {data: req.body});
  })

  app.get("/new", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/new.html"));
  });

  app.post("/new", urlencodedParser, function(req, res) {
    console.log(req.body);
      res.render('question', {data: req.body});
  })

  app.get("/question", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/question.html"));
  });

  app.get("/answers", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/answers.html"));
  });

  app.get('/question/:id/', function (req, res) {
    res.send(req.params);
  })


  module.exports = routers;


const express = require("express");
const path = require(path);
const router = express.Router();

// Create all our routes and set up logic within those routes where required.

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

// Create a new question

router.get("/new", (req, res) => {
  res.sendFile(path.join(__dirname + "/new.html"));
});

// Answer a new question
router.get("/question/:id", (req, res) => {
  res.send("ok!");
});

// Shows Answer page and Display graph
router.get(
  ("/answer/question_id",
  (req, res) => {
    res.send("ok!");
  })
);

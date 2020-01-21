const express = require("express");
// const app = express();
const path = require("path");
const router = express.Router();

//  Create all our routes and set up the logic within those routes where required

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/new", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/new.html"));
});
router.get("/question", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/question.html"));
});

console.log(__dirname);
module.exports = router;

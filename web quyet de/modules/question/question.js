const express = require('express');
const path = require('path');
const fs = require('fs');


let fileQuestionHtml = path.join(__dirname, '../../public/question.html');
let router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(fileQuestionHtml);
});

router.post('/', (req, res) => {
  var data = fs.readFileSync('myOutput.txt');
  data = data + req.body.question;
  res.send(data.toString());
  fs.appendFile('myOutput.txt', req.body.question + '\n');
});

module.exports = router;

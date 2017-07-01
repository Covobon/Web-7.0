const express = require('express');
const questionRouter = require('./modules/question/question.js')
const bodyParser = require('body-parser');
const fs = require('fs');
let app = express();



app.listen(6969, () => {

});
app.use(bodyParser.urlencoded({ extended : true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/Web 1.0 - CSS1 Home Work.html');
});

app.use('/question', questionRouter);

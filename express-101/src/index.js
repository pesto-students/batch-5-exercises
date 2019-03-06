const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.send('Hey, I am server response')
});

app.get('/movie/:title', function (req, res) {
  res.send(`My favorite movie is ${req.params.title}`);
});

app.listen(3000, function () {
  console.log('Dev app listening on port 3000!');
});
module.exports = app;

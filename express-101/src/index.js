const express = require('express');

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hey, I am server response');
});

app.get('/movie/:title', (req, res) => {
  const movieTitle = req.params.title;
  res.send(`My favorite movie is ${movieTitle}`);
});

app.listen(port, () => console.log(`Server listening on port: ${port}`));
module.exports = app;

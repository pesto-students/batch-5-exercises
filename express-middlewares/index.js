const express = require('express');

const app = express();

app.use((req, res, next) => {
  req['middleware-header'] = req.url;
  console.log(`Path: ${req['middleware-header']} - Time: ${new Date()}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/languages', (req, res) => {
  const languages = ['Php', 'C', 'C++', 'Java', 'Javascript'];
  res.send({ languages });
});

app.get('/packages', (req, res) => {
  const packages = ['nodemon', 'rxjs', 'webpack', 'chalk', 'express'];
  res.send({ packages });
});

app.listen(3000, () => console.log('Server running at port 3000'));
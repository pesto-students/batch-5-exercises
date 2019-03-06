const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const db = [];
const app = express();
const port = 9000;
const secret = 'secret';

app.use((req, res, next) => {
  req['middleware-header'] = req.url;
  console.log(`Path: ${req['middleware-header']} - Time: ${new Date()}`);
  next();
});
app.use(bodyParser.json());


const authentication = (req, res, next) => {
  if (!req.headers.authorization) {
    res.send({ err: 'No token found' });
  }
  const { authorization } = req.headers;
  if (!jwt.verify(authorization, secret)) {
    res.send({ err: 'Invalid token' });
  }
  next();
};

app.post('/signup', (req, res) => {
  db.push(req.body);
  const token = jwt.sign(req.body, secret);
  res.send({ token });
});

app.use(authentication);

app.get('/', (req, res) => {
  const movies = ['Avengers', 'F&F'];
  res.send({ movies });
})

app.listen(port, () => console.log(`Server running at port ${port}`));
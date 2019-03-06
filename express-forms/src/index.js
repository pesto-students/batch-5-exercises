
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  return res.redirect('/form-with-get');
});

app.get('/form-with-get', (req, res) => {
  return res.render('form-with-get');
});

app.get('/form-with-post', (req, res) => {
  return res.render('form-with-post');
});

app.get('/submit-form-with-get/', function(req, res) {
  res.send(req.query);
})

app.post('/submit-form-with-post/', function(req, res) {
  res.send(req.body);
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

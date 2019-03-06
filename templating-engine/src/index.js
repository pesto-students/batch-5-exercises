const express = require('express');
const path = require('path');
let ejs = require('ejs');

const app = express();

const languages = ['JavaScript', 'Haskell', 'Python'];

// setting up the middleware with ejs  
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// setting up the route
app.get('/', (req, res) => {
  return res.render('index', { languages });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

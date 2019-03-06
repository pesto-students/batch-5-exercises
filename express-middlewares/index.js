
const express = require('express');
const JSON = require('circular-json');
const app = express();

const languages = ['Python', 'Java', 'JavaScript', 'Haskell', 'Lisp'];
const packages = ['express', 'dotenv', 'body-parser', 'async', 'lodash'];

function logger(req, res, next){
    console.log(new Date(), req.method, req.url);
    data = JSON.stringify({middleware: languages})
    res.send(data)
    next();
  }

function loggerPackages(req, res, next){
    console.log(new Date(), req.method, req.url);
    data = JSON.stringify({middleware: packages})
    next();
}
// app.use(logger);
app.get('/', function(req, res) {
    res.send("Hello")
})

// app.get('/languages', function(req, res) {
//     res.json(languages)
// })

// app.get('/packages', function(req, res) {
//     res.json(npmLanguages)
// })

app.get('/languages', logger);

app.get('/packages', loggerPackages);

const port = 3000;

app.listen(port, () => {
    console.log(`Listening to the app on port ${port}`);
})
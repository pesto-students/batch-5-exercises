const express = require('express');

const app = express();

const router = express.Router();

// 1) Create Routes
router.get('/', function (req, res) {
    res.end('Hey, I am server response');
});

router.get('/movie/:title', function (req, res) {
    res.end(`My favorite movie is ${req.params.title}`);
});

app.use('/', router);

app.listen(3000);

module.exports = app;

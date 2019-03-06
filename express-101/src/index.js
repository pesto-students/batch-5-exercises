const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send(`Hey, I am server response`)
})

const port = 3000;

app.listen(port, () => {
    console.log(`Listening to the app on port ${port}`);
})

module.exports = app;

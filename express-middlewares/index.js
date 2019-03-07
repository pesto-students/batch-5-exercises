const express = require('express');

const app = express();

const languages = ['JavaScript', 'Haskell', 'Python', 'Scala', 'Lisp'];
const packages = ['express', 'lodash', 'json-parser', 'underscore', 'pdfmake'];

function myMiddleware(req, res, next) {
  const { url } = req;
  const typeUrl = url.slice(1);

  if (typeUrl === 'languages' || typeUrl === 'packages') {
    console.log('middleware-header=', typeUrl, 'Time = ', Date());
    res.setHeader('middleware-header', typeUrl);
  }
  next();
}
app.use(myMiddleware);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/:type', (req, res) => {
  const param = req.params.type;
  if (param === 'languages') {
    res.json(languages);
  }
  else if (param === 'packages') {
    res.json(packages);
  }
  else {
    res.json({ message: 'Not a Valid URl' });
  }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});


module.exports = app;

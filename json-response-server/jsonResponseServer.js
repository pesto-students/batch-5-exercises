const http = require('http');

const requestHandler = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify({ data: "Pesto Bootcamp!" }));
}

const jsonResponseServer = http.createServer(requestHandler);

export {
  jsonResponseServer,
};

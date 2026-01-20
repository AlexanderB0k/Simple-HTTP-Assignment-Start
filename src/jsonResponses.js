const text = require('./textResponses.js');

const getHelloJson = (request, response) => {
  const helloJSON = {
    message: text.hello,
  };
  const stringMessage = JSON.stringify(helloJSON);

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

const getTimeJson = (request, response) => {
  const timeJSON = {
    time: text.getTimeString(),
  };
  const stringTime = JSON.stringify(timeJSON);

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringTime);
  response.end();
};

module.exports.getHelloJson = getHelloJson;
module.exports.getTimeJson = getTimeJson;

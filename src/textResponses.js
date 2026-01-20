const hello = 'Hello, World!';

const getTimeString = () => {
  const d = new Date();
  const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  return dateString;
};

const getTime = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(`Current Server Time: ${getTimeString()}\n`);
  response.end();
};

const getHello = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(`${hello}\n`);
  response.end();
};

module.exports = {
  hello,
  getTimeString,
  getTime,
  getHello,
};

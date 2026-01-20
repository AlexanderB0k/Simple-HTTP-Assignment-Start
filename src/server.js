const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');
const textHandler = require('./textResponses.js');
const imageHandler = require('./imageResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(`Request URL: ${request.url}`);

  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/page2':
      htmlHandler.getPage2(request, response);
      break;
    case '/hello':
      textHandler.getHello(request, response);
      break;
    case '/time':
      textHandler.getTime(request, response);
      break;
    case '/helloJson':
      jsonHandler.getHelloJson(request, response);
      break;
    case '/timeJson':
      jsonHandler.getTimeJson(request, response);
      break;
    case '/dankmemes':
      imageHandler.getDankMemes(request, response);
      break;

    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port, console.log(`Listening on 127.0.0.1:${port}`));

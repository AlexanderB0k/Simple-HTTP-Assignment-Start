const fs = require('fs');

const getDankMemes = (request, response) => {
  const image = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(image);
  response.end();
};

exports.getDankMemes = getDankMemes;

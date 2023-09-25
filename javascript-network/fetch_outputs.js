const request = require('request');

const urls = [
  'http://localhost:5050/route_0',
  'http://localhost:5050/route_1',
  'http://localhost:5050/route_2'
];

function fetchAndPrint(url) {
  request.get(url, (error, response, body) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }

    if (response.statusCode !== 200) {
      console.error(`Error: Status code ${response.statusCode}`);
      return;
    }

    console.log(`Correct output - ${body.trim().length > 0 ? 'big' : 'empty'} text - ${url}`);
  });
}

urls.forEach(fetchAndPrint);


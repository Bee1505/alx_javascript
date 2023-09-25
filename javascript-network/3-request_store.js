const request = require('request');
const fs = require('fs');

if (process.argv.length !== 4) {
  console.error('Usage: node 3-request_store.js <URL> <file_path>');
  process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

request.get({ url, encoding: 'utf-8' }, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Error: Status code ${response.statusCode}`);
    process.exit(1);
  }

  fs.writeFile(filePath, body, 'utf-8', (writeError) => {
    if (writeError) {
      console.error(`Error writing to file: ${writeError.message}`);
      process.exit(1);
    }

    console.log(`File written successfully to ${filePath}`);
  });
});



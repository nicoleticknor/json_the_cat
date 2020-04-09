const request = require('request');
const urlBase = 'https://api.thecatapi.com/v1/breeds/search?q=';
const input = process.argv.slice(2);
const url = urlBase + input[0];

const fetchResource = (url, cb) => {
  request(url, (e, r, body) => {
    if (e) throw e;
    const data = JSON.parse(body);
    cb(data);
  });
};

const callback = (data) => {
  if (!data[0]) console.log("Breed not found");
  else console.log(data[0].description);
};

fetchResource(url, callback);

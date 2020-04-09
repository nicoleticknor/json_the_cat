const request = require('request');
const urlBase = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = (breedName, cb) => {
  request(urlBase + breedName, (e, r, body) => {
    if (e) {
      cb(e, null);
    } else {
      let data = JSON.parse(body);
      if (!data[0]) {
        e = "Breed not found";
        cb(e, null);
      } else {
        data = data[0].description;
        cb(null, data);
      }
    }
  });
};

/* old code, deprecated

const fetchBreedDescription1 = (breedName, cb) => {
  request(urlBase + breedName, (e, r, body) => {
    if (e) {
      cb(e, null);
    } else {
      const data = JSON.parse(body);
      cb(null, data);
    }
  });
};

const callback1 = (error, data) => {
  if (error !== null) console.log(error);
  else {
    if (!data[0]) console.log("Breed not found");
    else console.log(data[0].description);
  }
};

fetchBreedDescription('Siberian', callback);*/

module.exports = { fetchBreedDescription };


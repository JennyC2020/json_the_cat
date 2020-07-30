const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, resp, body) => {
    // console.log(body);
    // console.log(typeof body);

    if (error) {
      callback(`Failed to request details: ${error}`, null);
    }

    const data = JSON.parse(body);
    // console.log(data);

    let breedObject = data[0];

    if (breedObject) {
      callback(null, breedObject.description);
    } else {
      callback(`Could not find the following breed:  ${breedName}`, null);
    }

  });

};
module.exports = { fetchBreedDescription };
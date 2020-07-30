const request = require('request');

const breedName = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(url, (error, resp, body) => {
  //console.log(body);
  //console.log(typeof body);

  if (error) {
    return console.log('error:', error);
  }

  const data = JSON.parse(body);
  // console.log(data);

  let breedObject = data[0];

  breedObject ? console.log(breedObject.description) : console.log("This breed is not found");
  // if (breedObject) {
  //   console.log(breedObject.description);
  // } else {
  //   console.log("This breed is not found");
  // }
});
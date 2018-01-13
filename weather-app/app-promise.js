const yargs = require('yargs');
const axios = require('axios');
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCosJzr5OVYQfLPqir0ric8WVJDud9YunA&address=${encodedAddress}`;

axios(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find this address.');
  }

  if (response.data.status === 'REQUEST_DENIED') {
    throw new Error(response.data.error_message);
  }
  console.log(response.data.results[0].formatted_address);
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/0ca67f739943569620c9a7cdbe70cbab/${lat},${lng}`;
  return axios(weatherUrl);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
}).catch((error) => {
  if (error.code === 'ENOTFOUND') {
    console.log('Unable to connect to API servers.');
  } else {
    console.log(error.message);
  }
});
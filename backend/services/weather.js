'user strict';

var weather = require('weather-js');
var cities = require('cities');

async function getWeather (options) {
  const data = cities.gps_lookup(options.lat, options.long);

  let celsiusWeather = await new Promise((resolve, reject) => {
    weather.find({search: data.city + ',' + data.state_abbr, degreeType: 'C'}, function (err, result) {
      if (err) {
        return reject(err);
      }

      return resolve(result);
    });
  });

  return celsiusWeather;
}

module.exports = {
  getWeather
};

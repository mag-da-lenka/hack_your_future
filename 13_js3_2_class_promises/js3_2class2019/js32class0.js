// RECAP LAST CLASS <- JS3-1 :: JSON, API, fetch

/*

JSON
JavaScript Object Notation
used for transferring data
JSON stringify/parse

API
Application Programming Interface
A set of functionality that we can comsume from a service

fetch()
function that help connect to an api
parameter is the url

fetch(`__url__`)
.then(response => response.json())
.then(result => console.log(result))

*/



//  DESTRUCTURING AN OBJECT 


// example from homework

function getCloudy(cloudy) {
  let cloudStaus = ''
  if (cloudy >= 0 && cloudy < 10) {
    cloudStaus = 'Sunny';
  } else if (cloudy >= 10 && cloudy < 20) {
    cloudStaus = 'Sunny to Mostly Sunny';
  } else if (cloudy >= 20 && cloudy < 30) {
    cloudStaus = 'Mostly Sunny';
  } else if (cloudy >= 30 && cloudy < 60) {
    cloudStaus = 'Partly Sunny';
  } else if (cloudy >= 60 && cloudy < 80) {
    cloudStaus = 'Mostly Cloudy';
  } else {
    cloudStaus = 'Cloudy';
  }
}

function organizeData(data) {

  const {
    name,
    coord,
    wind,
    cloudy,
    sys,
  } = data // <-- this is called destructuring

  return {
    city: name,
    coordinates: coord,
    cloudStaus: getCloudy(cloudy),
    sunset: new Date(sys.sunset * 1000).toLocaleTimeString()
  }

  const name = data.name
  const coord = data.coord

  let organizedDataObject = {};
  // setting the properties of organizedDataObject based on the fetch response
  let tempInKelvin = data.main.temp;
  let tempInCelcius = tempInKelvin - 273.15;
  organizedDataObject.city = data.name;
  organizedDataObject.coordinates = data.coord;
  organizedDataObject.temperature = Math.round(tempInCelcius);
  organizedDataObject.weathericon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  organizedDataObject.windspeed = data.wind.speed;
  organizedDataObject.cloudy = data.clouds.all;
  organizedDataObject.sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  organizedDataObject.sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
  if (organizedDataObject.cloudy >= 0 && organizedDataObject.cloudy < 10) {
    organizedDataObject.cloudStaus = 'Sunny';
  } else if (organizedDataObject.cloudy >= 10 && organizedDataObject.cloudy < 20) {
    organizedDataObject.cloudStaus = 'Sunny to Mostly Sunny';
  } else if (organizedDataObject.cloudy >= 20 && organizedDataObject.cloudy < 30) {
    organizedDataObject.cloudStaus = 'Mostly Sunny';
  } else if (organizedDataObject.cloudy >= 30 && organizedDataObject.cloudy < 60) {
    organizedDataObject.cloudStaus = 'Partly Sunny';
  } else if (organizedDataObject.cloudy >= 60 && organizedDataObject.cloudy < 80) {
    organizedDataObject.cloudStaus = 'Mostly Cloudy';
  } else {
    organizedDataObject.cloudStaus = 'Cloudy';
  }
  console.log(organizedDataObject);
  return organizedDataObject;


}




// giphy

// fetch('https://api.giphy.com/v1/gifs/search?api_key=something&q=my_search')

const API_KEY = 'c8af3ccd'

fetch(`http://www.omdbapi.com/?apikey=${API_KEY}`)
  .then(response => response.json())



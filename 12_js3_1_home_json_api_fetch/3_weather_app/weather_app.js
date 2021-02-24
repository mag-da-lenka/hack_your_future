console.log(`Hello Squirrels! 
/Parallel world connection test. 
This is HOMEWORK JS3-1 week-12 
by Magdalena /HYF /class 12
ex.3: WEATHER APP `)

// Instructions: https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript3/week1/homework.md
// API: https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=c57bb374b895a905b4c971ed27afda37 

// welcome message ---> date formatting
const year = new Date().getFullYear();
const months_names = ['January', 'February', 'March', 'April', 'May', 'June',
	'July', 'August', 'September', 'October', 'November', 'December'];
const month_name = months_names[new Date().getMonth()];
const days_names = ["Sunday", "Monday", "Tuesday", "Wednesday",
	"Thursday", "Friday", "Saturday"]; 0 - 1 - 2 - 3 - 4 - 5 - 6
const day_name = days_names[new Date().getDay()];
const day_number = appendLeadingZeroes(new Date().getDate());
const hours = appendLeadingZeroes(new Date().getHours());
const minutes = appendLeadingZeroes(new Date().getMinutes());
const seconds = appendLeadingZeroes(new Date().getSeconds());
function appendLeadingZeroes(n) { if (n <= 9) { return "0" + n; } return n }
const myDateFormat_month_name = `<br>${day_name} <br> ${day_number}/${month_name}/${year} <br>
${hours}:${minutes}:${seconds} <br> GMT + 01:00`;
console.log(myDateFormat_month_name);
// welcome message ---> todayIsSayer
const todayIsSayer = document.getElementById("today_is_sayer");
todayIsSayer.innerHTML = `${myDateFormat_month_name}`;


// API KEY
const apiKey = "c57bb374b895a905b4c971ed27afda37";
// city
const inputEl = document.getElementById("city_input");
const buttonEl_get_city = document.getElementById("city_grabber");
// coordinates
const buttonEl_get_coordinates = document.getElementById("coordinates_grabber");
// blinky blinky - loading ...
const loadingDataEl = document.getElementById("blinky_blinky_loading");
// HTML reference for rendering data
const currentCityEl = document.getElementById("city");
const tempElement = document.getElementById("temp");
const pressureElement = document.getElementById("pressure");
const windElement = document.getElementById("wind");
const cloudsElement = document.getElementById("clouds");
const humidityElement = document.getElementById("humidity");
const renderSun = document.getElementById("sun_r_s");
const sun_r_Element = document.getElementById("sun_r");
const sun_s_Element = document.getElementById("sun_s");
const unixConverter = unix_n => {
	const elegantTime = new Date(unix_n * 1000);
	return elegantTime.toLocaleTimeString(navigator.language, {
		hour: "2-digit", minute: "2-digit", second: "2-digit"
	});
};
const mapElement = document.getElementById("map");




const fetchCity = () => {

	fetch(`https://api.openweathermap.org/data/2.5/weather?q=
	${inputEl.value}&
	appid=${apiKey}`)

		.then(response => response.json())
		.then(data => {

			// data loading !!! make it blinky blinky
			blinky_blinky_loading.innerText = " ";

			// if (!data.name) {

			// 	isInputTyped
			// 		.innerHTML = "city not found, try another one";

			// 	currentCityEl.innerHTML = ``;
			// 	let iconElement = data.weather[0].icon;
			// 	iconElement = ``;
			// 	tempElement.innerHTML = ``;
			// 	pressureElement.innerHTML = ``
			// 	windElement.innerHTML = ``;
			// 	cloudsElement.innerHTML = ``;
			// 	humidityElement.innerHTML = ``;
			// 	sun_r_Element.innerHTML = ``;
			// 	sun_s_Element.innerHTML = ``;
			// }

			// else {
			currentCityEl
				.innerHTML = `Current weather for <br> ${data.name}:`;

			let iconElement = data.weather[0].icon;
			if (!data.weather[0].icon) {
				iconElement == ""
			}
			else
				iconElement = document
					.getElementById("icon")
					.src = `http://openweathermap.org/img/w/${iconElement}.png`;

			tempElement
				.innerHTML = `Temperature: ` + Math.round(data.main.temp - 273.15) + `&#176 C`;
			pressureElement
				.innerHTML = `Pressure:	${data.main.pressure} hPa`
			windElement
				.innerHTML = `Wind: ${data.wind.speed} m/s`;
			cloudsElement
				.innerHTML = `Clouds: ${data.clouds.all} %`;
			humidityElement
				.innerHTML = `Humidity: ${data.main.humidity} %`;
			sun_r_Element
				.innerHTML = `Sunrise: ` + unixConverter(data.sys.sunrise);
			sun_s_Element
				.innerHTML = `Sunset: ` + unixConverter(data.sys.sunset);
			// console.log(data.sys.sunrise); // unix	
			// }

		});

};

const prepareForFetchCity = () => {

	if (fetchCity && inputEl.value !== "") {
		blinky_blinky_loading
			.innerText = `loading data`;
	}

	const isInputTyped = document
		.getElementById("blank_input_check");
	if (inputEl.value === "") {
		isInputTyped
			.innerHTML = "please type a city name";
	}

	else { fetchCity(); }

};




const fetchLocation = () => {

	const location = position => {

		const latitudeElement = position.coords.latitude;
		const longitudeElement = position.coords.longitude;

		fetch(`https://api.openweathermap.org/
		data/2.5/weather?
		lat=${latitudeElement}&
		lon=${longitudeElement}&
		appid=${apiKey}`)

			.then(response => response.json())
			.then(data => {

				// data loading !!! make it blinky blinky
				blinky_blinky_loading.innerText = "";

				inputEl.value = ``;

				currentCityEl
					.innerHTML = `Current weather for <br> ${data.name}:`;

				let iconElement = data.weather[0].icon;
				if (!data.weather[0].icon) {
					iconElement == ""
				}
				else
					iconElement = document
						.getElementById("icon")
						.src = `http://openweathermap.org/img/w/${iconElement}.png`;

				tempElement
					.innerHTML = `Temperature: ` + Math.floor(data.main.temp - 273.15) + `&#176 C`;
				pressureElement
					.innerHTML = `Pressure:	${data.main.pressure} hPa`
				windElement
					.innerHTML = `Wind: ${data.wind.speed} m/s`;
				cloudsElement
					.innerHTML = `Clouds: ${data.clouds.all} %`;
				humidityElement
					.innerHTML = `Humidity: ${data.main.humidity} %`;
				sun_r_Element
					.innerHTML = `Sunrise: ` + unixConverter(data.sys.sunrise);
				sun_s_Element
					.innerHTML = `Sunset: ` + unixConverter(data.sys.sunset);
				// console.log(data.sys.sunrise); // unix

			});
	};


	// THIS IS PROBLEMATIC bc of the icon 
	if (navigator.geolocation) {

		blinky_blinky_loading
			.innerText = `loading data`;

		inputEl.value = ``;

		// this will clear previously rendered data except the bloody icon
		currentCityEl.innerHTML = ``;
		let iconElement;
		iconElement = ``;
		tempElement.innerHTML = ``;
		pressureElement.innerHTML = ``
		windElement.innerHTML = ``;
		cloudsElement.innerHTML = ``;
		humidityElement.innerHTML = ``;
		sun_r_Element.innerHTML = ``;
		sun_s_Element.innerHTML = ``;

		navigator
			.geolocation
			.getCurrentPosition(location);

	}

	else {

		blinky_blinky_loading
			.innerText = `...cannot get your location`;

		// RELOAD PAGE in oredr to reset any previously rendered data ?
		// document.location.reload();
	}


};



// fffffffffiiiiinally

buttonEl_get_coordinates
	.addEventListener("click", fetchLocation);

buttonEl_get_city
	.addEventListener("click", prepareForFetchCity);
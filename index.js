let weather = {
	"apiKey": "e81e3b11971b9d95e2c3dce18be6ccf5",
	fetchWeather: function (city) {
		fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
		+ city 
		+ "&units=metric&appid=" 
		+ this.apiKey
		)
		.then((response) => response.json())
		.then((data) => this.displayWeather(data));
	},
	displayWeather: function(data){
        const { name } = data;
		const { icon, description } = data.weather[0];
		const{ temp, humidity } = data.main;
		const { speed } = data.wind;
		console.log(name,icon,description,temp,humidity,speed)

		document.querySelector(".city").innerText = "Weather In " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon +".png";
		document.querySelector(".description").innerHTML = description;
		document.querySelector(".temp").innerHTML = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
		document.querySelector(".wind").innerText = "Wind Speed:  " + speed + "km/hr";
		document.querySelector(".weather").classList.remove("loading");
	},
	search: function () {
		this.fetchWeather(document.querySelector(".search-bar").value);
	}
};

document.querySelector(".search button").addEventListener("click",function() {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup",function(event){
	if(event.key == "Enter"){
		weather.search();
	}
});

weather.fetchWeather("Modasa");
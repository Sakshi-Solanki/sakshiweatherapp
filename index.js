const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6e0fe46fcamshb02ddcd42d692aep177b2bjsn45497ffea7a5',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => { 
		console.log(response)

		
	 }) 
	.catch(err => console.error(err));
}
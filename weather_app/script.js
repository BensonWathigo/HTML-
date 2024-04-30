const apiKey= "4e88fde4600122cf52bfb8d5db19f41a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement =document.getElementById('location');
const temperatureElement = document.getElementById("temperature");
const descrptionElement = document.getElementById("description");

searchButton.addEventListener("click", () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }else {
        alert('Please enter a city.');
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        locationElement.textContent = data.name;
        temperatureElement.textContent =`${Math.round(data.main.temp)} ºC`;
        descrptionElement.textContent = data.weather[0].description;
        //countryElement.textContent = data.sys.country;

    })

    .catch((error) => {
        console.error('Error fetching weather data.', error);
    });

}
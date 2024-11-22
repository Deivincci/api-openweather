const axios = require('axios');
const prompt = require('prompt-sync')();

document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;


// Solicitar al usuario que ingrese el nombre de la ciudad
const city = prompt('Introduce el nombre de la ciudad: ');

// Tu API Key de OpenWeather
const apiKey = 'a4ff3383e745465693d6babd7455aa73';

// URL de la API de OpenWeather con los parámetros de ciudad y API Key
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

// Realizar la solicitud a la API
axios.get(url)
    .then(response => {
        const data = response.data;
        
        // Mostrar los datos en el HTML
        document.getElementById('cityName').innerText = `Clima en ${data.name}`;
        document.getElementById('temperature').innerText = `${data.main.temp}°C`;
        document.getElementById('description').innerText = data.weather[0].description;
        document.getElementById('humidity').innerText = `Humedad: ${data.main.humidity}%`;
        document.getElementById('windSpeed').innerText = `Velocidad del Viento: ${data.wind.speed} m/s`;
    })
    .catch(error => {
        console.log('Ciudad no encontrada o error en la solicitud.');
    });

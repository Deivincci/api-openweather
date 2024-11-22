const axios = require('axios');
const prompt = require('prompt-sync')();

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
        console.log(`Clima en ${data.name}:`);
        console.log(`Temperatura: ${data.main.temp}°C`);
        console.log(`Descripción: ${data.weather[0].description}`);
        console.log(`Humedad: ${data.main.humidity}%`);
        console.log(`Velocidad del Viento: ${data.wind.speed} m/s`);
    })
    .catch(error => {
        if (error.response) {
            console.log('Ciudad no encontrada o error en la solicitud.');
        } else {
            console.log('Error en la conexión:', error.message);
        }
    });

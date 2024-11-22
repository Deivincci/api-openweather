API OpenWeather
Este proyecto permite obtener información del clima utilizando la API de OpenWeather. El proyecto está dividido en dos partes:

Backend con Node.js: Implementa un servidor en Node.js que realiza peticiones a la API de OpenWeather.
Frontend con HTML, CSS y JavaScript: Proporciona una interfaz sencilla que hace las peticiones directamente desde el navegador usando JavaScript.
Instrucciones
Requisitos
Tener instalada la última versión de Node.js (si usas el backend).
Tener acceso a Internet para realizar las peticiones a la API de OpenWeather.
Backend (Node.js)
Clona este repositorio en tu máquina local.
Navega a la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias:

npm install
Crea un archivo .env en la raíz del proyecto y agrega tu API key de OpenWeather:
env

OPENWEATHER_API_KEY=tu-api-key-aqui
Inicia el servidor ejecutando el siguiente comando:

node app.js
La API estará disponible en http://localhost:3000. Puedes probarla enviando solicitudes a las rutas definidas en el código.
Frontend (HTML, CSS, JavaScript)
Abre el archivo index.html en tu navegador. Este archivo contiene todo el código necesario (HTML, CSS y JS).
El frontend realizará peticiones directamente a la API de OpenWeather desde el navegador, mostrando la información del clima en la página.
Avisos
Carpeta node_modules: No se sube la carpeta node_modules al repositorio debido a que contiene dependencias y GitHub tiene un límite en la cantidad de archivos que se pueden subir. Para instalar las dependencias, simplemente ejecuta npm install en tu entorno local.

Código CSS y JS: El archivo index.html incluye tanto el código CSS como el código JavaScript, por lo que no es necesario tener archivos separados para el diseño y la lógica.

Nota de Seguridad
Por razones de seguridad, no incluyo la API key directamente en el repositorio. Para utilizar la API, asegúrate de reemplazar OPENWEATHER_API_KEY=tu-api-key-aqui en el archivo .env del backend con tu propia clave API de OpenWeather.
El archivo .env es el archivo que almacena nuestras credenciales,en este caso para facilitar aprendizaje,no se incluye,teneis que añadir vuestra api key al archivo html o al archivo app.js

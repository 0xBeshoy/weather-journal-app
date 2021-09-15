require('dotenv').config();

/* Global Variables */

const api_key = process.env.API_KEY;
const mode = 'json';
const units = 'metric';
const zipCode = '12345';
// const countryCode = 'EG';

const baseURL = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${api_key}&mode=${mode}&units=${units}`;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


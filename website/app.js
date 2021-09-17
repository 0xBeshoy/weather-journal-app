

//const dotenv = require('dotenv').config();

/* Global Variables */
const apiKey = '3ee06ee6700f42ebfdac6b3e3cad16d7';
const mode = 'json';
const units = 'metric';
const zipCode = '';
// const countryCode = 'EG';
const apiURL = `http://api.openweathermap.org/data/2.5/weather`;

const getZipCode = document.getElementById('zip');
const getFeelings = document.getElementById('feelings');

const renderDate = document.getElementById('date');
const renderTemp = document.getElementById('temp');
const renderFeelings = document.getElementById('content');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();


const fetchWizData = async (apiURL, zipCode, apiKey) => {
    const url = `${apiURL}?zip=${zipCode}&appid=${apiKey}&mode=${mode}&units=${units}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const postWizData = async (url, data) => {
    const response = fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return response;
  };

  const updateWizData = async (url) => {
    const response = await fetch(url);
    const data = response.json().then((data) => {
      renderDate.innerHTML = newDate;
      renderTemp.innerHTML = data.temp;
      renderFeelings.innerHTML = data.feel;
    });
  };



    const btnClick = () => {
        const zipCode = getZipCode.value;
        const feelings = getFeelings.value;
      
        fetchWizData(apiURL, zipCode, apiKey)
          .then((data) => {
            console.log(data);
            return postWizData("/edit", {
              temp: data.main.temp,
              date: newDate,
              feel: feelings
            });
          })
          .then(() => {
            updateWizData("/edit");
          })
          .catch((err) => {
            console.log(err);
          });
      };

  document.getElementById('generate').addEventListener("click", btnClick);

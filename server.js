// Setup empty JS object to act as endpoint for all routes
projectData = {};

const PORT = 8080;

// Require Express to run server and routes
const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
var cors = require('cors');
// const config = require('dotenv');
// Start up an instance of app
const app = express();


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors())

// Initialize the main project folder
app.use(express.static('website'));



// Get weather data route
app.get('/edit', getWiz);

// /wiz route callback 
function getWiz(request, response){
    response.send(JSON.stringify(projectData));
}


// Edit weather data route
app.post('/edit', editWiz);

// /edit route callback
function editWiz(request, response){
    projectData.temp = request.body.temp;
    projectData.date = request.body.date;
    projectData.feel = request.body.feel;
    response.send(projectData);
}

// Setup Server
app.listen(
    PORT, () => {
        console.log(`Server is running on PORT N#: ${PORT} at http://localhost:${PORT}` );
    }
)

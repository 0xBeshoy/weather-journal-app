// Setup empty JS object to act as endpoint for all routes
projectData = {};

const PORT = process.env.PORT || 5000;

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser')
var cors = require('cors')
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


// Setup Server

app.listen(
    PORT, () => {
        `Server is running on PORT N#: ${PORT}`;
    }
)
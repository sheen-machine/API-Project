//the server recieves requests, 
//processes them and returns a response. 
// Set up ROUTES to handle these requests


// Setup empty JS object to act as endpoint for all routes
const projectDataEndpoint = [];

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 8000;

// Spin up the server callback function
const server = app.listen(port, listening);

// Callback to debug
function listening(){
    console.log('server running');
    console.log(`running on localhost: ${port}`);
};

//GET ROUTE
//This Get request returns Data to be stored in variable projectDataEndpoint
// Initialize all route with a callback function
app.get('/all', sendData);

// Callback function to complete GET '/all'
function sendData (request, response) {
  response.send(projectDataEndpoint);
  console.log("Im a working GET request")
  console.log(projectDataEndpoint)
  
};

// POST ROUTE
//POST request sends data to the 'addData'
// where it is stored and can be accessed through a GET request
// Should the GET and POST requests have the same URL endpoint?

        app.post('/addData', requestData);
            function requestData (request, res) {
                    newEntry = {
                    temp: request.body.temp,
                    date: request.body.newDate,
                    feelings: request.body.feelings
                    }
                console.log("elephants")
                projectDataEndpoint.push(newEntry)
                res.send(projectDataEndpoint)
                console.log(projectDataEndpoint)
                console.log("Im a working POST request")
          
                };




 



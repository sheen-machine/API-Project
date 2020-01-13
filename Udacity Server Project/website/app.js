// PROJECT GOAL: This project requires you to
// create an asynchronous web app that uses 
// Web API and user data to dynamically update the 
// UI for a Weather-Journal App.


// Personal API Key for OpenWeatherMap API
//how do I know what the make the base URL?
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = 'd342b4a284f0f6d769399076673f7205';


// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', doThisThing);

/* Function called by event listener */
/* Function to GET Web API Data*/
//call the API
//don't know what the URL should be
function doThisThing(x) {
    const zip = document.getElementById('zip').value;
    const getDataFromAPI = async (baseURL, zip, key, countryCode)=>{
        const response = await fetch (`${baseURL}${zip},${countryCode}&APPID=${key}`)
        try {
            const apiData = await response.json();
            console.log(apiData)
            return apiData;
        } catch(error) {
            console.log('error', error);
        }
    }
    // then add the data receieved from the API to POST request
     
    const feelings = document.getElementById('feelings').value;
    getDataFromAPI(baseURL, zip, apiKey, "us")
        .then(function(data){
        console.log(data)
        postData('/addData', {temp: data.main.temp, date: data.newDate, feelings:feelings}
        );
        const d = newDate();
        const newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
        
    })

   
.then(updateUI()

)
}
//Function to GET Project data
const updateUI = async () => {
    
    const request = await fetch('/all')
    try {
        const allData = await request.json()
        console.log(allData)
    document.getElementById('date').innerHTML = allData[0].newDate;
    document.getElementById('temp').innerHTML = allData[0].main.temp;
    document.getElementById('content').innerHTML = allData[0].feelings;
    
    } catch(error){
        console.log("error", error)
    }
}
 

/* Function to POST data */
const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', //GET POST PUT DELETE
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;

      } catch(error) {
      console.log("error", error);
}
}


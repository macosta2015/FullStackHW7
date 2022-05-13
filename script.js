//Declaring the Global variables
var nameInput = document.getElementById('uname');
var APIKey = "24956411e34fc55da6781bc2185e43c8";


//This code is to get the local storage and have it saved when refreshing
document.getElementById("demo").innerHTML = localStorage.getItem("Country Name");

//Function
document.querySelector('form.input-group').addEventListener('submit', function (e) {
    e.preventDefault(); 
    //Setting the local storage for the variable that was read
    localStorage.setItem('name3', nameInput.value);
    changeAPI()
    printingValuesHTML()
    printingValues()
});

//Function

function send() {
    //Setting the local storage for the variable that was read
    localStorage.setItem('name3', nameInput.value);
    changeAPI()
    printingValuesHTML()
    printingValues()
}



//Function
function printingValuesHTML (){
    // Set Item
    localStorage.setItem("Country Name: ", nameInput.value);
    // Retrieve
    document.getElementById("demo").innerHTML = localStorage.getItem("Country Name");
}

// Function-Running API code 
function changeAPI(){
    fetch(queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + uname.value + "&appid=" + APIKey)
    .then(response => response.json())
    .then (data => {
        const tempValue = data['main']['temp'];
        const nameValue = data['name'];
        const descValue = data['weather'][0]['description']; 
        const windValue = data['wind']['speed']; 
        console.log(data)
        console.log(tempValue)
        console.log(nameValue)  
        console.log(descValue)
        console.log(windValue)         
        // console.log(data)
        //Editing the HTML direcly 
        document.getElementById('tempValue').textContent = tempValue;
        document.getElementById("nameValue").textContent = nameValue
        document.getElementById("windValue").textContent = windValue
        document.getElementById("descValue").textContent = descValue

        //We are calling the secondAPIcall
        secondAPIcall()
    })
    .catch(err => alert("Wrong city name"))
}

//Function second call
function secondAPIcall(){
    const latitude = 32.7668;
    const longitude = -96.7836;
    fetch(queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIKey)
    
    .then(response => response.json())
    .then (data => {

        const cityValue = data['city']['name']
        const day1Value = data['list'][0]['dt_txt']; 
        const day2Value = data['list'][6]['dt_txt']; 
        const day3Value = data['list'][14]['dt_txt']; 
        const day4Value = data['list'][23]['dt_txt']; 
        const day5Value = data['list'][30]['dt_txt']; 

        //Getting the temperature
        const day1Temp = data['list'][0]['main']['temp']; 
        
        console.log('This is the value of the temperature::  ' + day1Temp)

        // console.log(cityValue)
        // console.log(day1Value)
        // console.log(day2Value)
        // console.log(day3Value)
        // console.log(day4Value)
        // console.log(day5Value)
        
        // document.getElementById('cityValue').textContent = cityValue;
        document.getElementById('day1Value').textContent = day1Value;
        document.getElementById('day2Value').textContent = day2Value;
        document.getElementById('day3Value').textContent = day3Value;
        document.getElementById('day4Value').textContent = day4Value;
        document.getElementById('day5Value').textContent = day5Value;




        console.log('secondAPIcall is running!')
        console.log(data)

    })
    .catch(err => alert("Wrong city name"))

}


//Function Printing Values
function printingValues(){
    console.log('Is this printing out!')
}










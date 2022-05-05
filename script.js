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
});

//Function
function send() {
    //Setting the local storage for the variable that was read
    localStorage.setItem('name3', nameInput.value);
    changeAPI()
    printingValuesHTML()
}

//Function
function printingValuesHTML (){
// Set Item
localStorage.setItem("Country Name", nameInput.value);
// Retrieve
document.getElementById("demo").innerHTML = localStorage.getItem("Country Name");
}

// Function-Running API code
function changeAPI(){
    // var APIKey = "24956411e34fc55da6781bc2185e43c8";
    fetch(queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + uname.value + "&appid=" + APIKey)
    .then(response => response.json())
    .then (data => console.log(data))
    .catch(err => alert("Wrong city name"))


//Connecting specigic variables to API

    // var input =   document.getElementById("inputText").innerHTML
    var input = document.querySelector('.input_text');
    var main = document.querySelector('#name');
    var temp = document.querySelector('.temp');
    var desc = document.querySelector('.desc');
    var clouds = document.querySelector('.clouds');
    var button= document.querySelector('.submit');

    button.addEventListener('click', function(name){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=' + APIKey)
        .then(response => response.json())
        .then(data => {
          var tempValue = data['main']['temp'];
          var nameValue = data['name'];
          var descValue = data['weather'][0]['description'];
        
          main.innerHTML = nameValue;
          desc.innerHTML = "Desc - "+descValue;
          temp.innerHTML = "Temp - "+tempValue;
          input.value ="";
        
        })
        
        .catch(err => alert("Wrong city name!"));
        })



}






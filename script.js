function send() {
    console.log('Where are printing: ')
    console.log(uname.value);
}

var nameInput = document.getElementById('uname');
console.log('Is this printing out: '+ nameInput)


//Function
document.querySelector('form.input-group').addEventListener('submit', function (e) {
//prevent the normal submission of the form
e.preventDefault();   
testVariable = nameInput.value;
console.log('New Variable: ' + testVariable)
localStorage.setItem('name2', testVariable);

document.getElementById("demo").innerHTML = localStorage.getItem("name");

changeAPI()
});

var cityInputName = document.getElementById("demo2").innerHTML = localStorage.getItem("name2");
console.log('cityInputName is equal to: ' + cityInputName)




var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

console.log('button value is: ' + button)


// Running API code
var APIKey = "24956411e34fc55da6781bc2185e43c8";
var city = cityInputName

// button.addEventListener('click', function(){

    cityInputName = 'Florida'

function changeAPI(){ 

    fetch(queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + uname.value + "&appid=" + APIKey)
    .then(response => response.json())
    .then (data => console.log(data))
    
    .catch(err => alert("Wrong city name"))
}

// Running code that returns plenty of information
// // fetch(queryURL)
// fetch(queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey)
// .then(response => response.json())
// .then (data => console.log(data))
// .catch(err => alert("Wrong city name"))




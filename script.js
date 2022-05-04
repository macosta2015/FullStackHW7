var nameInput = document.getElementById('uname');

//Function
document.querySelector('form.input-group').addEventListener('submit', function (e) {
    e.preventDefault(); 
    //Setting the local storage for the variable that was read
    localStorage.setItem('name3', nameInput.value);
    changeAPI()
});

//Function
function send() {
    //Setting the local storage for the variable that was read
    localStorage.setItem('name3', nameInput.value);
    changeAPI()
}

// Running API code
var APIKey = "24956411e34fc55da6781bc2185e43c8";
function changeAPI(){ 

    fetch(queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + uname.value + "&appid=" + APIKey)
    .then(response => response.json())
    .then (data => console.log(data))
    
    .catch(err => alert("Wrong city name"))
}






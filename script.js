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
    localStorage.setItem("Country Name", nameInput.value);
    // Retrieve
    document.getElementById("demo").innerHTML = localStorage.getItem("Country Name");
}

// Function-Running API code
function changeAPI(){
    // var APIKey = "24956411e34fc55da6781bc2185e43c8";
    fetch(queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + uname.value + "&appid=" + APIKey)
    .then(response => response.json())
    .then (data => {
        
        const tempValue = data['main']['temp'];
        const nameValue = data['name'];
        const descValue = data['weather'][0]['description']; 
        const windValue = data['wind']['speed']; 

        console.log(tempValue)
        console.log(nameValue)  
        console.log(descValue)
        console.log(windValue)         
        console.log(data)


        //Editing the HTML direcly 
        document.getElementById('tempValue').textContent = tempValue;
        document.getElementById("nameValue").textContent = nameValue
        document.getElementById("windValue").textContent = windValue
        document.getElementById("descValue").textContent = descValue
    })

    .catch(err => alert("Wrong city name"))
}


//Function Printing Values
function printingValues(){
    console.log('Is this printing out!')
    // console.log(descValue)
}










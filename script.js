//Declaring the Global variables
var nameInput = document.getElementById('uname');
var APIKey = "24956411e34fc55da6781bc2185e43c8";



// Function
function callingtheArray() {
    //Testing the array function
    console.log('We are testig the ARRAY')
    //storing array in localStorage
    var colors = ["Miami","Dallas","Austin","Seattle","Laredo","New York","San Francisco","New Mexico", "Tennessee"];
    localStorage.setItem("my_colors", JSON.stringify(colors)); //store colors
    var storedColors = JSON.parse(localStorage.getItem("my_colors")); //get them back
    console.log('Array value0: '+ storedColors[0])
    console.log('Array value1: '+ storedColors[1])
    console.log('Array value2: '+ storedColors[2])

    document.getElementById("nameValueARRAY0").textContent = storedColors[0]
    document.getElementById("nameValueARRAY1").textContent = storedColors[1]
    document.getElementById("nameValueARRAY2").textContent = storedColors[2]
    document.getElementById("nameValueARRAY3").textContent = storedColors[3]
    document.getElementById("nameValueARRAY4").textContent = storedColors[4]
    document.getElementById("nameValueARRAY5").textContent = storedColors[5]
    document.getElementById("nameValueARRAY6").textContent = storedColors[6]
    document.getElementById("nameValueARRAY7").textContent = storedColors[7]
    document.getElementById("nameValueARRAY8").textContent = storedColors[8]


    //This code is to get the local storage and have it saved when refreshing
    document.getElementById("demo").innerHTML = localStorage.getItem("Country Name");
}


//Function
document.querySelector('form.input-group').addEventListener('submit', function (e) {
    e.preventDefault(); 
    //Setting the local storage for the variable that was read
    localStorage.setItem('name3', nameInput.value);
    changeAPI()
    printingValuesHTML()
    printingValues()
    callingtheArray()
});


//Function
function send() {
    //Setting the local storage for the variable that was read
    localStorage.setItem('name3', nameInput.value);
    changeAPI()
    printingValuesHTML()
    printingValues()
    callingtheArray()
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
    fetch(queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + uname.value + "&appid=" + APIKey + "&units=imperial")
    .then(response => response.json())
    .then (data => {
        const tempValue = data['main']['temp'];
        const nameValue = data['name'];
        const descValue = data['weather'][0]['description']; 
        const windValue = data['wind']['speed']; 
        const latitudeValue = data['coord']['lat'];
        const longitudeValue = data['coord']['lon'];


        console.log(data)
        console.log(tempValue)
        console.log(nameValue)  
        console.log(descValue)
        console.log(windValue)     
        console.log(latitudeValue)
        console.log(longitudeValue)    
        // console.log(data)
        //Editing the HTML direcly 
        document.getElementById('tempValue').textContent = tempValue;
        document.getElementById("nameValue").textContent = nameValue
        document.getElementById("windValue").textContent = windValue
        document.getElementById("descValue").textContent = descValue

        //We are calling the secondAPIcall
        secondAPIcall(latitudeValue,longitudeValue)
    })
    .catch(err => alert("Wrong city name"))
}

//Function second call
function secondAPIcall(latitudeValue,longitudeValue){
    console.log('Hello Second API: ' + latitudeValue + ' ' + longitudeValue )
    const latitude = latitudeValue;
    const longitude = longitudeValue;
    console.log('Hello Second API, checking LAT AND LONG: ' + latitude + ' ' + longitude )
    fetch(queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIKey + "&units=imperial") 
    
    .then(response => response.json())
    .then (data => {

        //Getting the next five days 
        const cityValue = data['city']['name']
        const day1Value = data['list'][0]['dt_txt']; 
        const day2Value = data['list'][6]['dt_txt']; 
        const day3Value = data['list'][14]['dt_txt']; 
        const day4Value = data['list'][23]['dt_txt']; 
        const day5Value = data['list'][30]['dt_txt']; 

        //Getting the temperature of those five days
        const Temp1 = data['list'][0]['main']['temp']; 
        const Temp2 = data['list'][6]['main']['temp']; 
        const Temp3 = data['list'][14]['main']['temp']; 
        const Temp4 = data['list'][23]['main']['temp']; 
        const Temp5 = data['list'][30]['main']['temp']; 

        //Getting the wind value 
        const humidity1 = data['list'][0]['main']['humidity']; 
        const humidity2 = data['list'][6]['main']['humidity']; 
        const humidity3 = data['list'][14]['main']['humidity']; 
        const humidity4 = data['list'][23]['main']['humidity']; 
        const humidity5 = data['list'][30]['main']['humidity']; 
        
        // document.getElementById('cityValue').textContent = cityValue;
        document.getElementById('day1Value').textContent = day1Value;
        document.getElementById('day2Value').textContent = day2Value;
        document.getElementById('day3Value').textContent = day3Value;
        document.getElementById('day4Value').textContent = day4Value;
        document.getElementById('day5Value').textContent = day5Value;

        // Getting the documentById to HTML
        document.getElementById('Temp1').textContent = Temp1;
        document.getElementById('Temp2').textContent = Temp2;
        document.getElementById('Temp3').textContent = Temp3;
        document.getElementById('Temp4').textContent = Temp4;
        document.getElementById('Temp5').textContent = Temp5;

        // Getting the documentById to HTML
        document.getElementById('humidity1').textContent = humidity1;
        document.getElementById('humidity2').textContent = humidity2;
        document.getElementById('humidity3').textContent = humidity3;
        document.getElementById('humidity4').textContent = humidity4;
        document.getElementById('humidity5').textContent = humidity5;


        console.log('secondAPIcall is running!')
        console.log(data)

    })
    .catch(err => alert("Wrong city name"))

}


//Function Printing Values
function printingValues(){
    console.log('Is this printing out!')
}










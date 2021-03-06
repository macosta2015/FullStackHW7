//Declaring the Global variables
var nameInput = document.getElementById('uname');
var APIKey = "24956411e34fc55da6781bc2185e43c8";
var myarr = []; 

//GOLDEN CODES
//We are adding arrays by the user input
function addTo(){ 
    myarr.push(document.getElementById("uname").value); 
    return ((myarr[0]),(myarr[1]),(myarr[2]), (myarr[3]), (myarr[4]),(myarr[5]), (myarr[6]), (myarr[7]), (myarr[8]))
} 

// Function
function callingtheArray() {
    addTo()
    // console.log('We are printing the addTo values: ' + myarr[0] + ' ' + myarr[1] +  ' ' + (myarr[2]) + ' ' + (myarr[3]) + ' ' + myarr[4] + ' ' + myarr[5] +  ' ' + (myarr[6]) + ' ' + (myarr[7]) + ' ' + (myarr[8]));
    var colors = [myarr[0],myarr[1],myarr[2],myarr[3],myarr[4],myarr[5],myarr[6],myarr[7],myarr[8],];
    localStorage.setItem("my_colors", JSON.stringify(colors)); //store colors
    var storedColors = JSON.parse(localStorage.getItem("my_colors")); //get them back
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
    changeAPI(uname.value)
    printingValues()
});


//Function
function send() {
    changeAPI(uname.value)
    printingValues()
}


//HOT CODE
document.getElementById("nameValueARRAY0").addEventListener("click", displayDate0);
document.getElementById("nameValueARRAY1").addEventListener("click", displayDate1);
document.getElementById("nameValueARRAY2").addEventListener("click", displayDate2);
document.getElementById("nameValueARRAY3").addEventListener("click", displayDate3);
document.getElementById("nameValueARRAY4").addEventListener("click", displayDate4);
document.getElementById("nameValueARRAY5").addEventListener("click", displayDate5);
document.getElementById("nameValueARRAY6").addEventListener("click", displayDate6);
document.getElementById("nameValueARRAY7").addEventListener("click", displayDate7);
document.getElementById("nameValueARRAY8").addEventListener("click", displayDate8);

//Testing reading the values
//Function
function displayDate0() {
    document.getElementById("demo").innerHTML = "Event Listener: " + changeAPI(myarr[0]);
}
function displayDate1() {
    document.getElementById("demo").innerHTML = "Event Listener: " + changeAPI(myarr[1]);
}
function displayDate2() {
    document.getElementById("demo").innerHTML = "Event Listener: " + changeAPI(myarr[2]);
}
function displayDate3() {
    document.getElementById("demo").innerHTML = "Event Listener: " + changeAPI(myarr[3]);
}
function displayDate4() {
    document.getElementById("demo").innerHTML = "Event Listener: " + changeAPI(myarr[4]);
}
function displayDate5() {
    document.getElementById("demo").innerHTML = "Event Listener: " + changeAPI(myarr[5]);
}
function displayDate6() {
    document.getElementById("demo").innerHTML = "Event Listener: " + changeAPI(myarr[6]);
}
function displayDate7() {
    document.getElementById("demo").innerHTML = "Event Listener: " + changeAPI(myarr[7]);
}
function displayDate8() {
    document.getElementById("demo").innerHTML = "Event Listener: " + changeAPI(myarr[8]);
}
//HOT CODE END




// Function-Running API code 
function changeAPI(localCityName){
    
    // var localCityName = "Laredo"
    fetch(queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + localCityName + "&appid=" + APIKey + "&units=imperial")

    .then(response => response.json())
    .then (data => {
        const tempValue = data['main']['temp'];
        const nameValue = data['name'];
        const descValue = data['weather'][0]['description']; 
        const windValue = data['wind']['speed']; 
        const latitudeValue = data['coord']['lat'];
        const longitudeValue = data['coord']['lon'];

        document.getElementById('tempValue').textContent = tempValue;
        document.getElementById("nameValue").textContent = nameValue
        document.getElementById("windValue").textContent = windValue
        document.getElementById("descValue").textContent = descValue

        //We are calling the secondAPIcall
        secondAPIcall(latitudeValue,longitudeValue)

        for (let i = 0; i < 5; i++) {
            if (uname.value == myarr[i]){
                console.log('THE SAME CITY VALUE: ' + myarr[i])
                //GOLD! The return will exit the function if it satifies the if statement!
                return;
            }
        }
    
        callingtheArray(nameValue)

    })
    .catch(err => alert("Wrong city name"))
}


//Function second call
function secondAPIcall(latitudeValue,longitudeValue){
    const latitude = latitudeValue;
    const longitude = longitudeValue;
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


        // console.log('secondAPIcall is running!')
        console.log(data)

    })
    .catch(err => alert("Wrong city name"))

}


//Function Printing Values
function printingValues(){
    // console.log('Is this printing out!')
}










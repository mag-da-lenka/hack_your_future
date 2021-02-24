console.log(`Hello World! Hello Kitty! / Parallel world connection test.`)
console.log(`\n \n This is HOMEWORK JS2-3 week-11 by Magdalena /HYF /class 12. \n\ \n`);



// 01.0 WARM UP 


// 01.1  
setTimeout(() => console.log(`WarmUp: 01.1: I'm here after 2.5 seconds`), 2500);


// 01.2 
function logDelayedStrings(stringToLog, delay) {
    return setTimeout(() => console.log(stringToLog), delay)
}
logDelayedStrings(`WarmUp: 01.2: I'm here after 1.0 second.`, 1000);
logDelayedStrings(`WarmUp: 01.2: I'm here after 1.2 seconds.`, 1200);


// 01.3
function logDelayedStringsWhenClicked() {
    logDelayedStrings(`WarmUp: 01.3: I'm called 5 seconds after the sad button is clicked.`, 5000);
}
const sadButtonElement = document
    .getElementById("sad-bttn")
    .addEventListener("click", logDelayedStringsWhenClicked);


// 01.4
const logEarth = () => { console.log(`WarmUp: 01.4: Earth`); };
const logSaturn = () => { console.log(`WarmUp: 01.4: Saturn`); };
function planetLogFunction(callback) {
    callback();
}
planetLogFunction(logEarth);
planetLogFunction(logSaturn);



// 01.5  
// Create a button with the text called "Log location". 
// When this button is clicked the location (latitude, longitude) 
// of the user should be logged out using this browser api 
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API


navigator.geolocation.getCurrentPosition((position) => {
    position;

    const locationButton = document.getElementById('location-btn')
    locationButton.addEventListener('click', () => {
        const latStringElement = document.getElementById('lat-string');
        const lonStringElement = document.getElementById('lon-string');
        latStringElement.innerHTML = `Latitude  : ${position.coords.latitude.toFixed(2)}`
        lonStringElement.innerHTML = `Longitude : ${position.coords.longitude.toFixed(2)}`;
    });
});



// 01.6 (optional)
// Show* that location on a map using Google maps api: 
// https://developers.google.com/maps/documentation/javascript/overview#maps_map_simple-javascript 

// navigator.geolocation.getCurrentPosition(position => {
//     position; 
//     function myMap() {
//         map = new google.maps.Map(document.getElementById('location-map'), {
//             center: { lat: position.coords.latitude, lng: position.coords.longitude },
//             zoom: 12,
//         });
//     }
//     myMap()
// });


// 01.7
function runAfterDelay(delay, callback) {
    setTimeout(callback, delay * 1000)
}
runAfterDelay(4, function () { console.log(`WarmUp: 01.7: I should log after 4 seconds`); })
runAfterDelay(3, function () { console.log(`WarmUp: 01.7: I should log after 3 seconds`); })


// 01.8 
// double click
let dbClickEl = document;
dbClickEl = document
    .addEventListener('dblclick', function () {
        console.log(`WarmUp: 01.8: This is a DOUBLE CLICK.`)
    })
// mouse enter 
let mouseEnterEl = document;
mouseEnterEl = document
    .addEventListener('mouseenter', function () {
        console.log(`WarmUp: 01.8: <--- The mouse has entered the document.`)
    })
// mouse leave
let mouseLeaveEl = document;
mouseLeaveEl = document
    .addEventListener('mouseleave', function () {
        console.log(`WarmUp: 01.8: ---> The mouse has left the document.`)
    })


// 01.9 
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {

    logFunnyJoke = function () {
        console.log(`WarmUp: 01.9: : -)
    - What is the most used language in programming ?
        -Profanity.`)
    }

    logBadJoke = function () {
        console.log(`WarmUp: 01.9: : -(
    -Why do Java developers wear glasses ?
        -Because they cannot C#`)
    }

    if (shouldTellFunnyJoke === true) {
        return logFunnyJoke();
    }
    else {
        return logBadJoke();
    }
}
jokeCreator(true);
jokeCreator(0);




// 02.0 Function as a variable: Create funtions that are used in these different ways: 

// 02.1 Create an array with 3 items. All items should be functions. 
// Iterate through the array and call all the functions.
function fn_1() { console.log(`WarmUp: 02.1: I'm function fn_1`); }
function fn_2() { console.log(`WarmUp: 02.1: I'm function fn_2`); }
function fn_3() { console.log(`WarmUp: 02.1: I'm function fn_3`); }
let funcArray = [fn_1, fn_2, fn_3];
funcArray.forEach(aFunc => aFunc());
console.log("WarmUp: 02.1: funcArray:", funcArray)

// 02.2 Create a function as a const and try creating a function normally. 
const function_1 = () => (`WarmUp: 02.2: function_1 (as a variable)`);
function function_2() { return (`WarmUp: 02.2: function_2 (old school)`); }
// Call both functions.
console.log(function_1());
console.log(function_2());

// 02.3 Create an object that has a key whose value is a function. 
function testObjKey1ValFunction() {
    console.log(`WarmUp: 02.3: I'm testObjKey1ValFunction`)
}
const testObject = {
    testObjectKey1: testObjKey1ValFunction,
    name: "Squirreloid",
    food: "nuts"
};
// Try calling this function.
// testObjKey1ValFunction(); // too obvious :>
testObject.testObjectKey1();
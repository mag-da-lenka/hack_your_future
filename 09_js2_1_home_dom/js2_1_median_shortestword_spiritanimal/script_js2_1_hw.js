console.log(`Hello Squirrels! /Parallel world connection test. 
This is HOMEWORK JS2-1 week-09 by Magdalena /HYF /class 12. \n `)


// 1. ---> FIND THE SHORTEST WORD  --->  
// Write a function that finds the shortest word of an array of words 
let danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
// console.log(danishWords); //  (6) ["bil", "plante", "kaffe", "bog", "ø", "planetarium"]
// console.log(danishWords.length);         // --->  6
// console.log(danishWords.indexOf('ø'));   // --->  4
// console.log(danishWords[4]);             // --->  ø
// console.log(danishWords[4].length);      // --->  1   
function findTheShortestWord(arraaaay) {
    return arraaaay.reduce(function (previousWord, currentWord) {
        if (currentWord.length < previousWord.length) {
            return currentWord;
        }
        else
            return previousWord;
    })
}
console.log('01: The shortest Danish word is:', findTheShortestWord(danishWords));




// 2. ---> DIFFERENCE BETWEEN MEDIAN AND AVERAGE ------------------------------------
let housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

// Make a function that takes an array as parameter and returns the average of that parameter 
function getAverage(arr) {
    let pricesSum = 0;
    for (let i = 0; i < arr.length; i++) {
        pricesSum = pricesSum + arr[i];
    }
    // console.log(pricesSum); // ---> 157,900,000  
    let average = Math.round(pricesSum / arr.length); // ---> 157,900,000 / 7 ---> 22557142
    return average
}
// console.log(`The average of the housePrices array is ${(getAverage(housePrices))}. 
// ---> the sum of all the prices divided by the number of prices`)
console.log("02_a: The average of the house prices is: ", getAverage(housePrices),
    " === the sum of the prices / the number of prices")

// Make a function that takes an array as parameter and returns the median of that parameter
function getMedian(arr) {
    let middleIndex = Math.floor(arr.length / 2);
    let median = arr[middleIndex];
    return median;
}
console.log("02_b: The median of the house prices is: ", getMedian(housePrices), ".")

// Now create a function that calculates the median and the average 
// and returns these two value in an object. // use the functions on this array
function getAverageAndMedian(arr) {
    let objectWithAverageAndMedian = {
        averageKey: getAverage(arr),
        medianKey: getMedian(arr)
    }
    return objectWithAverageAndMedian
}
console.log("02_c: objectWithAverageAndMedian says: ",
    getAverageAndMedian(housePrices));



// 3. ---> SPIRIT ANIMAL NAME GENERATOR  
// 3a: function with a parameter (no connection with html)
let firstWordsX = ["Drunk", "Stoned", "Forrest", "Mortal", "Fluffy",
    "Cyber", "Hardworking", "Squeeshy", "Martian", "Smart"];
let secondWordsX = ["Koala", "Kitty", "Squirrel", "Fluffling",
    "Squirrel", "Bunny", "Alpaca", "Hedgehog", "Robot", "Wolf"];
let firstWordsXRandom = firstWordsX[Math.floor(Math.random() * firstWordsX.length)];
let secondWordsXRandom = secondWordsX[Math.floor(Math.random() * secondWordsX.length)]
let spiritAnimalX = firstWordsXRandom + " " + secondWordsXRandom;
function getSpiritAnimal(name) {
    if (!name) {
        return name;
    }
    else if (typeof (name) === typeof ('somerandomstring')) {
        return spiritAnimalX;
    }
    else if (typeof (name) === typeof (666)) {
        return name;
    }
}
console.log(`03_a: You've typed "Magda". ---> ${getSpiritAnimal('Magda')}`,);
console.log(`03_a: You've typed   . ---> ${getSpiritAnimal()}`,);
console.log(`03_a: You've typed 666. ---> ${getSpiritAnimal(666)}`,);
console.log(`03_a: You've typed "". ---> ${getSpiritAnimal("")}`,);
console.log(`03_a: You've typed null. ---> ${getSpiritAnimal(null)}`,);

// 3b: function without parameters (connected to html)
function getSpiritAnimalName() {

    let adjectives = ["Drunk", "Stoned", "Forrest", "Mortal", "Fluffy",
        "Cyber", "Hardworking", "Squeeshy", "Martian", "Smart"];
    let nouns = ["Koala", "Kitty", "Squirrel", "Fluffling",
        "Squirrel", "Bunny", "Alpaca", "Hedgehog", "Robot", "Wolf"];
    let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    let theTypedName = document.getElementById("typedName").value;
    let theNameResult = document.getElementById("result-displayed");

    if (!theTypedName) {
        alert(`Please type something that vaguely resembles a human name.`)
    } else {
        theNameResult.innerText = `Hey ${theTypedName}! 
        Your random animal is ${randomAdjective} ${randomNoun}.`;
    }
}
let theButton = document.getElementById("animalize-button");
theButton.addEventListener("click", getSpiritAnimalName);





// NOTES: (feel free to ignore)

// ex. 2 quick check: 
// console.log((3000000 + 3500000 + 1300000 + 40000000 + 100000000 + 8000000 + 2100000) / 7) 
// // ---> 22,557,143 // average
// console.log(40000000 / 2)  
// // ---> 40,000,000    // median lvl easy
// console.log((40000000 / 2) + (40000000 / 2 + 1))        
// // ---> 40,000,001    // median lvl advanced
// console.log(((40000000 / 2) + (40000000 / 2 + 1)) / 2)  
// // ---> 20,000,000.5  // average of median lvl easy and median lvl adv
// ex. 2 ---> don't: 
// console.log(`Here's what objectWithAverageAndMedian says: ${getAverageAndMedian(housePrices)}`)                
// ---> [object Object] 
// console.log('Here\'s what objectWithAverageAndMedian says:' + ' ' + getAverageAndMedian(housePrices));         
// ---> [object Object] 
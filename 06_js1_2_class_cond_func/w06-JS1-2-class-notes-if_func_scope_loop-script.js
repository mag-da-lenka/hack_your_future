console.log(`This is JS1-2 week 06 - CLASS EXERCISES (all done)

https://github.com/HackYourFuture-CPH/JavaScript/tree/master/javascript1/week2 \n `);


console.log(`\n  ----> The official plan (done!) \n 
1. IF statements 
2. functions: getCircleArea and celciusToFahrenheit 
              (extras: multiplying, calculateAge in 11 versions)
3. Scope 
4. simple FOR loop 
5. FOR loop in a function 
6. send emails  \n \n  `);




// 1. If STATEMENTS 
console.log(`\n 1. IF statements - options \n `);


// Create an if sentence that will give a user a message based on his bank account balance. Use the balance variable and change that.
// If a user has less that 0 log out 'Please earn some money!'  <0
// If a user has between 0 and 1000 log out 'Your balance is looking okay' 0-1000
// If a user has between 1000 and 3000 log out 'Your balance is looking good' 1000-3000
// If a user has between 3000 and 10000 log out 'Your balance is fantastic' 3000-10.000
// If a user has more than 10000 log out 'Your balance is AMAZING!' >10.000
// const balance = 1000;

// option 1: if --> will log all the messages where the conditions are met, see below
// do not put any RETURNs here bc they belong in FUNCTIONS, not 'if statements' !!!!!!!!!!!!!!!!!!!!!
console.log(`option 1`);
const balance1 = 1000;
if (balance1 <= 0) {
    console.log("Please earn some money!");
} if (balance1 > 0 && balance1 <= 1000) { // true && true
    console.log("Your balance is looking okay");
} if (balance1 > 1000 && balance1 <= 3000) { //if we put >= 1000, we'd get ...okay and  ... good bc our const would fall into both conditions
    console.log('Your balance is looking good');
} if (balance1 > 3000 && balance1 <= 10000) {
    console.log('Your balance is fantastic');
} if (balance1 > 10000) {
    console.log('Your balance is AMAZING!');
}

// option 2a: else if --> will log the first line where the conditions are met 
console.log(`option 2a`);
const balance2a = 1000;
if (balance2a <= 0) {
    console.log("Please earn some money!");
} else if (balance2a > 0 && balance2a <= 1000) { // true && true
    console.log("Your balance is looking okay");  //the condition will be met here so _only_  ....okay will be logged (evaluation is stopped) 
} else if (balance2a >= 1000 && balance2a <= 3000) {
    console.log('Your balance is looking good');
}

// option 2b: else if --> will log the first line where the conditions are met 
console.log(`option 2b`);
const balance2b = 100000; //now it's a hundred
if (balance2b <= 0 && currency === 'DKK') {
    console.log("Please earn some money!");
} else if (balance2b > 0 && balance2b <= 1000) { // true && true
    console.log("Your balance is looking okay");
} else if (balance2b >= 1000 && balance2b <= 3000) {
    console.log('Your balance is looking good');
} else if (balance2b > 3000 && balance2b <= 10000) {
    console.log('Your balance is fantastic');
} else if (balance2b > 10000 && balance2b <= 50000) {
    console.log('Your balance is AMAZING!');
} else {
    console.log("you're rich!"); //this is where the condition is finally met
}

// option 3a: if we have more things to compare, eg. balance an currency 
console.log(`option 3a`);
const balance3a = 100000; //now it's a hundred 
const currency3a = 'DKK'; //one more variable, why not :) 
if (balance3a <= 0 && currency3a === 'DKK') {
    console.log("Please earn some money!");
} else if (balance3a > 0 && balance3a <= 1000) { // true && true
    console.log("Your balance is looking okay");
} else if (balance3a >= 1000 && balance3a <= 3000) {
    console.log('Your balance is looking good');
} else if (balance3a > 3000 && balance3a <= 10000) {
    console.log('Your balance is fantastic');
} else if (balance3a > 10000 && balance3a <= 50000) {
    console.log('Your balance is AMAZING!');
} else {
    console.log("you're rich!"); //this is where the condition is finally met
}

// option 3b: if we have more things to compare, eg. balance an currency 
console.log(`option 3b`);
const balance3b = 100000; //now it's a hundred but could be declared even like this: let balance (see option 4); 
const currency3b = 'DKK'; //one more variable, why not :) 
const isRichAndDkk = currency3b === 'DKK' && balance3b > 100000;

if (balance3b <= 0 && currency3b === 'DKK') {
    console.log("Please earn some money!");
} else if (balance3b > 0 && balance3b <= 1000) { // true && true
    console.log("Your balance is looking okay");
} else if (balance3b >= 1000 && balance3b <= 3000) {
    console.log('Your balance is looking good');
} else if (balance3b > 3000 && balance3b <= 10000) {
    console.log('Your balance is fantastic');
} else if (balance3b > 10000 && balance3b <= 50000) {
    console.log('Your balance is AMAZING!');
} else {
    console.log("you're rich!"); //this is where the condition is finally met
}


// option 4: if the balance have no value, what we get is You're rich, so think twice bc it is weird (...)
console.log(`option 4`);
let balance4;
if (balance4 <= 0 && currency4 === 'DKK') {
    console.log("Please earn some money!");
} else if (balance4 > 0 && balance4 <= 1000) { // true && true
    console.log("Your balance is looking okay");
} else if (balance4 >= 1000 && balance4 <= 3000) {
    console.log('Your balance is looking good');
} else if (balance4 > 3000 && balance4 <= 10000) {
    console.log('Your balance is fantastic');
} else if (balance4 > 10000 && balance4 <= 50000) {
    console.log('Your balance is AMAZING!');
} else {
    console.log("you're rich!");
}

// for more specific cases google ----> case switch 
// ......the end of IF STATEMENTS ............................................................












// 2. Functions ----- how to create and call them  (call === run /execute /sth like this) 
console.log(`\n 2. FUNCTIONS: multiplying, calculateAge in 11 versions, getCircleArea and celciusToFahrenheit \n `);



console.log(`\n---> basics: `)
function myFunction() { console.log('Test. This is my first function logged. Yaaay.'); }
myFunction();

function multipliesBy2(number) { return number * 2; }
console.log(multipliesBy2());  // Nan

function multipliesBy3(number) {
    console.log(number * 3);  // Nan
    console.log(number * 8);  // Nan
    const name = 'Hiiiii';
    return 'hyf';
}
console.log(multipliesBy3()); // ---> hyf -because the RETURN wins!

function multipliesBy5(number) {
    return number * 5;
}
const number = 10;
const times5 = multipliesBy5(number)
console.log(`${number} times 2 is ${times5}`); // 5 times 2 is 10






console.log(`\n---> FUNCTION calculateAge in 11 versions :) `)


function calculateAge1(yearOfBirth1, futureYear1) {
    const age1 = futureYear1 - yearOfBirth1;
    return age1;
}
const age1 = calculateAge1(1990, 2020);
console.log(age1); // ---> 30


function calculateAge2(yearOfBirth2, futureYear2, name2) {
    const age2 = futureYear2 - yearOfBirth2;
    return `${name2} will be ${age2} in ${futureYear2}`;
}
const age2 = calculateAge2(1990, 2020);
console.log(age2); // ----> undefined will be 30 in 2020 



// if we want to check for the name ---> use if statement and a boolean
function calculateAge3(yearOfBirth3, futureYear3, name3) {
    if (name3) {    //could also be sth like ---> if (name.length > 0)
        const age3 = futureYear3 - yearOfBirth3;
        return `${name3} will be ${age3} in ${futureYear3}`;
    }
}
const age3 = calculateAge3(1990, 2020);
console.log(age3); //---> undefined (because the name argument is not there)


function calculateAge4(yearOfBirth4, futureYear4, name4) {
    if (name4) { //we're only checking it the name is there by mueans of the truthy or falsy concept in js!!!
        const age4 = futureYear4 - yearOfBirth4;
        return `${name4} will be ${age4} in ${futureYear4}`;
    }
}
const age4 = calculateAge4(1980, 2020, 'Magda');
console.log(age4); // ---> Magda will be 40 in 2020 


// OPTION: negating the name
function calculateAge5(yearOfBirth5, futureYear5, name5) {
    if (!name5) {
        return 'Please provide the name';
    } else {
        const age5 = futureYear5 - yearOfBirth5
        return `${name5} will be ${age5} in ${futureYear5}`;
    }
}
const result5 = calculateAge5(1990, 2020); // const is now result, not age!
console.log(result5); // ---> Please provide the name 


// add 'Magda' 
function calculateAge6(yearOfBirth6, futureYear6, name6) {
    if (!name6) {
        return 'Please provide the name';
    } else {
        const age6 = futureYear6 - yearOfBirth6
        return `${name6} will be ${age6} in ${futureYear6}`;
    }
}
const result6 = calculateAge6(1980, 2020, 'Magda');
console.log(result6); //logs ---> Magda will be 40 in 2020


// checking for the name by the length 
function calculateAge7(yearOfBirth7, futureYear7, name7) {
    if (!name7.length > 1) {  //negation
        return 'Please provide the name';
    } else {
        const age7 = futureYear7 - yearOfBirth7
        return `${name7} will be ${age7} in ${futureYear7}`;
    }
}
const result7 = calculateAge7(1990, 2020, 'a');
console.log(result7); //logs ---> a will be 30 in 2020  


// o_O     !! 
function calculateAge8(yearOfBirth8, futureYear8, name8) {
    if (!!name8.length > 1) {   // !!
        return 'Please provide the name';
    } else {
        const age8 = futureYear8 - yearOfBirth8
        return `${name8} will be ${age8} in ${futureYear8}`;
    }
}
const result8 = calculateAge8(1990, 2020, 'a'); //let's try with 'a'
console.log(result8); // ---> a will be 30 in 2020  


// so what if we now want to check for the name by the length ?
function calculateAge9(yearOfBirth9, futureYear9, name9) {
    if (name9.length <= 1) { //back to norm hahaha but reversing into ---->   <=   <---- because 'a' is not a name! 
        return 'Please provide the name';
    } else {
        const age9 = futureYear9 - yearOfBirth9
        return `${name9} will be ${age9} in ${futureYear9}`;
    }
}
const result9 = calculateAge9(1990, 2020, 'a'); //let's try with 'a'
console.log(result9); //logs ---> Please provide the name 


// so what if we now want to check for the name by the length ?
function calculateAge10(yearOfBirth10, futureYear10, name10) {
    if (name10.length <= 1) { //back to norm hahaha but reversing into ---->   <=   <---- because 'a' is not a name! 
        return 'Please provide the name';
    } else {
        const age10 = futureYear10 - yearOfBirth10
        return `${name10} will be ${age10} in ${futureYear10}`;
    }
}
const result10 = calculateAge10(1990, 2020, 'Ma'); //let's try with 'al'
console.log(result10); //logs ---> Ma will be 30 in 2020 


// 00:49:00 question (...) 
// then an example with an array and map for arrays as params in functions so that we can do sth for every number in an array until 00:57:00 


function calculateAge11(yearOfBirth11, futureYear11, nameArray11) { //this is not the full version; listen and fill in the missing info;
    // my version 
    const age11 = futureYear11 - yearOfBirth11
    return `${nameArray11} will be ${age11} in ${futureYear11}`;
}
const result11 = calculateAge11(1991, 2020, ['magda', 'squirrel', 'fluffling']); //
console.log(result11); // ---> magda,squirrel,fluffling will be 29 in 2020






console.log(`\n---> Math.random`)

// 00:58:20 about Math.random, which is one of the functions built in js
function calculateRandomValue1() {
    return Math.random()    // the default range is between 0 and 1  
}
console.log(calculateRandomValue1()); // ----> eg. 0.199356351729856 
console.log(calculateRandomValue1()); // ----> eg. 0.476451379455783 


function calculateRandomValue2() {
    return Math.random() * 10;
}
console.log(calculateRandomValue2()); // ----> eg. 9.570666117463265 


function calculateRandomValue3() {
    return Math.round(Math.random() * 10);
}
console.log(calculateRandomValue3()); // ---> eg. 3


console.log(`\n---> Math.floor Math.round `);
console.log(Math.floor(3.1)); // ---> 3  
console.log(Math.floor(3.5)); // ---> 3
console.log(Math.floor(3.7)); // ---> 3 (apparently it only rounds down)

console.log(Math.round(3.1)); // ---> 3
console.log(Math.round(3.5)); // ---> 4 (apparently it rounds up when the decimal equals or or higher than 5)
console.log(Math.round(3.7)); // ---> 4





// Create a function called getCircleArea. 
console.log(`\n---> getCircleArea(radius) :) `)

// It should have the radius of the circle as parameter and return the circle area. 
// What happens if we dont return anything in the function? 
// My solution 


function getCircleArea(radius) {
    let circleArea = Math.PI * Math.pow(radius, 2);
    return `The circle area will be ${circleArea}`;
}
console.log(getCircleArea(5));


// class solution: 
function getCircleArea(radius) {
    const circleArea = Math.PI * Math.pow(radius, 2);
    return circleArea;
}
const radius = 10;
const circleArea = getCircleArea(radius);
console.log(circleArea);



// Create a function called celciusToFahreneit it should have a parameter called celcius.
console.log(`\n---> function celciusToFahreneit(celcius) :) `)


function celciusToFahreneit(celcius) { // My soution
    let degrFahr = (celcius * 9 / 5) + 32;
    return `The temperature in Fahrenheit will be ${degrFahr}`
}
console.log(celciusToFahreneit(1)); // ---> The temp ... will be 33.8 


function celciusToFahreneitt(celcius) { // class solution: 
    return (1.8 * celcius) + 32;
}
const celcius = 1;
const fahrenheit = celciusToFahreneitt(celcius);
console.log(fahrenheit);           // ---> 33.8 

// --- BREAK -----------------------------------------------------------------------------











// SCOPE explained 
console.log(`\n 3. SCOPE explained \n `);





// FOR loop (...and the video is missing again - 00:17:10 just audio..)
console.log(`\n 4. FOR loop explained \n `);


// Exercise from the lesson plan  


console.log(`\n---> FOR loop - simple example :) `)

for (let index = 0; index <= 5; index++) {
    console.log(index);
} // ---> will display numbers from 0 to 5



console.log(`\n---> FOR loop --->  huehuehuehuehuehuehue :) `)
function spam(number) {
    let repeated = ''                  // 1) Define the simplest case
    for (let i = 0; i < number; i++) { // 2) Df condition: how many times we want to repeat
        repeated = repeated + 'hue'    // 3) What is our update rule
    }
    return repeated // Return in the end
}
console.log(spam(0))
console.log(spam(1))
console.log(spam(6))
console.log(spam(0) === '')           // Test cases. Good to do "empty" (here it's zero)
console.log(spam(1) === 'hue')
console.log(spam(6) === 'huehuehuehuehuehue')









// FOR loop in a function 
console.log(`\n 5. FOR loop in a function \n `);

for (let i = 74; i <= 78; i++) {
    console.log(i);
}





// Create a function that has two parameters: stringToLog and numberOfTimesToLog
console.log(`\n---> function logString1(stringToLog1, numberOfTimesToLog1)\n`)

// When calling the function it should log out the stringToLog the amount of times specified in numberOfTimesToLog. Use a for loop.
//  00:46:46 (version 1 ?)



// version 2a
function logString2a(stringToLog2a, numberOfTimesToLog2a) {

    for (let i = 0; i < numberOfTimesToLog2a; i++) {

        console.log(`2a: ${stringToLog2a}`);

    }

}
logString2a('Javascript is great ', 6);
logString2a('howdy ', 3);



// version 2b
function logString2b(stringToLog2b, numberOfTimesToLog2b) {

    for (let i = 0; i < numberOfTimesToLog2b; i++) {

        console.log(`2b: ${stringToLog2b} - ${i}`); // hyphen INDEX 
        // ---> Javascript is great - 0 Javascript is great - 1 etc. 
    }

}
logString2b('Javascript is great', 7);



// version 2c 
function logString3(stringToLog3, numberOfTimesToLog3) {
    for (let i = 1; i <= numberOfTimesToLog3; i++) {
        console.log(`3: ${stringToLog3} - ${i}`);
    }
}
logString3('Javascript is great', 4);


// March 2020
function logString4(stringToLog4, numberOfTimesToLog4) {

    let result = "";

    for (let i = 0; i < numberOfTimesToLog4; i++) {
        result += stringToLog4;
    }

    return result;

}

console.log(logString4('Howdy-Ho  ', 5));

const myHowdyStringResult4 = logString4('*howdy* ', 5);
console.log(myHowdyStringResult4);




// March 2020 
console.log(`\n---> sumAllUntil and FACTORIAL <3 \n`)


function sumAllUntil(number) {

    let sum = 0;

    for (let i = 1; i <= number; i++) {
        sum += i;
    }

    return sum;
}

console.log(`sumAllUntil(5):` + (sumAllUntil(5)));



function factorial(number) {

    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    return result;
}

console.log(`factorial(5):` + (factorial(5)));






// Send emails 

console.log(`\n 6. Send emails \n `)
// Imagine we work at a company. Peter from the HR department wants us to send out a couple of emails to some recepients. 
// The only problem is that he sent us the email in a weird format: 
// benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com
// Use the sendEmailTo function to send an email to all the recepients that we got from Peter.
// Hint use the .split method and look up iterating an array js for loop on google.

console.log(` ---> class version`)

function sendEmailTo(recepient) {
    console.log('v1: email sent to ' + recepient);
}
const emails = "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com"
const emailsArray = emails.split('|');
for (let i = 0; i <= emailsArray.length - 1; i++) {
    sendEmailTo(emailsArray[i]);
}



console.log(` ---> my version`)

const emails2 = "user1@gmail.com|user2@gmail.com|user3@gmail.com|user4@gmail.com|user5@gmail.com|user6@gmail.com|user7@gmail.com"; 
console.log(`This is emais2: ${emails2}`);

const emailsArray2 = emails2.split('|'); 
console.log(`This is emailsArray2: ${emailsArray2}`);

function sendEmailTo2(recepient2) {  // recipient2 is just a parameter: when the function is called, sth needs to be there
    console.log('v2: email sent to ' + recepient2);
}

for (let i = 0; i <= emailsArray2.length - 1; i++) {
    sendEmailTo2(emailsArray2[i]);
}

sendEmailTo2(emailsArray2); // <--- calling the function with the split addresses 
// ---> email sent to user1@gmail.com,user2@gmail.com,user3@gmail.com,user4@gmail.com,user5@gmail.com,user6@gmail.com,user7@gmail.com 




// EXTRAS 
console.log(`\n EXTRAS \n `);

// Calling a method on something ---> removes the leading and trailing white space and line terminator characters from a string.
let str1 = "    this is string1     ";
console.log(str1);
str1.trim(); // calling a function (trim) on the string str1
console.log(str1.trim());

let str2 = "  this is string2  ";
console.log(str2);
str2.trim();
const str2Trimmed = str2.trim();
console.log(str2);
console.log(str2Trimmed);

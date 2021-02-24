console.log(' \n \n JS2-3 week 11 /class notes 2019-12-22 \n \n ');



// ---> VID1 

// THE ORDER == the 7/11 queue comparison: (VID1 00:00 - (39:00) - 52:00) -----------

// 1. console.log is always the first thing to execute      // ---> hello I'm up
// 2. getElementbyId will need to communicate with the DOM  // --->
// 3. console.log again                                     // ---> end of the program
// 4. set time out                                          // ---> inside timeout
// 2. ??? whenever you manage to click =  you're too slow   // ---> ---> clicked 0.17

console.log("\n hello I'm up vid-1 \n ");


function clickHandler() {                                  // the function for our future eventListener //using parentheses like this() means calling a function
  console.log("clicked " + Math.random().toFixed(2));      // toFixed() limits the digits in decimals :)
}

const btn1 = document.getElementById("btn01");             // "btn" is the id of the button which has been physically created in html

btn1.addEventListener("click", clickHandler);

setTimeout(() => console.log("inside timeout"), 0);        // *** that was subject to experiments (set to 2000ms or 0ms) 
//                                                            3 main actors here:  code/browser(DOM)/EVENT LOOP  
//                                                            the reason why they're displayed in a particular order --> QUEUE !!!
//                                                            32:00 a for loop was created to show how heavy websites my block everything :>  

console.log("end of the program");

// so: clickhandlers, setTimeouts etc. are always put in the event queue and js will execute them when it's possible
// so: the code does not run at the same time: there are rules and queues ---> it feels parralel but it's NOT 
// so: that's why we call JavaScript an asychronous language ---> ASYNCHRONITY 
// so: JS is like a waitress taking the orders (+/- Lucha 43:00 lolz) and DOM is the kitchen :> 
//     ---> setTimeout(() => console.log("inside timeout"), 1 * 1000); // try to substitute the above with this one 
//          - practically the same but this time you might make it with the click before it is logged hahaha
//     ---> setTimeout(() => console.log("inside timeout"));
//     ---> also DEV MOZILLA says in setTimeout the delay is optional + DON'T USE ZERO in timeout because it doesn't make sense   



// 52:01 another important ting 

function logger(func, param1, param2) {
  console.log("before running");
  const result = func(param1, param2);
  console.log(result);
  console.log("after running");
}

// function doAfter2second(func) {      // go on, test it :)
//   setTimeout(func, 2 * 1000);
// } 

const doPlus = (a, b) => a + b;
logger(doPlus, 4, 6);


// function wklepaćDyskietkę(func, param1, param2) {
//   console.log("before wklepanie");
//   const result = func(param1, param2);
//   console.log(result);
//   console.log("after wklepanie");
// }
// const zrobićWklepanie = (param1, param2) => param1 + param2;
// wklepaćDyskietkę(zrobićWklepanie, "wklepywanie", "dyskietki");

// setTimeout(() => console.log("udław się"), 3000);  





// BREAK //






// ---> VID2 


// DELAY CLICKER      == an exercise from the lesson plan 
// Create a button in html with the text "Log in 3 seconds"
// When the button is clicked it should wait 3 seconds and then log the text "This text was delayed by 3 seconds".


console.log("\n hello I'm up vid-2 \n ");

const btnDC = document.getElementById("btn02");         // this buttonDC (DELAY CLICKER in my html) 
btnDC.addEventListener("click", clickHandler2);

function clickHandler2() {                              // this is clickHandler2
  setTimeout(sayHi, 2000);
}

function sayHi() {                                      // this function will become the argument for the above function
  console.log("hello, I'm here after 2 seconds");
}

// why do functions run even though they're not defined yet? 
// 9:30 --> because there is a creation phase and an execution phase 
// also because of HOISTING: functions get a kind of priority --> functions (and VAR!!! except: variable based function ---> check out 14:00) are moved to the top of the program!!!




// SCOPE                                             ---> 16:40: scope is specific to JS


const x1 = 25;

function doStuff1() {
  const x1 = 30;
  console.log(`below is the variabele x1:`)
  console.log(x1); // apparently the function will prioritize the const in the local scope so ---> 30 , otherwise (if local x got removed) ---> 25
}

doStuff1();




const x2 = 25;

function doStuff() {
  const x2 = 30;
  console.log(x2);    // 30
  inner();
}

function inner() {
  const x2 = 35;
  console.log(x2);    // 35
}

console.log(`doStuff result below:`);
doStuff(); //       ---> 30, 35 == very logical :) 

//         but if we remove the x = 35 the inner will take the x = 25 because that will be its outer scope 
//         and it we then removed the x = 25 it would throw an error because there would be no variable for the inner function 
//         what matters is the source code, not when you call it !!! 
//         26:08 CLOSURE df= inner is closing over the parent scope (re-check it)


// more weird examples: 

function timesTest(n, x) {
  console.log(n * x);
}

console.log(`timesTest result below:`)
timesTest(2, 5);


// // // (...) pretty mind blowing stuff :>

function times(n) {

  function timesN(x) {
    console.log(n * x);
  }

  return timesN;  // so here we are returning a function
}

const func = times(2);
func(5);






// // // this function will keep track of scores and we will calsulate the average

function scores() {

  const scores = [];


  function addScore(x) {
    scores.push(x);
  }


  function average() {

    let result = 0;

    scores.forEach(score => {
      result += score;
    });                                              // sound goes missing at about 38:00 :(

    result = result / scores.length;
    return result;
  }


  const obj = {
    add: addScore,
    calculateAverage: average
  };



  return obj;


}

const myGameScore = scores();
myGameScore.add(4);
myGameScore.add(8);
myGameScore.add(6);

console.log(`myGameScore.calculateAverage() shows below: `);
console.log(myGameScore.calculateAverage());






// the below is the explanation of the previous homework from JS2-2 (week 10) 
// copied to the homework draft :)
// Count the total number of Good, Average and Bad movies using reduce. Optional 

a = [{ rating: 3 }, { rating: 5 }, { rating: 6 }, { rating: 9 }];

const initial = { bad: 0, average: 0, good: 0 };

const result = a.reduce(function (acc, item) {
  if (item.rating < 5) acc.bad = acc.bad + 1;
  else if (item.rating < 7) acc.average = acc.average + 1;
  else acc.good = acc.good + 1;
  return acc;
}, initial);

console.log(result);







// // ALEX ON SLACK - the below is bad 
// if ((arrIndexes.title).length >= 5) {  
//     return true; 
//   }
//   else 
//   {  
//      return false;        
//   }


// // but this is cool 
// return arrIndexes.title.length >= 5;  // Or even without the return , if it's part of an arrow function. 



// // from Priyanka // coordinates js3-3 homework on slack 

// const searchbox = document.querySelector('.search input');
// const shippingCountry = document.querySelector('.country select');
// const sorting = document.querySelector('.sort select');
// const pricingOption = document.getElementById(start);
// function searchProducts() {
//     const searchValue = searchbox.value
//     const sortValue = sorting.value
//     const countryValue = shippingCountry.value
//     const priceValue = pricingOption.value;
//     console.log(searchValue, countryValue, sortValue, priceValue);
// }
// searchbox.addEventListener('input', () => searchProducts());
// shippingCountry.addEventListener('change', () => searchProducts());
// sorting.addEventListener('change', () => searchProducts());
// pricingOption.addEventListener('change', () => searchProducts());  




// Ghofrane on slack 

// function runAfterDelay(delay, callback) {
//   setTimeout(() => {
//     callback();
//   }, delay * 1000);
// }
// runAfterDelay(4, function () {
//   console.log(`Should be logged after 4 second`);
// });


console.log(`Achtung. Wyzdrowiejesz za 3 sekundy. Pacz linijkę niżej tera:`)
setTimeout(() => console.log("wyzdrowiałaś"), 3000);  
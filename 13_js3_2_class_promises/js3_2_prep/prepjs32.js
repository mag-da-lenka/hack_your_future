console.log(`Hello Squirrels. 
Parallel world connection test. 
This is js 3.2 prep vids`)
console.log(typeof 666 === 'number') //true
console.log(typeof Promise) // function



console.log(`\nPromises 1/4 - practical examples using JS (astros 1)`)
/* Promises === a way to work with asynchronous code 
fetch === fetching data from an API; returns a promise 
.then is like a callback 
the async part is getting the data from the server to a computer*/
// example 1:
fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => console.log(`1/4 astros: data.people: `, data.people))
// example 2: scroll to (...)
// example 3: knex/select (...)


console.log(`\nPromises 2/4 - Consuming/using promises in JS (astros 2)`)
// There are 2 parts here: consumtion and creation.
// creating a function
// function logName(name) { console.log(`2/2 logName('Squirrel Mag'): `, name) }
// let's consume the function === use it:  
// logName('Squirrel Mag');

// the return of fetch [not Jedi]: 
const fetchPromise = fetch("http://api.open-notify.org/astros.json");
console.log(`2/4 fetchPromise: `, fetchPromise) // Promise {<pending>}
console.log(`2/4 fetchPromise-type: `, typeof fetchPromise) // object 
// There are two functions/methods we can call on the promise
// 1. .then: it takes a function as argument 
//     It is called when the async part has been done === when the data is fetched
// 2. .catch: it also takes a function as an argument  
//     it is called when there is an error === when the promise is rejected 
fetchPromise
    .then(() => {
        console.log(`2/4 fetchPromise: This is .then: all good`)
    })
    .catch(() => {
        console.log(`2/4 fetchPromise: This is .catch: promise rejected`)
    })
//







console.log(`\nPromises 3/4 - Creating a promise in JS`)
// Promise is a CLASS 
// Promise takes a function [normally called resolve] as an argument 
const myPromise_1 = new Promise((resolve, reject) => {
    // console.log(`3/4 This is typeof resolve: `, typeof resolve) // function
    console.log(`3/4 This is myPromise_1: before timeout`)

    setTimeout(() => {
        resolve(`3/4 myPromise_1: resolve: We waited for 5 seconds`); // try switching it as reject :) 
        // the function is resolved when we call the resolve function 
        // 'We waited for 5 seconds is passed below as (data) !!!!!!!!!!!!!!!!   
    }, 5000) // comment resolve to see the error if you want :>

    setTimeout(() => {
        reject(`3/4 myPromise_1: rejection: ERROOOOOROROROROROOR!`); // try switching it as reject :) 
        // the function is resolved when we call the resolve function 
        // 'We waited for 5 seconds is passed below as (data) !!!!!!!!!!!!!!!!   
    }, 5000)

}); console.log(`3/4 This is myPromise_1: `, myPromise_1) // promise
// comment section 3/4 out if you want to switch to async/await
// also check out Pizza Making in the lesson plan: (moved to the v. bottom) 



// methods that can be called on this promise: .then & .catch
myPromise_1
    .then((data) => {
        console.log(`3/4 This is inside myPromise_1 .then in myPromise_1: DONE`)
        console.log(data) // We waited for 5 seconds !!!!!!!!!!!!!!!
    })
    .catch((data) => {
        console.log(`3/4 This is inside myPromise_1 .catch in myPromise_1: ERROR`)
        console.log(data) // We waited for 5 seconds !!!!!!!!!!!!!!!
    })
//


console.log(`\nPromises 4/4 - async / await 
as an ALTERNATIVE  to 3/4: .then/.catch`)
// it's an easier way to use PROMISES
// async before the fynction and await inside 
async function asyncAwaitExample() {
    try {
        console.log(`4/4 myPromise_1: BEFORE await`)
        const datA = await myPromise_1; // wait till resolved then proceed
        console.log(`4/4 myPromise_1: AFTER await`)
        console.log(datA); // datA === former waitingString
    } catch (error) {
        console.log(`4/4 myPromise_1: catching after trying, meeeeow`)
        console.log(error)
    }
}
asyncAwaitExample(); // DON'T FORGET TO CALL THE FUNCTION 







// pizza (the last part of 3/4)
const orderPizzaPromise = new Promise((resolve, reject) => {

    const pizzaMakingTime = 10000;
    const didPizzaBakingSucceed = true;
    const pizza = 'Macaroni pizza';

    setTimeout(() => {
        if (didPizzaBakingSucceed) {             // if TRUE
            resolve(pizza);                      // Macaroni pizza
        } else {                                 // otherwise: 
            reject('3/4 The pizza was a mess');  // (error)
        }
    }, pizzaMakingTime);
});

orderPizzaPromise
    .then(pizza => {
        console.log(`3/4 orderPizzaPromise: .then: Lets eat the ${pizza}`);
    })
    .catch(error => {
        console.log(`3/4 orderPizzaPromise: .catch: Lets eat the nothing`);
        console.log(error) // The pizza was a mess
    })
//
console.log(`PROMISES week 13 JS3-2`)

// // TIMEOUT RECAP
// setTimeout(function () {
//   console.log('A simple timeout after 1 second')
// }, 1000)


// //  PROMISE TEST
// const callMySisterPromise = new Promise(function (resolve, reject) {
//   const didIHaveTime = true
//   if (didIHaveTime) {
//     resolve(didIHaveTime)
//   }
// })


// // A SIMPLE PROMISE warmup
// const callMySisterPromise = function (shouldICall) {
//   return new Promise(function (resolve) {
//     if (shouldICall) {
//       resolve(true)
//     }
//   })
// }
// callMySisterPromise(true)
//   // if false - nothing will happen bc we haven't implemented the failure scenario :>
//   .then(function (result) {
//     console.log('callMySisterPromise success scenario: ', result)
//   })



setTimeout(function () {
  console.log(`\nEXERCISE ------- 1 (v.2019)\n `)
}, 50)


// 1
// Using promises ---> fetch yes or no from this api: 
// https://yesno.wtf/api. ---> log out the answer

function fetch_YesOrNo() {
  fetch('https://yesno.wtf/api')
    .then(response => response.json())
    .then(data => {
      console.log(`ex1.0: data: `, data)
      console.log(`ex1.0: data.answer: `, data.answer)
    })
}
fetch_YesOrNo();





setTimeout(function () {  // <--- this is how how to win over async :>
  console.log(`\nEXERCISE ------- 2 (v.2019)\n `)
}, 1000)


// 2.1
/* Create a promise that resolves after 4 seconds. 
Use this promise to log out the text 'hello' after 4 seconds */

const my1stPromise = new Promise(function (resolve, reject) {

  setTimeout(() => {

    const successObject1 = { // this could be anything
      result: 'success'
    }

    resolve(successObject1)
  }, 4000)

})

my1stPromise
  .then((result1) => {
    console.log(`ex2.0: my1stPromise: .then: 4 seconds have passed. Hello!`)
    console.log(`ex2.0: my1stPromise: .then: result: `, result1)
  })



// 2.2
/* Create a promise that resolves with a string 
(you decide what the string should say) after 2 seconds. I'll make 5 :>
Use the promise: When the promise is resolved console.log that string
Now make the promise fail by rejecting it 
with an error message instead of resolving it, 
and log the error message to the console */

// this one is going to be flexible ---> 5 seconds

const my2ndPromise = new Promise((resolve, reject) => {

  setTimeout(() => { // comment out to see REJECT in action
    resolve(`ex2.1: my2ndPromise: 
     this is my  success string in "resolve" after 5 seconds`)
  }, 5000)

  setTimeout(() => {
    reject(`ex2.1: my2ndPromise: 
     this is my error string in "reject" after 5 seconds`)
  }, 5000)

})

my2ndPromise

  .then(result_Ok => {
    console.log(result_Ok)
  })

  .catch(error_Ko => {
    console.log(error_Ko)
  })

//


// this one is gonna be a pure fail afetr 6 seconds

const my3rdPromise = new Promise((resolve, reject) => {

  setTimeout(() => {
    reject(
      {
        location: 'my3rdPromise',
        errorCode: 114,
        errorMeaning: 'pure fail',
        errorTimeInSeconds: 6
      }
    )
  }, 6000)

})

my3rdPromise

  .then(result => { // this is obvsly not gonna work
    console.log(result)
  })

  .catch(error_pureFail => {

    console.log(`ex2.2: my2ndPromise: an error_pureFail: 
        error location: ${error_pureFail.location},
        error code:     ${error_pureFail.errorCode},
        error meaning:  ${error_pureFail.errorMeaning}, 
        error time:     ${error_pureFail.errorTimeInSeconds} seconds. 
        stringified object below: `, JSON.stringify(error_pureFail),
      `\n         object below: `, error_pureFail)

  })
//

// btw there can be multiple promises and many catches but LEAVE it now :> 

// 2.3 ---> functions that return promises --> 8 seconds

// the 4th one is gonna be more dynamic, so make it a function 
// give it arguments : successString, delay

const my4thPromise = function (successString, delay) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve(successString)
    }, delay)

  })
}
// now I can CALL it as a function, yaaaay :) 
my4thPromise(`ex2.3: this is my dynamic string in my4thPromise`, 8000)

  .then(resultMessage =>
    console.log(resultMessage))
// the passed string gets logged after 8 seconds






setTimeout(function () {  // <--- this is how how to win over async :>
  console.log(`\nEXERCISE ------- 3 (v.2019)\n `)
}, 10000)

/* Exercise 3
Create a new function that returns a promise. 
This function should have one parameter: successMessage.
The promise should resolve after 1 second. (I'll make it 11 !!!)

When you resolve the promise, 
it should be resolved with the successMessage parameter.
Call the function with an argument, 
assign the return of the function to a variable (what type will that have?). 
Use the variable to log out the successMessage.

Now add the possibility for the promise to also reject. 
Give the function a new parameter: errorMessage.
When the promise is rejected it should be rejected with the errorMessage parameter. 
Now reject the promise after 1 second instead of resolving it.

give the function a third parameter: shouldReject.
If shouldReject is true the promise being returned from the function should reject 
(with the errorMessage parameter) the promise.
Otherwise the promise should resolve (with the successMessage parameter)
*/

const myPromise = (successMessage, errorMessage, shouldAccept = true) => {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (shouldAccept) { resolve(successMessage) }
      else { reject(errorMessage) }

    }, 10000)

  })

}

myPromise('ex3.1: Success!!!', 'ex3.1: Error!!!', false)
  .then(message_success => console.log(message_success))
  .catch(error_fail => console.log(error_fail))

myPromise('ex3.2: Success!!!', 'ex3.2: Error!!!', true)
  .then(message => console.log(message))
  .catch(errMessage => console.log(errMessage))










console.log(`\nEXERCISE ------- 4 (v.2019)\n `)

// exercise 4 
// get battery level 
// after you get it, log out the movies from our API 
// USE CHAINING!!! 

// //this is a warmup 
// navigator.getBattery()
//   .then(data => {
//     console.log(`ex4.1: `, data)
//     console.log(`ex4.1: `, data.level)
//   })

//this is the exercise :> 

fetchMovies = () => {

  const url = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'
  return fetch(url)
    .then(response => response.json()) // raw http response

}

// fetchMovies()



navigator.getBattery()
  .then((status) => {
    const level = status.level
    console.log(`ex4.0: level: `, level)   //1

    // fetchMovies()       // the array of objects === movies  
    // this is inside the --> it will pass the result to the next .then:
    return fetchMovies()

  })


  .then(moviesFetchResult => {
    console.log(`ex4.0: fetch movies result: `, moviesFetchResult)
    // the above is the massive movies array  (6527) [{…} blablabla ] 
  })






console.log(`\nEXERCISE ------- 5 (v.2019)\n `)
// exercise 5

const batteryPromise = navigator.getBattery()
const moviePromise = fetchMovies()

Promise.all([moviePromise, batteryPromise])
  .then((resultArray) => {
    console.log(`ex5.0: resultArray: `, resultArray)
  })
//
console.log(`\nhomework js3-2 ex.2 PROMISE setTimeout by sq.mag\n `)


/* Promise that resolves after set time

2.1 Create a function that has one parameter: resolveAfter. 
Calling this function will return a promise 
that resolves after the resolveAfter seconds has passed.
Here is an example of how to use the promise
    makeUpYourOwnFunctionName(8).then(() => {
      console.log("I am called asynchronously"); // logged out after 8 seconds
    });

2.2 When you have written the promise, use it with async/await  */


//  2.1 
setTimeout(function () { console.log(`\nEXERCISE ------- 2.1 \n `) }, 50)

const makeSetTimeoutPromise1 = (resolveAfter) => {

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log(`2.1: I'm called asynchronously after ${resolveAfter} seconds.`)
            return resolve(`2.1: I'm called asynchronously after ${resolveAfter} seconds.`)
        }, resolveAfter * 1000) // to avoid milliseconds :> 

    })

};

console.log(makeSetTimeoutPromise1(2))

// here's a version bound to fail :>
const makeSetTimeoutPromise2 = (resolveAfter) => {

    return new Promise((resolve, reject) => {

        // setTimeout(() => {
        //     console.log(`2.1: I'm called asynchronously after ${resolveAfter} seconds.`)
        //     return resolve(`2.1: I'm called asynchronously after ${resolveAfter} seconds.`)
        // }, resolveAfter * 1000) 

        setTimeout(() => {
            console.log(`2.1: I'm an error string after ${resolveAfter} seconds.`)
            return reject(`2.1: I'm an error string after ${resolveAfter} seconds.`)
        }, resolveAfter * 1000)

    })

};

console.log(makeSetTimeoutPromise2(3))



// 2.2 promise rewritten as async/await 
//     coment out resolve section to see the error string :>
setTimeout(function () { console.log(`\nEXERCISE ------- 2.2 \n `) }, 4000)

const makeSetTimeoutPromise22 = (resolveAfter) => {

    const myPromise22 = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`2.2: I'm called asynchronously after ${resolveAfter} seconds.`)
        }, resolveAfter * 1000)

        setTimeout(() => {
            reject(`2.2: I'm an error string after ${resolveAfter} seconds.`)
        }, resolveAfter * 1000)

    })

    // // this is the PROMISE WAY ---> try switching with the async/await way
    // return myPromise22
    //     .then((data) => {
    //         console.log(`2.2: I'm a .then. Done.`)
    //         console.log(data)
    //     })
    //     .catch((data) => {
    //         console.log(`2.2: I'm a .cach. Error.`)
    //         console.log(data)
    //     })

    // this is the ASYNC WAY ---> try switching with the promise way
    async function rewriteMyPromise22() {
        try {
            const data22_success = await myPromise22;
            console.log(data22_success);
        }
        catch (data22_error) {
            console.log(data22_error)
        }
    }
    return rewriteMyPromise22();

};

console.log(makeSetTimeoutPromise22(5))
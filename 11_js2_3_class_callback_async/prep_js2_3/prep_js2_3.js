// prep vids for flipped classes (copy-pasted) 

// df of function (params)
// invoking a function (arguments) 
// a callback === a function that is a param for a function 

console.log('\ncallbacks:')



function successMessage1() {
    console.log('successfully completed homework 1')
}

function completedHomework1(subject1, callback1) {
    alert(`You have finished ${subject1} homework`)
    callback1() // yes yes yes to "()"
}

completedHomework1('math', successMessage1); // no no no to "()"

// Why do we need callbacks? 
// -to execute some code after sth happens 

// "normal" VERSION:
// const buttonELement = document.getElementById('clicker1');
// buttonELement.addEventListener('click', successMessage)

// anonymous VERSION:
const buttonELement1 = document.getElementById('clicker1');
buttonELement1.addEventListener('click', (event) => {
    console.log(event)
    console.log('successfully completed homework nr 1')
})

/* named vs. ---> anonymous  --->
const successMessage = () => 
is anonymous b/c the successMessage is the name of the CONST */


// // // / /// / / / / / / / / / // / / / / / / / / / // / / / //// /


const successMessage2 = (squaredNumber) => {
    console.log('successfully completed homework 2',
        squaredNumber)
}

function completedHomework2(subject2, callback2) {
    alert(`You have finished ${subject2} homework`)
    const squareNumber = (number) => number * number
    const squaredNumber = squareNumber(54)
    callback2(squaredNumber) // yes yes yes to ()
}

completedHomework2('more math', successMessage2);


const buttonELement2 = document.getElementById('clicker2');
buttonELement2.addEventListener('click', (event) => {
    console.log(event)
    console.log('successfully completed homework nr 2')
})

// a function reference === passing the function as a callback 
// vs. 
// invoking the function === calling === running === () !!!



console.log('\nasynchronous code:')

// set timeout   
setTimeout(() => {
    console.log('I\'m a timeout after 1,5 seconds. I\'m done.')
}, 1500)
// set interval 
setInterval(() => {
    console.log('I\'m an interval every 2 seconds and I will stay here.')
}, 2000)

// mix :)
let count = 0;
const interval = setInterval(() => {
    console.log(count, ' I\'m a _count_ every 1,666 seconds. My life is 5 seconds long.')
    count++
}, 1_666)
setTimeout(() => {
    clearInterval(interval)
    console.log("Interval (count 1,666) died after 5 seconds. RIP [*] ")
}, 5000)
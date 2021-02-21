console.log('Hello from the js2_2_prep script')


/* ARROW FUNCTIONS:
1) the keyword is assumed,
2) af have implicit return == if we return the value directly
   we can skip the curly braces and the return word: 
   const randomNumberArrow = () => Math.random()
3) if there's only ONE param, we can skip the curly braces 
4) if there are >= params, you have to keep the curly braces 
5) arrow functions are inherenty anonymous   */

function randomNumber() {
    return Math.random()
}

const randomNumberArrow1 = () => {
    return Math.random()
}

const randomNumberArrow2 = () => Math.random() // no {} and no return word

// if (one param) ---> 2 syntax options
const randomNumberArrow_multiply1 = (number) => Math.random() * number
const randomNumberArrow_multiply2 = number => Math.random() * number

console.log("\narrow (+ anonymous) functions:")
console.log(randomNumber());
console.log(randomNumberArrow1())
console.log(randomNumberArrow2())
console.log(randomNumberArrow_multiply1(10))
console.log(randomNumberArrow_multiply2(10))

// from normal ... 
const buttonElement1 = document.getElementById("btn1");
buttonElement1.addEventListener('click', function onClick() {
    console.log("I got clicked. Yours, ButtonElement 1")
})
// ... through anonymous ...
const buttonElement2 = document.getElementById("btn2");
buttonElement2.addEventListener('click', function () {
    console.log("I got clicked. Yours, ButtonElement 2")
})
// ... to anonymous :: arrow
const buttonElement3 = document.getElementById("btn3");
buttonElement3.addEventListener('click', () => console.log("I got clicked. Yours, ButtonElement 3"))




/* ADVANCED ARRAY METHODS:
all of them take functions as agruments (=== callbacks)

1) .forEach  
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
   syntax: 
   arr.forEach(callback(currentValue[, index[, array]]) {
    // execute something
   }[, thisArg]); 
   parameters: currentValue, index (optional), array (optional), thisArg (optional)
   return value: undefined === it DOESN'T RETURN anything!!!

2) .map 
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   syntax: 
   let newArray = arr.map(callback(currentValue[, index[, array]]) {
    // return element for newArray, after executing something
   }[, thisArg]); 
   parameters: currentValue, index (optional), array (optional), thisArg (optional)
   return value: a new array with each element being the result of the callback function

3) .filter ---> it's a boolean
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   -> creates a new array with all elements 
   that pass the test implemented by the provided function 
   syntax: 
   let newArray = arr.filter(callback(currentValue[, index[, array]]) {
  // return element for newArray, if true
   }[, thisArg]); 
   parameters: currentValue, index (optional), array (optional), thisArg (optional)
   return value: A new array with the elements that pass the test. 
                 If no elements pass the test, an empty array will be returned.      */

const mentors = [
    {
        "name": "Adam Smith",
        "subjects": ['JS', 'HTML', 'CSS', 'NODEJS'],
        yearOfExperience: 4
    },
    {
        "name": "Soren Kierkegaard",
        "subjects": ['JS', 'Database', 'CSS'],
        yearOfExperience: 1
    },
    {
        "name": "Albert Camus",
        "subjects": ['DB', 'HTML', 'NODEJS'],
        yearOfExperience: 8
    },
    {
        "name": "Sisyphus the Existentialist",
        "subjects": ['REACT', 'HTML', 'CSS'],
        yearOfExperience: 3
    },
    {
        "name": "Jean-Paul Sartre",
        "subjects": ['JS', 'HTML', 'NODEJS'],
        yearOfExperience: 2
    },
    {
        "name": "Friedrich Nietzsche",
        "subjects": ['Database', 'HTML', 'CSS'],
        yearOfExperience: 9
    }
];
console.log("\nadvanced ARRAY methods");
console.log("mentors", mentors);



// forLoop ---> .forEach
for (let i = 0; i < mentors.length; i++) {
    console.log("each mentor from |forLoop: ", mentors[i])
}
// mentors.forEach((currentValue) => console.log(currentValue)) 
// be more descriptive than currentValue so --->
mentors.forEach((aMentor) => console.log("each mentor from .forEach: ", aMentor))
// now display the names in the browser: 
const bodyElement = document.querySelector('body')
mentors.forEach((aMentor) => {
    const h1Element = document.createElement('h1');
    h1Element.innerHTML = "h1Element: " + aMentor.name;
    bodyElement.appendChild(h1Element);
})

// .map 
const mentorNameListElement = mentors.map((aMentor) => aMentor.name)
console.log("mentorNameListElement from .map: ", mentorNameListElement)

// .filter 
const experiencedMentorsElement = mentors.filter((aMentor) => aMentor.yearOfExperience > 2)
console.log("experiencedMentorsElement from .filter: ", experiencedMentorsElement);


// chaining array methods 
mentors
    .filter((aMentor) => aMentor.yearOfExperience > 3)
    // .map((aMentor) => aMentor.name + " has " + aMentor.yearOfExperience + " years of experience.")
    .map((aMentorSentence) => `h3Element: ${aMentorSentence.name} 
          has ${aMentorSentence.yearOfExperience} years of experience.`)
    .forEach((aMentorSentenceForDOM) => {
        const h3Element = document.createElement('h3')
        h3Element.innerHTML = aMentorSentenceForDOM
        bodyElement.appendChild(h3Element)
    })
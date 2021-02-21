let helloArray = ['JS2-1 week class /week_9', 1 === 1];
console.log(helloArray);


console.log("\n\nmy notes from class 12 /2nd Dec 2019 \n ")

// Favorite dishes
// Create an array of strings with your favorite dishes. 
// With js select a ul in the DOM. You add the ul to the html file.
let favDishes = ["pizza", "falafel", "pierogi", "fried squirrels"];
console.log(`favDishes:`);
console.log(favDishes);
let favDishesElement = document.querySelector('ul');
console.log(`favDishesElement:`);
console.log(favDishesElement);
// Now loop through each element of the favorite dishes array, 
// you create an li element and set the text to the favorite dish. 
// Then append the li element to the ul element.
for (let i = 0; i < favDishes.length; i++) {
    let dishList = document.createElement('li');
    console.log(`dishList:`);
    console.log(dishList);
    dishList.innerText = favDishes[i];
    favDishesElement.appendChild(dishList);
}


console.log("\n\nvideos from class 11 /30th Sept 2019 \n ")

console.log('\npart 1.1: (displaying items ul-li)')
const myUl = document.querySelector('ul')
const items = ['item 1', 'item 2', 'item 2248347'];
for (let i = 0; i < items.length; i++) {
    const newLi = document.createElement('li');
    newLi.textContent = items[i]
    myUl.appendChild(newLi)
    // console.log(myUl)
    // console.log(newLi)
    console.log(myUl, newLi)
}

console.log('\npart 1.2: (appending li timeout to the items above)')
const newLiTimeout = document.createElement('li');
myUl.appendChild(newLiTimeout)
setTimeout(() => {
    newLiTimeout.textContent = "HeyHeyHey5secons"
}, 5000);
console.log(setTimeout, newLiTimeout, myUl);


console.log('\npart 2.1: (how to add an image with a class)')
const image = document.createElement('img')
image.classList.add('small-img') //so this is how to create a class 
//also check out toggling classes (sth like adding-removing whenever you call a class)
image.src = 'https://www.clearboxseo.com/wp-content/uploads/2019/05/javascriptwpseo.png'
document.body.appendChild(image)
console.log(image);


console.log('\npart 2.2: (the podcast exercise (from the lesson plan)')
const podcasts = [
    {
        name: 'The mystery om of Johan Klausen Varbourg',
        imageUrl: 'https://picsum.photos/536/354'
    },
    {
        name: 'Tips about dogs with small legs',
        imageUrl: 'https://picsum.photos/536/354'
    },
    {
        name: 'You, me, we and us',
        imageUrl: 'https://picsum.photos/536/354'
    },
    {
        name: 'Breakfast news - Dinner edition'
    }
];
// DON'T: console.log(`Podcasts array: ${podcasts}`) // object object lol
console.log(podcasts);
console.log(podcasts[0].name);
// ---> Create a ul
const ulPodcast = document.createElement('ul');
document.body.appendChild(ulPodcast)
console.log(ulPodcast)
// ---> Loop through the podcasts 
for (let i = 0; i < podcasts.length; i++) {
    //    ---> For every podast: 
    //    Create an li element 
    const liPodcast = document.createElement('li');
    //    Create an h1 element 
    const h6Podcast = document.createElement('h6');
    //    Change the innerHTML of the h6 to equal the name of the current podcast
    h6Podcast.textContent = podcasts[i].name
    //    Append the h1 to the li
    liPodcast.appendChild(h6Podcast)
    ulPodcast.appendChild(liPodcast)
    //    Now add an image to the li with the src set to the imageUrl.  
    const imagePodcastUrl = podcasts[i].imageUrl;
    //    But only if the imageUrl key exists on the object!
    if (imagePodcastUrl) {
        const imgPodcast = document.createElement('img');
        imgPodcast.src = podcasts[i].imageUrl
        liPodcast.appendChild(imgPodcast)
    }
}
/* // the virgin version that is a fail because the 4th podcast doesn't have a url source!
for (let i = 0; i < podcasts.length; i++) {
    const liPodcast = document.createElement('li');
    const h1Podcast = document.createElement('h1');
    const imgPodcast = document.createElement('img');
    h1Podcast.textContent = podcasts[i].name
    // Now add an image to the li with the src set to the imageUrl.
    imgPodcast.src = podcasts[i].imageUrl 
    liPodcast.appendChild(imgPodcast) 
    liPodcast.appendChild(h1Podcast) 
    ulPodcast.appendChild(liPodcast) 
} */




console.log('\npart 2.3: EVENT LISTENER explained: try mouse and keys -> pure console :)');

// ---> YOU CAN ATTACH EVENT LISTENER to the document or a button etc. 
// 1st we create a simple button in html. It says click me  
// deactivated becuse of the button -reversed name example below - to avoid conflict 
// const btn = document.querySelector('button')
// btn.addEventListener('click', function () {
// console.log(`I've been clicked.`)
// }) 

// de/activate the below to un/spam the console 
document.addEventListener('mousemove', function () {
    console.log(`The mouse is moving FAAAST.`)
})
document.addEventListener('mouseenter', function () {
    console.log(`The mouse has entered the document.`)
})
document.addEventListener('mouseleave', function () {
    console.log(`The mouse has left the document.`)
})
// mousemove again but more complex: eg. where the event is happening etc. 
document.addEventListener('mousemove', function (event) {
    console.log('The mouse is moving.', event.clientX, event.clientY)
})
document.addEventListener('keypress', function (event) {
    console.log('This is the keypres.', event)
})
document.addEventListener('keyup', function (event) {
    console.log('This is the keyup.', event)
})
// my test
document.addEventListener('keyup', function (event) {
    console.log('This is the specific key pressed.', event)
    const pressedKeyElement = document.getElementById('pressed-key')
    pressedKeyElement.textContent = event.key
})
// my test
document.addEventListener('keypress', function (event) {
    if (event.code === 'Enter')
        console.log('This is the keypres/ENTER.', event)
})




console.log('\npart 2.4: EVENT LISTENER ---> fast clicking');
// create a paragraph in the html
const paragraphTest = document.getElementById('paragraph-Test-P')
// game-like style
document.addEventListener('keyup', function (event) {
    // super simple (deactivated)
    // const oldText = paragraphTest.textContent;
    // paragraphTest.textContent = oldText + event.key;
    const oldText = parseInt(paragraphTest.textContent || 0)
    paragraphTest.textContent = oldText + 1
    // console.log('GAME ---> keyup OLD TEXT + 1', event)
})



console.log('\npart 2.5: EVENT LISTENER: button / input / reverse.');
// create elements
const h5Element = document.querySelector('h5')
const input = document.getElementById('word-input')
const btn = document.querySelector('button')
// add event listener to the button 
btn.addEventListener('click', function () {
    const inputText = input.value.split('').reverse().join('')
    h5Element.textContent = inputText;
})
let inputText2 = '';
// https://www.techiedelight.com/trigger-button-click-on-enter-key-javascript/
document.addEventListener('keypress', function (event) {
    if (event.code === 'Enter') {
        inputText2 = input.value.split('').reverse().join('');
    }
    h5Element.textContent = inputText2;
    console.log(typeof inputText2)
})
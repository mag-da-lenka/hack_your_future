
console.log("window          --->", window);
console.log("document        --->", document);
console.log("window.document --->", window.document);


// 3. select a tag (eg. the body) where you want to display the element 
const bodyElement = document.querySelector('body');

// 1. create a new element and add some text inside 
const h1Element = document.createElement('h1');
h1Element.innerHTML = "JS generated h1";
// 2. create another element and add some text inside 
const pElement = document.createElement('p');
pElement.innerHTML = "\n\nNotes /Br...n's vids /super old, basic and nice / copy_pasted from my old mess \n ";

// 4. add the elements to the document at the end of the selected tag (here it's body)
document.querySelector('h1Element') // the h1
bodyElement.appendChild(h1Element)
document.querySelector('pElement')  // the div 
bodyElement.appendChild(pElement)

// 5. add some style 
h1Element.style.background = "yellow";


// EVENT LISTENERS check mozilla MDN <3

// getting the existing button from the html:
const buttonElement = document.querySelector('#red-btn');
buttonElement.innerHTML = "New button inner html";
function onClick(event) {
    console.log(event, "the button was clicked")
    console.log()
    bodyElement.style.background = 'red'
}
buttonElement.addEventListener('click', onClick)

// adding event listener to the document
function onKeyDown() {
    console.log('key went down')
}
document.addEventListener('keydown', onKeyDown)

console.log('Meeeeeeow! JS2-2 week 10 ---> HYF BAY 2 ');



// HYF BAY 2 ---> JS2-2 week 10  

console.log('\n 02. HYF BAY \nScript loaded');
// https://github.com/HackYourFuture-CPH/JavaScript/blob/class16/javascript2/week1/homework.md#hyfbay---get-the-okayest-products-here



// this is the products array:
const products = getAvailableProducts();
console.log("products: ", products);

// -1.0) RENDERING PRODUCTS (this is the last week's task copy-pasted)

// -1.a) creating an empty Ul element
const productsUl = document.querySelector('section.products ul');
console.log("productsUl: ", productsUl);
// -1.b) creatiing an empty string
let shipsToHTML = '';
console.log("shipsToHTML: ", shipsToHTML);
// -1c.) rendering:
function renderProducts(productsArr) {
    // For each product in the products array:
    productsArr.forEach(product => {
        // create an li
        const li = document.createElement('li');

        product.shipsTo.forEach(country => shipsToHTML += `<li>c: ${country}</li>`);
        // Set the innerHTML of that li to the contain the title, price and rating
        li.innerHTML = `
            <ul>
                <li>name: ${product.name}</li>
                <li>price: ${product.price}</li>
                <li>rating: ${product.rating}</li>
                <ul class="ships-to"> ships to: ${shipsToHTML}</ul>
            </ul>
        `;
        // Append the li to the ul
        productsUl.appendChild(li);
    });
}
renderProducts(products);


// 1.0) FILTERING PRODUCTS: 

// 1.a) searching for products:   WHY DOESN'tIT WORK ???
// get the typedInput element from the html
const typedInput = document.querySelector('section>.search input');
console.log("typedInput: ", typedInput); // works
// attach an event listener to the typedInput's VALUE
// src: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
typedInput.addEventListener('input', () => {  // ***1 see the below notes
    let searchValue = typedInput.value; console.log(searchValue);
    let filteredProducts = products.filter((aProduct) => aProduct.name.toLowerCase().includes(searchValue.toLowerCase()))
    renderProducts(filteredProducts);
});





// 1.b) filter products based on max price:
// When the user writes a maximum price,
// the products should be filtered to match that maximum price
// to be continy=ued -yaaaawn 






// 2.0) CREATE AN EXTRA FEATURE ---> I choose dark mode:

// getting the bodyElement
const bodyElement = document.body;
console.log(bodyElement)
// getting the existing button from the html:
const buttonElement = document.querySelector('#dark-mode-button');
buttonElement.innerHTML = "CLICK to JOIN THE DARK SIIIIIIIDE";
// function == what to do when clicked
function joinTheDarkSide(event) {
    console.log(event, "you've joined the dark side")
    bodyElement.style.background = 'black'
}
// attachnig event listener to the button 
buttonElement.addEventListener('click', joinTheDarkSide)



// 3.0) Make everything look nice ---> add decent CSS
// to be continued


// 4.0) SORT THE PRODUCTS (optional)
// to be continued







// NOTES: *************************************************************************************** 

// // ***1 same thing with a normal fuction (nevermind)
// function renderFilteredProducts() {
//     let searchValue = typedInput.value; console.log(searchValue)
//     let filteredProducts = products
//         .filter((aProduct) => aProduct.name.toLowerCase().includes(searchValue.toLowerCase()))
//     renderProducts(filteredProducts);
// };
// typedInput.addEventListener('input', renderFilteredProducts)







// to be deleted soon :) 


//  ORIGINAL VERSION OF WEEK 09 (HYF bay 1)

// // TEST EXERCISE: render TEST product names -- Ts added at the end of functions/variables etc to avoid conflict later on
// console.log('\n 01. TEST PRODUCTS \n ');

// // Create an array called testProductNames that contains test product names. Lets start of with taking this array of test product names and render them!
// let testProductNamesT = ["gold sneakers", "rubber duck", "led lights", "fried squirrels"];   // console.log(testProductNames);   // (4) ["gold sneakers", "rubber duck", "led lights", "fried squirrels"] --- only in the console

// // Select the ul that is a child to the section called products in javascript
// let testProductNamesElementT = document.querySelector('ul'); //console.log(testProductNamesElement);  // <ul></ul>

// function renderProductsT(testProductNamesT) {

//     for (let i = 0; i < testProductNamesT.length; i++) {     // For each productName in the array called testProductNames do the following: 1 -> 2 -> 3                              
//         // 1. create an li 
//         let productNameT = document.createElement('li');
//         // 2. Set the innerHTML of that li to the productName
//         productNameT.innerText = testProductNamesT[i];
//         // 3. Append the li to the ul --> so --> a child (=li =productName) [i]=[0][1][2][3] gets appended to the parent (=ul =testProductNamesElement) 
//         testProductNamesElementT.appendChild(productNameT);
//     }

// }

// renderProductsT(testProductNamesT); //yaaay, works :)
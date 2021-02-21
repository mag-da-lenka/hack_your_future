console.log('Meeeeeeow! JS2-1 week 9 \n---> HYF BAY 1 main.js ');



// TEST EXERCISE: render TEST product names -- 
// Ts added at the end of functions/variables etc to avoid conflict later on
console.log('\n 01. TEST PRODUCTS \n ');

// Create an array called testProductNames that contains test product names. 
// Lets start of with taking this array of test product names and render them!
let testProductNamesT = ["gold sneakers", "rubber duck", "led lights", "fried squirrels"];

// Select the ul that is a child to the section called products in javascript
let testProductNamesElementT = document.querySelector('ul');

function renderProductsT(testProductNamesT) {
    // For each productName in the array called testProductNames do the following: 1 -> 2 -> 3  
    for (let i = 0; i < testProductNamesT.length; i++) {
        // 1. create an li 
        let productNameT = document.createElement('li');
        // 2. Set the innerHTML of that li to the productName
        productNameT.innerText = testProductNamesT[i];
        // 3. Append the li to the ul --> so --> a child (=li =productName) [i]=[0][1][2][3] gets appended to the parent (=ul =testProductNamesElement) 
        testProductNamesElementT.appendChild(productNameT);
    }
}
renderProductsT(testProductNamesT); //yaaay, works :)






// HYF BAY 1 ---> JS2-1 week 9  

console.log('\n 02. HYF BAY \nScript loaded');
// https://github.com/HackYourFuture-CPH/JavaScript/blob/class16/javascript2/week1/homework.md#hyfbay---get-the-okayest-products-here

const products = getAvailableProducts();
console.log("products: ", products);

const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

let shipsToHTML = '';
console.log(shipsToHTML);

function renderProducts(productsArr) {

    // For each product in the products array:
    productsArr.forEach(product => {

        // create an li
        const li = document.createElement('li');

        product.shipsTo.forEach(country => shipsToHTML += `<li>country: ${country}</li>`);

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



// // additional option from class 
// console.log("hello I'm up");

// const products = [
//     {
//         id: 23771823,
//         name: "Flat screen",
//         price: 4000,
//         rating: 4.2,
//         shipsTo: ["denmark", "germany"]
//     },
//     {
//         id: 237714,
//         name: "smart tv",
//         price: 4500,
//         rating: 3,
//         shipsTo: ["denmark", "algeria"]
//     }
// ];

// const myList = document.getElementById("list");

// function prepareProduct(product) {
//     const li = document.createElement("li");
//     const propertiesList = document.createElement("ul");
//     const idLi = document.createElement("li");
//     idLi.textContent = product.id;
//     propertiesList.appendChild(idLi);
//     const nameLi = document.createElement("li");
//     nameLi.textContent = product.name;
//     propertiesList.appendChild(nameLi);
//     /*   const countriesList = document.createElement("ul");
//     const countryItem = document.createElement("li");
//     for (let i = 0; i < product.shipsTo.length; i++) {
//       const country = product.shipsTo[i];
//     }
//    */
//     li.appendChild(propertiesList);
//     myList.appendChild(li);
// }

// for (let i = 0; i < products.length; ++i) {
//     const product = products[i];
//     prepareProduct(product);
// } 
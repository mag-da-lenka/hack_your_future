console.log(`This is JS1-1 week 05 - CLASS EXERCISES by Magda /class 12
https://github.com/HackYourFuture-CPH/JavaScript/tree/master/javascript1/week1`);


console.log(`\n CODE INSPIRATION (excerpts) \n `);

// Variable types 
var x; x = 22; console.log(x); // ---> 22
x = 33; var x = 22; console.log(x); // ---> 22
let letTest = 4; console.log(letTest); // --->  4
letTest = 20; console.log(letTest); // ---> 20
const booleanConst = false; console.log(booleanConst); // ---> false
console.log(typeof booleanConst); // ---> boolean
const arrayConst = []; console.log(arrayConst); // ---> [] 
console.log(typeof arrayConst);// ---> object  
// Equality
console.log(1 != 2); // ---> true
console.log(1 == 2); // ---> false
console.log('1' !== 1); // --> true 
console.log(1 === 1 && 3 === 4); // ---> false
console.log((1 !== 1 || 3 === 4) && true); // ---> false
// Arithmetic operators, esp. REMAINDER
console.log(21 % 5); // ---> 1
console.log(20 % 5); // ---> 0
console.log(19 % 5); // ---> 4
console.log(5 % 5);  // ---> 0
console.log(3 % 5);  // ---> 3

console.log("hello " + 23);   // ---> hello 23
console.log(typeof ("hello " + 23));

console.log("hello " + "23"); // ---> hello 23 
console.log(typeof ("hello " + "23"));






console.log(`\n EXERCISES \n `);


// Types 
console.log(`\n types \n `);
console.log(typeof 3); // ---> number
console.log(typeof -33); // --->  number 
console.log(typeof '3'); // ---> string
const threeConst = 3; console.log(threeConst); // ---> 3
let threeLet = 3; console.log(threeLet); // ---> 3
console.log(typeof 'console.log("console.log(console.log(""))")'); // ---> string 
console.log(typeof typeof 45); // ---> string
const names = ['benjamin', 'Christopher']; console.log(typeof names[0]); // ---> string 
console.log(typeof [3][0]); // ---> NUMBER    !!!!!!!!! 
console.log(typeof true); // ----> boolean


// Follow up exercises
console.log(`\n FOLLOW UP EXERCISES \n `);
// 1. create a variable that is 24 times 55
const number = 24 * 55;
// 2. create a const and set it to be equal to your name
const name = "Magdalena";
// 3. with javascript console.log the first character in your name
console.log(name[0]); //this is correct because we start counting wih ZERO so the displayed result is ---> M
console.log(`The first letter in the string Magdalena is ----> ${name[0]}`);
// 4. create an array with 3 strings, 3 numbers and 3 booleans 
const array = ['a', 'b', 'c', 1, 2, 3, 1 === 1, false, 1 > 3];
// 5. console.log the 4th element in the array made above
console.log(array[3]);   //this is correct because we start counting wih ZERO so the displayed result is ---> 1 
// 6. (optional) with javascript console.log the last characer in your name 
console.log(name[8]); // Magdalena 012345678 and the displayed result must be ---> a
console.log(name[name.length - 1]); //another method, same result ---> a 
console.log(`name[name.length - 3]: `)
console.log(name[name.length - 3]); //another method, same result ---> e 




console.log(`\n Fix the errors \n `);
//const name = 'benjamin';
//name = 'benjamin-better'; // ERROR!!!
let name2 = 'benjamin';  //fixed by using let instead of const!!!
name2 = 'benjamin-better';
//const pizzaPrice = 78;
//const pizzaPriceDiscounted = pizzaprice - 10;
const pizzaPrice1 = 78;
const pizzaPriceDiscounted1 = pizzaPrice1 - 10; //fixed: watch capital letters!!!
//const users = ['peter', 'Johnny', 'Børge'];
//const lastUser = users[3];
const users = ['peter', 'Johnny', 'Børge'];
const lastUser = users[2]; //fixed, remember to start counting from ZERO !!!
console.log(lastUser); // ---> Børge
console.log(users[2]); // ---> Børge





console.log(`\n Pizza Project AND THE POWER OF BACKTICKS!!! \n `);

//Part 1 /worked ok 
console.log(`Part 1 ---> class version`)
// 1. Create a special new folder called "pizza-exercise"  DONE
// 2. Inside the folder create a new html file called "index.html" DONE 
// 3. Also inside the folder create a new JavaScript file called "pizza.js" DONE
// 4. Remember to Include the pizza.js script in the html file DONE
// 5. Write a log statement, so you know that your javascript code is running: console.log("I love pizza"); 
console.log("I love pizza") //IT WORKS 
// 6. Create a variable to store the name of your favourite pizza
const favouritePizza = "pepperoni";
// 7. Create a variable to store the price of the pizza
const pizzaPrice = 100;
// 8. Now log at statement to the console that will show the pizza man the entire pizza order in a language he understands, 
//    eg. like this: New pizza order: <name of pizza>. The price of the pizza is: <price of pizza>
//ME: google CONCANTENATION or CONCANTENATE - cool, works :>
console.log(`New pizza order: ${favouritePizza}. The price of the pizza is ${pizzaPrice}. <--- backticks and $`);
console.log("New pizza order: " + favouritePizza + "." + " The price of the pizza is " + pizzaPrice + ". <--- old school");

//Part 2
console.log(`Part 2 ---> class version`)
//Now we will modify the program so that you can order multiple pizzas and also decide if the pizzas should be family size
// 1. Create a new variable to store the amount of pizzas you would like to order. 
const amountOfPizzas = 3;
// 2. Create a new variable to store whether or not you would to order a family size pizza.
const isFamilySize = true;
// 3. Now write a formula to calculate the total price of your pizza order, 
//    and save it in a variable called totalPrice (if the pizza is family size the prize of the pizza is doubled.
const price = pizzaPrice * amountOfPizzas;
let totalPrice;
// 4. Modify the log statement for the pizza man so it includes wether or not the pizza is family size, 
//    and now show the total price of the order New pizza order: <amount of pizzas> <family or not?> <name of pizza>. Total cost for the order is: <total price>
if (isFamilySize) {
  totalPrice = price * 2;
} else {
  totalPrice = price;
}
// 5. Try to change the price of the pizza and if the pizza should be family size, and then check if the total price is calculated correctly.
console.log(`New pizza order: ${amountOfPizzas} ${isFamilySize ? "family" : "not family"}. Total cost for the order is: ${totalPrice}`);

console.log(`Part 2 ---> vs. Magda's version for normal size`)
const numberOfPizzas = 3;
let normalSize = true;  // try switching to false and compare the final log :)

const priceX = pizzaPrice * numberOfPizzas; // the X is here to avoid conflict with a previously declared const :)
let finalPrice;
if (normalSize) {
  finalPrice = priceX;
} else {
  finalPrice = priceX * 2;
}
console.log(`New pizza order: ${numberOfPizzas} ${normalSize ? "normal" : "family"}. Total cost for the order is: ${finalPrice}`);

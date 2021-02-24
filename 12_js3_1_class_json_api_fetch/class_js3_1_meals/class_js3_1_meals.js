
// this is JS3-1 week 12 //2019 12 22 

console.log(`\n \n Meal ordering website \n `)

/* Imagine your are running a meal ordering website. 
Orders come in from the web and we need to store them in a json file. 
Create a json file with two orders that contain at least these things: 
Order name / Order id / Price / List of drinks / Order extras (fx cheese etc.)  
Think about what what type the data should be saved as! */


// Below is a valid JSON  (NO BACKTICKS!!!)   
/*
[
  {
    "order name": "squirrel hummus",
    "id": "329875634897",
    "price": 338,
    "drinks": [
      "coffee",
      "vodka",
      "water"
    ],
    "extras": [
      "null"
    ]
  },
  {
    "order name": "squirrel nuts with nutella",
    "id": "329875634899",
    "price": 338,
    "drinks": [
      "juice",
      "vodka",
      "water"
    ],
    "extras": [
      "banana",
      "apple"
    ]
  }
] 
*/


// Below is const myJsonString  
const myJsonString =
  `[

  {
    "order name": "squirrel hummus",
    "id": "329875634897",
    "price": 338,
    "drinks": [
      "coffee",
      "vodka",
      "water"
    ],
    "extras": [
      "null"
    ]
  },

  {
    "order name": "squirrel nuts with nutella",
    "id": "329875634899",
    "price": 338,
    "drinks": [
      "juice",
      "vodka",
      "water"
    ],
    "extras": [
      "banana",
      "apple"
    ]
  }

]`

console.log(`2a. This is const myJsonString`, myJsonString); 
console.log(`2b. after stringifying`, JSON.stringify(myJsonString));

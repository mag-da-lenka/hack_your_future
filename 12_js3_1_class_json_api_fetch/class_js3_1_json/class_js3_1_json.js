
// this is JS3-1 week 12 //2019 12 22 

console.log(`\n \n JSON \n `)
// ---> https://jsonlint.com/ JSON VALIDATOR


/*Imagine you visit Mads on facebook. 
Server creates JSON and sends it to browser, 
creates object out of it and it can be displayed. 
JSON is always STRINGS even though it looks as a JS object 
in JSON ---> keys always have doble quotes
     JSON --->     parse() ---> JS-object 
JS-object ---> stringify() ---> JSON*/

// this is a JSON (in a JS file): to be parsed 
const jsonTest = `
{
  "name": "Mads",
  "age": 37
}
`
console.log(`1a. This is JSONstr called jsonTest to be parsed`, jsonTest);
var jsonToJsObject = JSON.parse(jsonTest) // jsonTest is getting parsed to JS object
console.log(`1b. This is after parsing into JS object`, jsonToJsObject);
console.log(`1c. This is JS object.key `, jsonToJsObject.name);



// this is JSONasJS: to be stringified 
var jsObjectTest = {
  name: 'Mads',
  age: 37,
  address: null,
  isMale: true,
  interests: ['teaching', 'coding'],
  toughtLessons: {
    js1: true,
    js2: false,
    js3: true,
    something: () => { },
  },
}

console.log(`2a. This is a JSON as JS object to be stringified into JSON`, jsObjectTest);
var jsToJsonObject = JSON.stringify(jsObjectTest) // stringifying 
console.log(`2b. This is after stringifying into JSON. It cannot have a .key 
because JSON is a string!!! `, jsToJsonObject);


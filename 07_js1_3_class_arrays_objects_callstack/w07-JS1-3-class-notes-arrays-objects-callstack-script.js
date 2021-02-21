console.log(`This is JS1-3 week 07 - CLASS EXERCISES 
https://github.com/HackYourFuture-CPH/JavaScript/tree/master/javascript1/week3 \n `);

console.log(`  
The official plan has the following exercises 
1. Callstack (on paper) 
2. Codewars (only the beginning is done) \n 
Class vid - transcript: \n  `);




console.log(`\n  ----> objects: structure  \n `);



const user1 = {
    name: 'Anabella',                        // comma
    lastname: 'Martinez',                    // comma
    age: 29,                                 // comma
    gender: 'female',                        // comma
    nationality: 'mexican',                  // comma 
    favoriteColors: ['pink', 'blue', 'red', 'green']     // NO COMMA !
};
const user2 = {
    name: 'Sofia',                            // comma
    lastname: 'Lopez',                        // comma
    age: 23,                                  // comma
    gender: 'female',                         // comma
    nationality: 'mexican'                                // NO COMMA !
};
console.log(`Logging each object:`, user1, user2);
console.log(`Logging string made of object values (city: "Monterrey"): 
${user1.name} ${user1.lastname} is ${user1.age} years old. \n`);

console.log(`How to add multiple keys and values (forLoop):`)
const arrayU1U2 = [user1, user2];
for (let i = 0; i < arrayU1U2.length; i++) {
    arrayU1U2[i].city = 'Monterrey';   // city: 'Monterrey' is now ADDED to each object
}
console.log(`arrayU1U2:`, arrayU1U2);



const article1 = {
    name: 'News1',
    body: 'Bla blaaa.',
    published: new Date()
}
const article2 = {
    name: 'News2',
    body: 'Blaa blaabaaaa.',
    published: new Date()
}
const arrayArticles = [article1, article2];

for (let i = 0; i < arrayArticles.length; i++) { // author: 'Magdalena Voigt' added to each object
    arrayArticles[i].author = 'Magdalena Voigt'; // alt syntax: // array[i]['author'] = 'Magdalena Voigt';  
}
console.log(`arrayArticles with 2 object after adding an author:`, arrayArticles);



const product1 = {
    name: 'Apple',
    type: 'fruit',
    price: 10
}
const product2 = {
    name: 'Banana',
    type: 'fruit',
    price: 20
}
const product3 = {
    name: 'Bread',
    price: 59
}
const cart = [product1, product2, product3];
console.log(`cart is an array of 3 objects:`, cart);
let total = 0;
console.log(`total amount before calculation:`, total)
for (let i = 0; i < cart.length; i++) {
    if (cart[i].type === 'fruit') {  // total price of everything that is fruit
        total = total + cart[i].price;
    }
}
console.log(`total amount after calculation:`, total) // ---> 30


console.log(`00:16:00 how to add different things to different places:`)

const product01 = {
    name: 'Apple',
    type: 'fruit',
}
const product02 = {
    name: 'Banana',
    type: 'fruit',
}
const product03 = {
    name: 'Bread',
}
const cartT = [product01, product02, product03];

let total01 = 0;
for (let i = 0; i < cartT.length; i++) {
    if (cartT[i].name === 'Apple') {
        cartT[i].price = 10;   // ---> now Apple will get price: 10
    }
}
console.log(`if (cartT[i].name === 'Apple') {cartT[i].price = 10;} see below:`, cartT);



const product001 = {
    name: 'Apple',
    type: 'fruit',
    price: 10
}
const product002 = {
    name: 'Banana',
    type: 'fruit',
    price: 20
}
const product003 = {
    name: 'Bread',
    price: 30
}
const cartTT = [product001, product002, product003];

let totalLL = 0;
for (let i = 0; i < cartTT.length; i++) {
    // console.log(cartTT[i].type); // ---> 2 fruit
    if (cartTT[i].type === 'fruit') {
        cartTT[i].price = cartTT[i].price + 1000; //both fruit types a get +10 to price
    }
}
console.log(cartTT);
// when the IF is off - all products are before the update, when the IF is on, fruit get +10 to price
// and what if the type is missing? 
// 00:20:30 --> explained ---> it will be undefined --> bc boolean of TYPE will be false










// ARRAYS push pop shift unshift 
console.log(`\n  ----> ARRAYS: pop/push shift/unshift  \n `);

var color = ["red", "yellow", "blue"];
console.log(`var color before popping:`, color);
console.log(`color.pop(); color.pop(); color.pop(); - this removes tha last item`);
color.pop(); console.log(color);   // BLUE disappeared 
color.pop(); console.log(color);   // YELLOW disappeared
color.pop(); console.log(color);   // RED disappeared


color.push("red");
console.log(`color.push("red"); - this adds items at the end`, color);
color.push("black", "pink");
console.log(`color.push("black", "pink"); - this adds items at the end`, color);

color.shift();
console.log(`color.shift(); -this removes the first item`);

color.unshift("red");
console.log(`color.unshift("red"); -this adds "red" as the first item`, color);







// splice:       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
console.log(`\n  ----> ARRAYS: splice - YOU choose where you want to add sth 

// months.splice(1, 0, 'Feb');  // replaces 0 elements left of index 1 with 'Feb' === adds    'Feb' 
// months.splice(3, 1);         // replaces 1 element at index 3 with nothing     === removes 'BANG'
// months.splice(4, 1, 'May');  // replaces 1 element at index 4 with 'May'' 
// months.splice(3, 1, 'BANG'); // replaces 1 element at index 3 with 'BANG'
// months.splice(2, 1, 'Extra1', 'Extra1', 'Extra2', 'Extra3'); 
                                // replaces 1 element at index 2 with Extra1 Extra2 Extra3 `);

const months = ['Jan', 'March', 'April', 'June'];
console.log(`array months before splicing:`, months);

months.splice(1, 0, 'Feb');
console.log(`months.splice(1, 0, 'Feb');`, months);

months.splice(4, 1, 'May');
console.log(`months.splice(4, 1, 'May');`, months);

months.splice(2, 1, 'Extra1', 'Extra2', 'Extra3');
console.log(`months.splice(2, 1, 'Extra1', 'Extra2', 'Extra3');`, months);

months.splice(3, 1, 'BANG');
console.log(`months.splice(3, 1, 'BANG');`, months);

months.splice(3, 1);
console.log(`months.splice(3, 1);`, months);


//  .includes _________________ 
console.log(`\n  ---->   .includes  \n `);
console.log(`months.includes("May")`, months.includes("May")); // ---> true 
console.log(`months.includes("may")`, months.includes("may")); // ---> false // case sensitive! 
console.log(`months.includes("blabla")`, months.includes("blabla")); // ---> false










console.log(`\n  1. Callstack: on paper  \n `);






console.log(`\n  2. Codewars - who's online 
https://www.codewars.com/kata/whos-online/train/javascript \n `);


friends = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
];

console.log(`This is an array called friends`, friends);

// Solution 1 for the online status excercise: 
console.log(`\n  ---> solution 1 (see script)  \n `);

function whosOnline1(friends) {

    let online = [];
    let offline = [];
    let away = [];

    if (friends.length <= 0) {
        return {};
    }

    for (let i = 0; i < friends.length; i++) {

        const currentFriend = friends[i];

        if (currentFriend.status === 'online') {

            if (currentFriend.lastActivity > 10) {
                away.push(currentFriend.username);
            }

            else {
                online.push(currentFriend.username);
            }

        }

        else {
            offline.push(currentFriend.username);
        }


    }

    let result = {};

    if (online.length > 0) {
        result.online = online;
    }

    result.offline = offline;
    result.away = away;

    return result;

}

console.log(whosOnline1(friends));


// Solution 2 for the online status excercise: 
console.log(`\n  ---> solution 2 (see script)  \n `);


const whosOnline2 = (friends) => {

    let status = {}

    for (let i = 0; i < friends.length; i++) {

        let currentFriend = friends[i]

        if (currentFriend.status === 'offline') {
            if (!status.offline) { status.offline = [] }
            status.offline.push(currentFriend.username)
        }

        else if (currentFriend.lastActivity <= 10) {
            if (!status.online) { status.online = [] }
            status.online.push(currentFriend.username)
        }

        else {
            if (!status.away) { status.away = [] }
            status.away.push(currentFriend.username)
        }

    }

    return status

}

console.log(whosOnline2(friends));





// // --> added by me from CODE INSPIRATION   
// console.log(`\n  *** CODE INSPIRATION from lesson plan \n `);


// const user = {

//     name: 'Emil',
//     age: 25,
//     role: 'Teacher',
//     classes: ['Javascript 1', 'Javascript 2'],
//     hobbies: {
//         favourite: 'computers',
//         sports: 'running to class'
//     }
// }

// console.log(`This is const called user`, user)

// user.lastname = 'Bay'; // console.log(user); // Adds new property
// delete user.lastname; // console.log(user);  // Deletes

// console.log(user.hobbies.favourite)                                           // ---> computers
// console.log({ favourite: 'computers', sports: 'running to class' }.favourite) // ---> computers

// // (...)




// const students = [];
// console.log(`This is const students`, students);

// const newUser = {
//     name: '',
//     age: ''
// }
// console.log(`This is const newUser`, newUser);


// function addStudent(student) {

//     if (student.name == null && typeof student.name === 'string') return 'Error'
//     if (student.age == null) return 'Error, the age cannot be null !'

//     students.push(student)
// }

// console.log(addStudent({ name: 'Rahim' })); // ---> Error, the age cannot be null !
// console.log(addStudent({ name: 'Rahim', age: '21' })); // ---> undefined -- but it pushes 
// console.log(`This is const students`, students);


// // ways to access properties

// console.log(`This is const called user`, user) // logs the EMIL one

// user.name
// user['name']

// const prop = 'name'
// user[prop]

// user['name'] = 'Maria'
// user[0] = 'Hello world'

// console.log(`This is const called user`, user) // logs the MARIA one
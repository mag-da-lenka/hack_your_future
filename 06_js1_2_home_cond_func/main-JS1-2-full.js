console.log(`\n\n\nHOMEWORK JS1-2 week-06 by Magdalena /HYF /class 12 \n `); //parallel world connection test :) 




// 1. Codecamp -done.  
console.log('\n\n\n1. My username on Codecamp is mag-da-lenka --> https://www.freecodecamp.org/mag-da-lenka \n ');


// 2. FLIGHT BOOKING APP: There are 3 versions: 2a, 2b, and 2c because I needed to exercise the syntax and correct typing :>  
console.log(`\n\n\n2. FLIGHT BOOKING APP - with formal name option. \n `);

// 2a: warm-up :) 
console.log(`\n2a: warmup.`);
function getFullname01(firstname, surname) {

     let showfullName01 = `${firstname} ${surname}`; // OR: = firstname + " " + surname;
     return showfullName01;                          // console.log(showfullName01); 

     // alternatively: 
     // return `${firstname} ${surname}`;

}
console.log(getFullname01('Benjamin', 'Hughes'));
console.log(getFullname01('Magdalena', 'Voigt'));
console.log(getFullname01('Squirrel', 'Forrester'));  //it works 


// 2a: FINAL VERSION --->  BOOLEAN
console.log(`\n2b: final version: BOOLEAN.`);

function getFullname(firstName, surName, formalTitle) {

     let fullName = `${firstName} ${surName}`;             // let fullName = firstName + " " + surName;
     let formalName = `Lord/ess ${firstName} ${surName}`;  // let formalName = formalTitle + " " + firstName + " " + surName; 

     if (formalTitle === true) {

          if (firstName.length > 2 && surName.length > 2) {               //  eg. sth like: Mag.. Voi.. true
               return `You have checked the title box as [${formalTitle}]. \nYour formal name is [${formalName}]. All info provided.`;

          } else if (firstName.length == 2 && surName.length == 2) {      // eg. sth like: Ma Vo true
               return `You have checked the title box as [${formalTitle}]. \nYour name and surname are 2 letters each. If correct, proceed.`;

          } else if (firstName.length <= 1 && surName.length === 1)       // eg. sth like: M V true   EMPTY EMPTY true
               return `You have checked the title box as [${formalTitle}]  \nbut your name and surname are 1 letter each. Make them min. 2 letters long each.`;

          else (firstName.length < 1 && surName.length < 1)                // eg. sth like: EMPTY EMPTY true
          return `You have checked the title box as [${formalTitle}] \nbut you have not typed anything yet. Try again`;

     } else if (!formalTitle) {                                            // eg. sth like: Magdalena Voigt   or   Ma Vo 

          if (firstName.length > 2 && surName.length > 2) {                //  eg. sth like: Mag.. Voi.. false
               return `You haven't checked the title box. \nYour formal name is [${fullName}]. All required info provided.`;

          } else if (firstName.length === 2 && surName.length === 2) {     // eg. sth like: Ma Vo false 
               return `You haven't checked the title box. \nYour name and surname are 2 letters each. If correct, proceed.`;

          } else if (firstName.length === 1 && surName.length === 1)       // eg. sth like: M V false   
               return `You haven't checked the title box  \nand your name and surname are 1 letter each. Make them min. 2 letters long each.`;

          else (firstName.length < 1 && surName.length < 1)                // eg. sth like: EMPTY EMPTY false
          return `You haven't checked the title box \nand you have not typed anything yet. Try again`;
     }

}

// main if --> if
console.log(getFullname('Magdalena', 'Voigt', true));  // ---> 
console.log(getFullname('Mag', 'Voi', true));          // --->
console.log(getFullname('Ma', 'Vo', true));            // --->
console.log(getFullname('M', 'V', true));              // ---> 
console.log(getFullname('', '', true));                // ---> 

console.log(getFullname('Magdalena', 'Voigt', false)); // ---> 
console.log(getFullname('Magdalena', 'Voigt'));        // ---> will behave the same way as false 
console.log(getFullname('Mag', 'Voi', false));         // --->

console.log(getFullname('Ma', 'Vo', false));           // ---> 
console.log(getFullname('Ma', 'Vo'));                  // ---> will behave the same way as false
console.log(getFullname('M', 'V', false));             // ---> 

console.log(getFullname('', '', false));               // ---> 
console.log(getFullname('', ''));                      // ---> will behave the same way as false


// 2b: long version (now obsolete) ---> keep it commented out or it will show wrong answers
console.log(`\n2b: long version: obsolete. Keep commented out or it will override the final version and give you wrong answers!!!`);
// function getFullname(firstName, surName, formalTitle) {
//      let fullName = `${firstName} ${surName}`;
//      let formalName = `${formalTitle} ${firstName} ${surName}`;
//      if (formalTitle) {
//           if (firstName.length > 2 && surName.length > 2 && formalTitle.length >= 2) { //  eg. sth like: Mag.. Voi.. Ms...
//                return `You have typed: ${formalName}. This is your formal name with title. All info provided. Thak you.`;
//           } else if (firstName.length == 2 && surName.length == 2 && formalTitle.length >= 2) { // eg. sth like: M V Ms   or   Ma Vo Ms
//                return `You have typed: ${firstName} ${surName}. (Your name and surname are 2 letters long each. If that's correct, please proceed.)`;
//           } else if (firstName.length <= 1 && surName.length <= 1 && formalTitle.length >= 2) {// eg. sth like: M V Ms   or   __ __ Ms
//                return `You have typed: ${formalTitle} (your formal title), but your name and surname are too short or you forgot to type (some of) them. They need to be min. 2 letters long each.`;
//           } else if (firstName.length > 2 && surName.length > 2 && formalTitle.length == 1) { //  eg. sth like: Mag.. Voi.. M...
//                return `You have typed: ${formalName}. This is your formal name with title, but the the title has only one letter. It needs min. 2 letters. Please try again.`;
//           } else if (firstName.length == 2 && surName.length == 2 && formalTitle.length == 1) { // eg. sth like: M V M   or   Ma Vo M
//                return `You have typed: ${firstName} ${surName}. (Your name and surname are 2 letters long each. If that's correct, that's ok but the the title has only one letter. It needs min. 2 letters. Please try again.)`;
//           } else (firstName.length <= 1 && surName.length <= 1 && formalTitle.length == 1) // eg. sth like: M V M   or   __ __ M
//           return `You have typed: ${formalTitle} (your formal title), but your name and surname and title are too short or you forgot to type (some of) them. They need to be min. 2 letters long each.`;
//      } else if (firstName.length >= 2 && surName.length >= 2) { // eg. sth like: Magdalena Voigt   or   Ma Vo 
//           return `You have typed: ${fullName} (This is your full name without title. Make sure each of them is min. 2 letters long. If that's correct -> all _required_ info provided. Thak you.)`;
//      } else (firstName.length < 1 && surName.length < 1)
//      return 'You have not typed anything yet. Try again';
// }



// 2c: short version
console.log(`\n2c: short version.`);

function getFullname1(firstName1, surName1, formalTitle1) {
     let fullName1 = firstName1 + " " + surName1;
     let formalName1 = formalTitle1 + " " + firstName1 + " " + surName1;
     if (firstName1.length > 2 && surName1.length > 2 && formalTitle1.length >= 2) {
          return `F${formalName1} (This is your formal name with title. All info provided. Thak you.)`;
     } else if (firstName1.length > 2 && surName1.length > 2 && formalTitle1.length < 2) {
          return `${fullName1} (Your name is ok. If you'd like to display your title, it needs to be min. 2 letters long.)`;
     } else (firstName1.length <= 2 && surName1.length <= 2 && formalTitle1.length < 2)
     return `We cannot save this. Your first and full name need to be min. 3 letters and your title* (optional)  min. 2 letters long.`;
}

console.log(getFullname1('Magda', 'Voigt', 'Lady')); // ---> Lady Magda Voigt (This is your formal name with title. All info provided. Thak you.)
console.log(getFullname1('Magda', 'Voigt', 'M'));    // ---> Magda Voigt (Your name is ok. If you'd like to display your title, it needs to be min. 2 letters long.)
console.log(getFullname1('Ma', 'Vo', 'Ms'));         // ---> We cannot save this. Your first and full name need to be min. 3 letters and your title* (optional)  min. 2 letters long.
console.log(getFullname1('', '', ''));               // ---> We cannot save this. Your first and full name need to be min. 3 letters and your title* (optional)  min. 2 letters long.








// 3.    Event application  
console.log(`\n\n\n3. EVENT APPLICATION: shows what weekday the event is being held if we know how many days are left. Magda's version.\n `);


// HOW TO FORMAT new Date () --->  see the last paragrapg in this file
const unformatted_todayx = new Date()
const yearx = new Date().getFullYear();
const months_namesx = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const month_namex = months_namesx[new Date().getMonth()];
const month_numberx = appendLeadingZeroesx(new Date().getMonth() + 1);
const days_namesx = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 0 - 1 - 2 - 3 - 4 - 5 - 6
const day_namex = days_namesx[new Date().getDay()];
const day_numberx = appendLeadingZeroesx(new Date().getDate());
const hoursx = appendLeadingZeroesx(new Date().getHours());
const minutesx = appendLeadingZeroesx(new Date().getMinutes());
const secondsx = appendLeadingZeroesx(new Date().getSeconds());
function appendLeadingZeroesx(n) { if (n <= 9) { return "0" + n; } return n }

const myDateFormat1x = `Today is ${day_namex}, ${month_numberx} ${day_numberx} ${yearx} - ${hoursx}:${minutesx}:${secondsx} GMT+0100 (Central European Standard Time)`;
// console.log(myDateFormat1x);

const myDateFormat2x = `Today is ${day_namex}, ${month_namex} ${day_numberx} ${yearx} - ${hoursx}:${minutesx}:${secondsx} GMT+0100 (Central European Standard Time)`;
// console.log(myDateFormat2x);


// HOW TO GET THE NUMBER corresponding to the name of the day
const theNumberofTheDayOfTheWeek = new Date().getDay();
// console.log(theNumberofTheDayOfTheWeek);  //on Monday it shows ---> 1

function getEventWeekday(daysLeftToEvent) {

     return `
     Today is ${myDateFormat2x}. 
     Days left to your event: ${appendLeadingZeroesx(daysLeftToEvent)}. It takes place on ${days_namesx[(daysLeftToEvent + theNumberofTheDayOfTheWeek) % (days_namesx.length)]}.`;

}

// You specify how many days from today an event is being held in the parameter, eg. 2 // The function then figures out what weekday the event is being held.
console.log(getEventWeekday(0));
console.log(getEventWeekday(1));
console.log(getEventWeekday(2));
console.log(getEventWeekday(3));
console.log(getEventWeekday(4));
console.log(getEventWeekday(5));
console.log(getEventWeekday(6));

console.log(getEventWeekday(7));

console.log(getEventWeekday(8));
console.log(getEventWeekday(15));
console.log(getEventWeekday(22));

console.log(
     `\n\n% REMAINDER EXERCISES % \n
     
console.log((0 + 1) % 7);  // --->  1
console.log((1 + 1) % 7);  // --->  2
console.log(2 % 7);        // --->  2 
console.log(7 % 2);        // --->  1
console.log((2 + 1) % 7);  // --->  3
console.log((3 + 1) % 7);  // --->  4
console.log((7 + 1) % 7);  // --->  1
console.log((14 + 1) % 7); // --->  1 `);
// brain stimulation: https://www.w3schools.com/js/js_arithmetic.asp    %   <3
console.log((0 + 1) % 7);  // --->  1
console.log((1 + 1) % 7);  // --->  2
console.log(2 % 7);        // --->  2 
console.log(7 % 2);        // --->  1
console.log((2 + 1) % 7);  // --->  3
console.log((3 + 1) % 7);  // --->  4
console.log((7 + 1) % 7);  // --->  1
console.log((14 + 1) % 7); // --->  1



console.log(`\n\n\n3. EVENT APPLICATION:  shows what weekday the event is being held if we know how many days are left. Class version.\n `);

function getEventWeekdayCl(daysUntil) {

     const daysCl = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     const todayCl = new Date().getDay(); // 0 - 6

     if (daysCl.length < daysUntil) {
          const remainder = daysUntil % daysCl.length;
          const eventDay = todayCl + remainder;
          console.log(daysCl[eventDay]); //
     }

     else {
          console.log(daysCl[daysUntil]);
     }

}

getEventWeekdayCl(9); // Tuesday
getEventWeekdayCl(2); // Tuesday
getEventWeekdayCl(14); // Sunday





// 4. Weather wear 
console.log(`\n\n\n4. WEATHER APP.\n `);

function properClothes(temperature) {

     if (temperature < -77) {
          return `ARE YOU IN SPACE? Wear a spacesuit!`;

     } else if (temperature >= -77 && temperature <= -35) { // -77 to -35
          return `Winter in Russia or Alaska? Anyways, wear all the warm clothes you have: at least 10 layers. Drink sth warm.`;

     } else if (temperature > -35 && temperature <= -10) { //-36 to -10
          return `Spring in Russia or Alaska? Wear a half of the warm clothes you have: at least 5 layers. Drink sth warm.`;

     } else if (temperature > -10 && temperature <= 0) { //-11 to 0
          return `Winter in Poland? Wear 1/4 of the warm clothes you have: at least 3 layers. Drink in moderation.`;

     } else if (temperature > 0 && temperature <= 7) { //1 to 7
          return `Autumn in Denmark? Wear some clothes and white sneakers. Drink in moderation.`;

     } else if (temperature > 7 && temperature <= 17) { //8 to 17
          return `Mid Spring in Denmark? Wear a floral patterned dress with trousers and sandals. Drink in moderation.`;

     } else if (temperature > 17 && temperature <= 47) {
          return `Wherever you are, it's warm. Wear bikini and go swimming. Drink a lot.`;

     } else {
          return `ARE YOU IN HELL? Wear sth fancy!`
     }

}

console.log(properClothes(-89));
console.log(properClothes(-65));
console.log(properClothes(-15));
console.log(properClothes(-7));
console.log(properClothes(6));
console.log(properClothes(16));
console.log(properClothes(26));
console.log(properClothes(666));







// 5. Student manager 
console.log(`\n\n\n5. STUDENT MANAGER.\n `);
// Figure out how array.push works. ---> https://www.w3schools.com/jsref/jsref_push.asp  
// Here's how    .includes() works: ---> https://www.w3schools.com/jsref/jsref_indexof_array.asp 

const class07Students = [];

function addStudentToClass(studentName) {


     if ((!studentName) && (class07Students.length < 6)) {                                           // if empty string and class not fully booked
          return `!  Dear CANDIDATE! You haven't typed anything yet. Please provide the name.`;
     }

     else if ((studentName.toLowerCase() === 'fake queen cersei')) {                                 // if it's Cersei
          return `x  Dear [${studentName}]! Nobody likes you, except your twin bro.`
     }

     else if (class07Students.includes(studentName.toLowerCase())) {                                 // if name is on the list 
          return `x  Dear [${studentName}]! You have already been added to the list. Sorry, no double spots!`;
     }

     else if (studentName.toLowerCase() === 'queen') {                                               // if "Queen" / "queen" / "quEEn" etc
          return `${class07Students.push(studentName.toLowerCase())}  Dear [${studentName}]! It is an honour to have you with us.`;
     }

     else if (class07Students.length < 6) {                                                          // if class not fully booked and new legal canditdate
          return `${class07Students.push(studentName.toLowerCase())}  Dear [${studentName}]! You have been added to the list.    `;
     }

     if ((!studentName) && (class07Students.length <= 7)) {                                          // if empty string but class is fully booked (either 6ss or 6ss+Queen)
          return `!  Dear CANDIDATE! You haven't typed anything yet but the class is fully booked.`;
     }

     else {                                                                                          // if a candidate provides the name but class is fully booked (either 6ss or 6ss+Queen)
          return `x  Dear [${studentName}! Class 07 is fully booked. Try next semester.`;
     }


}


console.log(addStudentToClass(""));                       // should be askerd to type the name *** compare below: order matters
console.log(addStudentToClass("Fake Queen Magdalena"));   // should be student 1
console.log(addStudentToClass("Fake Queen Anabella"));    // should be student 2
console.log(addStudentToClass("Fake Queen Anabella"));    // should NOT be added bc already there
console.log(addStudentToClass("Fake Queen Cersei"));      // should NOT be added vc noone likes her except her twin bro
console.log(addStudentToClass("Fake Queen Isabella"));    // should be student 3
console.log(addStudentToClass("Fake Queen Isabella"));    // should NOT be added bc already there
console.log(addStudentToClass("Fake Queen Manuella"));    // should be student 4
console.log(addStudentToClass("Fake Queen Isadorra"));    // should be student 5
console.log(addStudentToClass("Fake Queen Daenerys"));    // should be student 6
console.log(addStudentToClass("Queen"));                  // should be student 7 bc she's the Queen
console.log(addStudentToClass("Fake Queen Elisabetta"));  // should NOT be added bc the class is full 
console.log(addStudentToClass("Fake Queen Elisabetta"));  // should NOT be added bc the class is full 
console.log(addStudentToClass("Fake Queen Rosetta"));     // should NOT be added bc the class is full  
console.log(addStudentToClass(""));                       // should NOT be added bc the class is full *** 
console.log(`   Tadaaaam`);                               // check the console ---> everything works as designed :) 

function getNumberOfStudents() {
     return `${class07Students.length}`
}

console.log(`   The number of students is ---> ` + getNumberOfStudents());
// console.log(`   The number of students is ---> ` + class07Students.length);
// console.log('   The number of students is ---> ' + class07Students.length);
// console.log(`   The number of students is ---> ${class07Students.length}`);
// console.log(`   The names on the list ---> ` + class07Students);
// console.log('   The names on the list ---> ' + class07Students);
// console.log(`   The names on the list --->  ${class07Students}`);
console.log(`   The list as an array ---> `);
console.log(class07Students)








// 6. Candy helper*  
console.log(`\n\n\n6. CANDY HELPER.*\n `);


const amountToSpend = Math.random().toFixed(2) * 100; console.log(`My amountToSpend on candy is ${amountToSpend.toFixed(2)}`);

const boughtCandyPrices = [];
console.log(`The boughtCandyPrices array before shopping ---> \n${boughtCandyPrices}`); //as a string
console.log(boughtCandyPrices); //as an array

const oneGramOfSweet = 0.5;
const oneGramOfChocolate = 0.7;
const oneGramOfToffee = 1.1;
const oneGramOfChewingGum = 0.03;

function addCandy(candyType, weight) {

     if (candyType === 'sweet') { boughtCandyPrices.push(oneGramOfSweet * weight); }
     else if (candyType === 'chocolate') { boughtCandyPrices.push(oneGramOfChocolate * weight); }
     else if (candyType === 'toffee') { boughtCandyPrices.push(oneGramOfToffee * weight); }
     else if (candyType === 'chewing gum') { boughtCandyPrices.push(oneGramOfChewingGum * weight); }

     return boughtCandyPrices;

}

(addCandy('sweet', 12));
(addCandy('chocolate', 10));
(addCandy('toffee', 25));
(addCandy('chewing gum', 5));

console.log(`The boughtCandyPrices array before checkout ---> \n${boughtCandyPrices}.`); // as a string
console.log(boughtCandyPrices); // as an array 
// for (let i = 0; i < boughtCandyPrices.length; i++) {
//      console.log(boughtCandyPrices[i]);  // as array with each price in a separate line
// }



let SumOfboughtCandyPrices = 0;
console.log(`SumOfboughtCandyPrices before shopping is ${SumOfboughtCandyPrices}`);

function canBuyMoreCandy(boughtCandyPrices) {

     for (let i = 0; i < boughtCandyPrices.length; i++) {
          SumOfboughtCandyPrices = SumOfboughtCandyPrices + boughtCandyPrices[i];
     }

     console.log(`SumOfboughtCandyPrices after shopping is ${SumOfboughtCandyPrices}`);

     let myBalance = amountToSpend - SumOfboughtCandyPrices

     if (amountToSpend > SumOfboughtCandyPrices) {
          return `Can I buy more candy if I have spent ${SumOfboughtCandyPrices}?\n` +
               `---> ${true}. My balance is ${myBalance}. :-) `;
     }
     else
          return `Can I buy more candy if I have spent ${SumOfboughtCandyPrices}?\n` +
               `---> ${false}. My balance is ${myBalance}. :-( `;


}


console.log(canBuyMoreCandy(boughtCandyPrices));



// 7. Rover the Robot*





// *** DATE FORMATTING 
console.log(`\n\n\nDATE FORMATTING\n `);


// brain stimulation: https://www.w3schools.com/jsref/jsref_getday.asp and https://www.w3schools.com/jsref/jsref_getdate.asp <3 
// new Date() --->  Sat Nov 16 2019 11:58:08 GMT+0100 (Central European Standard Time)  // new Date().getDay() //console.log(new Date().getDay()); ---> 6 <--- because today is Sat, Sunday would be 0 ---> 1-2-3-4-5-6-0 
// Date formatting ---> https://codehandbook.org/javascript-date-format/


const unformatted_today = new Date()
const year = new Date().getFullYear();
const months_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const month_name = months_names[new Date().getMonth()];
const month_number = appendLeadingZeroes(new Date().getMonth() + 1);
const days_names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 0 - 1 - 2 - 3 - 4 - 5 - 6
const day_name = days_names[new Date().getDay()];
const day_number = appendLeadingZeroes(new Date().getDate());
const hours = appendLeadingZeroes(new Date().getHours());
const minutes = appendLeadingZeroes(new Date().getMinutes());
const seconds = appendLeadingZeroes(new Date().getSeconds());
function appendLeadingZeroes(n) { if (n <= 9) { return "0" + n; } return n }


const myDateFormat_month_number = `${year}/${month_number}/${day_number} (${day_name}) ${hours}:${minutes}:${seconds} 
GMT+0100 (Central European Standard Time)`;
console.log(myDateFormat_month_number);


const myDateFormat_month_name = `${year}/${month_name}/${day_number} (${day_name}) ${hours}:${minutes}:${seconds} 
GMT+0100 (Central European Standard Time)`;
console.log(myDateFormat_month_name);


// console.log(unformatted_today.toString()); // ---> Tue Mar 03 2020 23:17:56 GMT+0100 (Central European Standard Time)
// console.log(months_names); 
// console.log(months_names.toString()); 
// console.log(month_name);
// console.log(days_names);         // ----> (7) ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]  ---> 0:"Sun" 1:"Mon"  2:"Tue" 3:"Wed" 4:"Thu" 5:"Fri" 6:"Sat"   length: 7  __proto__: Array(0)
// console.log(days_names.length);  // ----> 7 
// console.log(days_names[1]);      // ---> Mon 
// console.log(days_names[8]);      // ---> undefined ---> so it works :) 
// console.log(day_name);


const formatted_Date_template_raw = ` 
This is formatted_Date_template_raw: 
YEAR:        ${new Date().getFullYear()} 
MONTH-num:   ${appendLeadingZeroes(new Date().getMonth() + 1)} 
MONTH_name:  ${month_name}
DAY_num:     ${appendLeadingZeroes(new Date().getDate())}
DAY_name:    ${day_name}
HOURS:       ${appendLeadingZeroes(new Date().getHours())} 
MINUTES:     ${appendLeadingZeroes(new Date().getMinutes())} 
SECONDS:     ${appendLeadingZeroes(new Date().getSeconds())}
GMT+0100 (Central European Standard Time)\n `;
console.log(formatted_Date_template_raw);



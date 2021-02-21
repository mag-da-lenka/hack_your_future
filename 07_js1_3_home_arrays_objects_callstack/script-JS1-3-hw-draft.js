
console.log(`\nHello World! / Parallel world connection test. 
This is HOMEWORK JS1-3 week-07 by Magdalena /HYF /class 12. 
INSTRUCTIONS: https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript1/week3/homework.md \n `)


// 1. Codecamp -done. 
console.log(`\n1. My username on Codecamp is mag-da-lenka.\n `);



// 2. Item array removal 
console.log(`\n2. Item array removal\n `);

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
console.log(`const names\n`, names);

const nameToRemove = names.indexOf('Ahmad');
names.splice(1, nameToRemove); // replaces 1 element at index of Ahmed (wherever it/he is) with nothingness :> 
console.log(`\n const names\n`, names);




// 3. When will we be there?? 
console.log(`\n3. When will we be there? \n `);


// formatting: https://www.w3resource.com/javascript-exercises/javascript-date-exercise-13.php
// console.log(hours);
// console.log(rhours);
// console.log(minutes);
// console.log(rminutes); 



// option1 

const travelInformation1 = {
     speed: 50,
     distance: 432,
};
const mySpeed1 = travelInformation1.speed;
const myDistance1 = travelInformation1.distance;

let travelInformation2 = {
     speed: 50,
     distance: 4320,
};
const mySpeed2 = travelInformation2.speed;
const myDistance2 = travelInformation2.distance;


function calculateHowLong1(mySpeed, myDistance) {

     // if we cover 50 km in 60 mins, then we cover 432 km in 518,4 mins  
     const resultInMinutes = myDistance * 60 / mySpeed;
     const hours = (resultInMinutes / 60);
     const rhours = Math.floor(hours);
     const minutes = (hours - rhours) * 60;
     const rminutes = Math.round(minutes);

     // const result = `Your journey will take ${rhours} hour(s) and ${rminutes} minute(s).`;
     const result = 'Your journey will take ' + rhours + ' hour(s) and ' + rminutes + ' minute(s).';

     return result;
};

const resultForTravelInformation1 = calculateHowLong1(mySpeed1, myDistance1);
console.log(resultForTravelInformation1);

const resultForTravelInformation2 = calculateHowLong1(mySpeed2, myDistance2);
console.log(resultForTravelInformation2);



// option 2

const travelInformation3 = {
     speed: 50,
     distance: 43200,
};

const travelInformation4 = {
     speed: 50,
     distance: 432000,
};

function calculateHowLong2(paramIsObject) {

     const resultInMinutes = paramIsObject.distance * 60 / paramIsObject.speed;
     const hours = (resultInMinutes / 60); const rhours = Math.floor(hours);
     const minutes = (hours - rhours) * 60; const rminutes = Math.round(minutes);
     // const result = `Your journey will take ${rhours} hour(s) and ${rminutes} minute(s).`
     const result = 'Your journey will take ' + rhours + ' hour(s) and ' + rminutes + ' minute(s).';

     return result;
};

const resultForTravelInformation3 = calculateHowLong2(travelInformation3)
console.log(resultForTravelInformation3);

const resultForTravelInformation4 = calculateHowLong2(travelInformation4)
console.log(resultForTravelInformation4);








// 4. Series duration of my life  
console.log(`\n4. Series duration of my life \n `);


let seriesDurations3 = [

     {
          title: 'Game of Thrones',
          days: 3,
          hours: 1,
          minutes: 0,
     },

     {
          title: 'The Walking Dead',
          days: 7,
          hours: 2,
          minutes: 18,
     },

     {
          title: 'The Handmaid\'s Tale',
          days: 4,
          hours: 8,
          minutes: 47,
     }

];


function showMeWhatIveDoneWithMyLife(seriesDurationsObj, myAge) {

     let aYearinMinutes = 365.25 * 24 * 60;         // console.log(aYearinMinutes);// ---> 525960  
     let myAgeInMinutes = myAge * aYearinMinutes;   // console.log(myAgeInMinutes); // ---> 20512440

     let percent_OfMyLifeThat_All_SeriesTookToWatch = 0;

     for (let i = 0; i < seriesDurationsObj.length; i++) {

          let eachTitle_DurationInMinutes =
               seriesDurationsObj[i].minutes +
               seriesDurationsObj[i].hours * 60 +
               seriesDurationsObj[i].days * 24 * 60;
          // console.log(eachTitle_DurationInMinutes) // --->  4380   10218   6287 

          let percentEachTitleTookToWatch =
               (eachTitle_DurationInMinutes / myAgeInMinutes) * 100;


          percent_OfMyLifeThat_All_SeriesTookToWatch += percentEachTitleTookToWatch;
          // percent_OfMyLifeThat_All_SeriesTookToWatch =
          //      percent_OfMyLifeThat_All_SeriesTookToWatch + percentEachTitleTookToWatch;
          // so the result = 0 + (0,20% + 0.50% + 0.30%) = 0.10% 

          console.log(`          ${seriesDurationsObj[i].title} has taken ${percentEachTitleTookToWatch.toFixed(2)} % of my life. 
          That is ${eachTitle_DurationInMinutes} minutes (of my life).\n `);

     }

     // // NOTES - DON'T DELETE
     // console.log(`If the variables are logged in backticks / $$$, they will be strings. ---> `, typeof (`${myAge}`));
     // console.log(`I am ${myAge} ys === ${myAgeInMinutes} mins old. 
     // To watch all this has taken ---> ${percent_OfMyLifeThat_All_SeriesTookToWatch.toFixed(2)}% of my life 
     // and it was worth it. \n `);

     // console.log(`If without brackets, they will keep the numeric values. Just saying.  ---> `, typeof (myAge));
     // console.log(`I am`, myAge, `ys ===`, myAgeInMinutes, `mins old. 
     // To watch all this has taken --->`, percent_OfMyLifeThat_All_SeriesTookToWatch.toFixed(2), `% of my life 
     // and it was worth it. \n `);

     return (
          `\nTHIS IS WHAT THE FUNCTION RETURNS: \n 
          I am ${myAge} ys === ${myAgeInMinutes} mins old. \n  
          To watch all this has taken ${percent_OfMyLifeThat_All_SeriesTookToWatch.toFixed(2)}%  \n `
     );   // Here everything is converted to STRING

     // vs. 
     // return (`I am`, myAge, `ys ===`, myAgeInMinutes, `mins old. 
     // To watch all this has taken`, percent_OfMyLifeThat_All_SeriesTookToWatch);   
     // will show only the NUMERIC value of percent_OfMyLifeThat_All_SeriesTookToWatch   
     // --- >  0.10181626369169147  

};


let resultForMagdaAt39 = showMeWhatIveDoneWithMyLife(seriesDurations3, 39);
console.log(resultForMagdaAt39);
// let resultForMohammedAt31 = showMeWhatIveDoneWithMyLife(seriesDurations, 31);
// console.log(resultForMohammedAt31);
// console.log(showMeWhatIveDoneWithMyLife(seriesDurations, 39));






// 5. My favorite songs 
console.log(`\n5. My favorite songs \n `);

let songDatabase = [ //an array of song-objects

     {
          songId: 1,
          title: 'Lateralus',
          artist: 'Tool',
     },

     {
          songId: 2,
          title: 'Dumb Surfer',
          artist: 'King Krule',
     },

     {
          songId: 3,
          title: 'Evan Finds The Third Room',
          artist: 'Khruangbin',
     },

     {
          songId: 4,
          title: 'Drunkship of Lanterns',
          artist: 'The Mars Volta',
     },

];

console.log(`---> Original songDatabase`); console.log(songDatabase);
// console.log(typeof (songDatabase)); // --->  object 



// STEP 1 - Add song to database
function addSongToDatabase(song) {  // the parameter will be an object
     songDatabase.push(song);
     // console.log(song, `added to database, your database now:`, songDatabase);
     return song;
}
console.log(`---> Adding 3 songs to songDatabase:`);
console.log(addSongToDatabase({ songId: 5, title: 'Add This Song', artist: 'GusGus', }));
console.log(addSongToDatabase({ songId: 6, title: 'Roots Bloody Roots', artist: 'Sepultura', }));
console.log(addSongToDatabase({ songId: 7, title: 'Us Or Them', artist: 'The Cure', }));
console.log(addSongToDatabase({ songId: 10, title: 'Aurora', artist: 'Bjork', }));
console.log(addSongToDatabase({ songId: 11, title: 'Star crossed lovers', artist: 'Siouxsie and the Banshees' }));
console.log(addSongToDatabase({ songId: 12, title: 'Window Licker', artist: 'Aphex Twin' }));
// console.log(addSongToDatabase({ title: 'Us Or Them', artist: 'The Cure', })); // no songId -- just a test -- it was added anyway :)
// alternative way: // This is a cool way constructor for a song-object from Swapna. THANK YOU :) 
function song(songId, title, artist) {
     this.songId = songId;
     this.title = title;
     this.artist = artist;
}
let song1 = new song(10, 'Aurora', 'Bjork'); // 'Aurora' is added again!
console.log(addSongToDatabase(song1));
//CHECK: 
console.log(`Your database now: `, songDatabase);




// STEP 2 - Searching for a song
function getSongByTitle(title) {
     for (let i = 0; i < songDatabase.length; i++) {
          if (title === songDatabase[i].title)
               return (songDatabase[i]); // BTW here the return is a must! 
          else undefined;
     }
}
console.log(`---> Getting song by title from songDatabase: `);
const searchedSong1 = 'Lateralus';
console.log(getSongByTitle(searchedSong1));
const searchedSong2 = 'Drunkship of Lanterns';
console.log(getSongByTitle(searchedSong2));
const searchedSong3 = 'Drunkship of Lanterns XxxXXXXXXXXX';
console.log(getSongByTitle(searchedSong3)); // undefined, so it works :) 




// STEP 2 - Create our own playlist
let myPlaylist = [];
function addSongToMyPlaylist(title) {
     return myPlaylist.push(getSongByTitle(title));
}
console.log(`---> Adding 4 songs to myPlaylist:`);
console.log(addSongToMyPlaylist('Lateralus'));
console.log(addSongToMyPlaylist('Dumb Surfer'));
console.log(addSongToMyPlaylist('Roots Bloody Roots'));
console.log(addSongToMyPlaylist('Window Licker'));
console.log(`---> My playlist with songs`, myPlaylist);







// 6. NOnoN0nOYes (Note taking app) 
console.log(`\n6. NOnoN0nOYes (Note taking app) \n `);

const notes = [];

// step 1 - save a note
function addNote(id, content) {
     return notes.push({ id, content })
}
addNote(1, 'Hi, I am taking notes.');
addNote(2, 'Hi, squirrels eat worms.');
addNote(3, 'Hi, Geyzelda is fluffy.');
console.log(`---> This is my array called notes:`, notes);

// STEP 2 - get a note
function getNoteFromId(id) {
     for (let i = 0; i < notes.length; i++) {
          if (id === notes[i].id)
               return (notes[i]);
          else if (!id || id !== Number)
               return `Error, please specify Id.`
     }
}
console.log(`---> Getting noted by id:`)
console.log(getNoteFromId(1));             // ---> {id: 1, content: "Hi, I am taking notes."}
console.log(getNoteFromId(5));             // ---> `Error, please specify Id.`
console.log(getNoteFromId('blablabla'));   // ---> `Error, please specify Id.`



//STEP 3 - getting all notes
function getAllNotes() {
     return notes
}
console.log(`---> Getting all notes:`)
console.log(getAllNotes());


// STEP 4 - logging out notes 
function logOutNotesFormatted() {
     for (let i = 0; i < notes.length; i++) {
          console.log(`The note with id "${notes[i].id}" has the following note text: "${notes[i].content}".`);
     }
}
console.log(`---> Logging out formatted notes:`)
logOutNotesFormatted();










// 7. CactusIO-interactive (Smart phone usage app) optional 
console.log(`\n 7. CactusIO-interactive (Smart phone usage app) optional  \n `);



const activities = [];


// 7.1 adding an activity 
console.log(`\n7.1 FUNCTION addActivity(date, activity, duration)`);
function addActivity(date, activity, duration) {
     activities.push({ date, activity, duration })
}
addActivity('2020-02-15', 'YouTube', 30);
addActivity('2020-02-15', 'feed the cybersquirreloids', 10);
addActivity('2020-02-15', 'scratch the robocat', 100);
addActivity('2020-02-16', 'hbo', 60);
addActivity('2020-02-17', 'Netflx', 300);
// console.log(`This is an array called activities:`, activities);




// 7.2 showing my status
console.log(`\n7.2 FUNCTION showStatus(activity)`)
function showStatus(activity) {
     let activitiesTotalTime = 0;
     for (let i = 0; i < activities.length; i++) {
          activitiesTotalTime = activitiesTotalTime + activities[i].duration; // 0+(30+10+100+60+300)=500
     }
     if (activity)
          return (`> You have ${activities.length} activities. They will take ${activitiesTotalTime} minutes.`);
     else if (!activity)
          return (`> Add some activities first!!!`);
}
console.log(showStatus());
console.log(showStatus(activities)); // ---> You have 5 activities. They will take 500 minutes.




// 7.3 usage limit with total time of activities 
console.log(`\n7.3 FUNCTION showStatusVsLimitAll(activity, limit) -with activitiesTotalTime`)
function showStatusVsLimitAll(activity, limit) {

     let activitiesTotalTime = 0;
     for (let i = 0; i < activities.length; i++) {
          activitiesTotalTime = activitiesTotalTime + activities[i].duration; // 0+(30+10+100+60+300)=500
     }

     let limitMinusActivities = limit - activitiesTotalTime;
     let activitiesMinusLimit = activitiesTotalTime - limit;

     if (activitiesTotalTime < limit)
          return (`> The total time of your activities is ${activitiesTotalTime} minutes.
          Your limi1 is ${limit}.  
          You can add ${limitMinusActivities} minutes more.`);

     if (activitiesTotalTime === limit)
          return (`> The total time of your activities is ${activitiesTotalTime} minutes.
          Your limit is ${limit}. That's it.  
          Don't plan anything else.`);

     else if (activitiesTotalTime > limit)
          return (`> The total time of your activities is ${activitiesTotalTime} minutes. 
          Your limit is ${limit}. 
          You have ${activitiesMinusLimit} minutes left.`);

}

console.log(showStatusVsLimitAll(activities, 100));
console.log(showStatusVsLimitAll(activities, 500));
console.log(showStatusVsLimitAll(activities, 666));
// console.log(activities);




// 7.4  - adding an activity - IMPROVED VERSION  

console.log(`\n7.4 FUNCTION function addActivity2(date, activity, duration)`)
function addActivity2(date, activity, duration) {
     activities.push({ date, activity, duration })
}
const todayAsRawDate = new Date();
// addActivity2(today, 'MORE smartphoning', 3);  // plz don't call it bc date will look raw


function addActivity3(dateInput, activity, duration) {

     // I've changed the date param name into dateInput     
     // because 
     // I want to use the word date as object key to keep the format identical as the previously pushed objects

     const year = new Date().getFullYear();
     const month_number = appendLeadingZeroes(new Date().getMonth() + 1);
     const day_number = appendLeadingZeroes(new Date().getDate());
     function appendLeadingZeroes(n) { if (n <= 9) { return "0" + n; } return n }
     const date = `${year}-${month_number}-${day_number}`; // <---- SEE? That's WHYYY!
     // console.log(date);

     activities.push({ date, activity, duration })
     console.log(`> You have added `, { date, activity, duration })


}

const dateToday = new Date() // this is the raw input from SKYNET

addActivity3(dateToday, 'formatting new Date()', 666)
addActivity3(dateToday, 'MORE Youtube', 3);
addActivity3(dateToday, 'more Netflix', 6);
addActivity3(dateToday, 'feed MORE squirreloids', 17);
addActivity3(dateToday, 'scratch the robocat LONGER', 150);




// 7.5 showing my status IMPROVED 7.2 --> 7.5 shows the number of actitivies for that specific day
console.log(`\n7.5 FUNCTION showStatusToday(dateInput)`)
function showStatusToday(allActivities) {

     const year = new Date().getFullYear();
     const month_number = appendLeadingZeroes(new Date().getMonth() + 1);
     const day_number = appendLeadingZeroes(new Date().getDate());
     function appendLeadingZeroes(n) { if (n <= 9) { return "0" + n; } return n }
     const date_YYYY_MM_DD = `${year}-${month_number}-${day_number}`;
     // console.log(date_YYYY_MM_DD);

     console.log(`> To do today:`)
     for (let i = 0; i < activities.length; i++) {

          if (activities[i].date === date_YYYY_MM_DD) {
               console.log(activities[i])
          }

     }

}

showStatusToday(activities);









// 7.6 Create a function for calculating the activity a user has spent the most time on
console.log(`\n7.6 FUNCTION calculateMostTimeSpent(dateInput)`)



const durationsNotSorted = []

function calculateMostTimeSpent(dateInput) {

     let calculationResult;

     for (let i = 0; i < activities.length; i++) {
          durationsNotSorted.push(activities[i].duration)
     }

     const durationsSorted = durationsNotSorted.sort(function (a, b) { return a - b });
     // console.log(durationsSorted);
     const durationsSorted_LastItem = durationsSorted[durationsSorted.length - 1];
     // console.log(durationsSorted_LastItem);

     for (let i = 0; i < activities.length; i++) {

          if (activities[i].duration === durationsSorted_LastItem) {

               // console.log(activities[i].activity, activities[i].duration);

               calculationResult = console.log(`
               The activity you spent most time on is ---> `, activities[i].activity, `. 
               It took --->`, activities[i].duration, `minutes.`)

          }

     }

     // return console.log(calculationResult);
}


calculateMostTimeSpent(dateToday);



console.log(`\n> WHAT'S IN THE ARRAY in the end --->  console.log(activities) ---> `, activities);


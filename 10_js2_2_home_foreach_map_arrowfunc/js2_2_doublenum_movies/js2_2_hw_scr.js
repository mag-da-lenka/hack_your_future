console.log(`\n\n\nHello Squirrels. / Parallel world connection test: hw JS2-2 week-10 by Magdalena /HYF /class 12.\n `)




console.log(`\n\n\n01: DOUBLING NUMBERS`)

let numbers = [1, 2, 3, 4]; let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}
console.log(`01.01: The result via for Loop is`, newNumbers);

// Rewrite the above program using map and filter.
let newNumbers1 = numbers
    .filter(function (aNumber) {
        if (aNumber % 2 !== 0) return true;
        else return false;
    })
    .map(function (aNumber) {
        return aNumber * 2;
    });
console.log(`01.02: The result via .filter and .map and normal function is`, newNumbers1);

// <--- Don't forget to use arrow functions.
let newNumbersArrow = numbers
    .filter(aNumber => aNumber % 2 !== 0)
    .map(aNumber => aNumber * 2);
console.log(`01.03: The result via .filter and .map and arrow function is`, newNumbersArrow);









console.log(`\n \n \n02: WORKING WITH THE MOVIES (which are in the movies script)`)

// 2.0 test
const moviesNumberTitlesStr666 = movies
    .filter(aTitle => aTitle.title.includes('666')); // 
console.log(`02.00 test2 ---> The nr of movies including '666' as a title:`, moviesNumberTitlesStr666.length);


// 2.1 Create an array of movies containing the movies with a short title (you define what short means)
const moviesUltraShortTitles = movies
    .filter(aTitle => aTitle.title.length === 1);
console.log(`02.01: Ultra short titles:`, moviesUltraShortTitles);


// 2.2 Create an array of movie titles with long movie titles
const moviesUltraLongTitles = movies
    .filter(aTitle => aTitle.title.length >= 66.6);
console.log(`02.02: Ultra long titles:`, moviesUltraLongTitles);


// 2.3 Count the number of movies made between 1980-1989 (including both years)
const movies19801989 = movies
    .filter(aMovie => (aMovie.year >= 1980 && aMovie.year <= 1989));
console.log(`02.03: Number of movies made from 1980 to 1989:`, movies19801989.length);


// 2.4 Create a new array that has an extra key called tag. 
// The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
let moviesWithARatingTag = movies
    .map(aMovie => {
        if (aMovie.rating < 4) {
            aMovie.tag = 'bad';
        }
        else if (aMovie.rating >= 4 && aMovie.rating < 7) {
            aMovie.tag = 'average';
        }
        else {
            aMovie.tag = 'good';
        }
        return aMovie;
    });
console.log(`02.04: Movies with a rating tag:`, moviesWithARatingTag);


// 2.5 Using chaining, first filter the movies array to only contain the movies rated higher than 6. 
// Now map the movies array to only the rating of the movies.
const moviesRatedOver6 = movies
    .filter(aMovie => aMovie.rating > 6)
    .map(aMovie => aMovie.title);
console.log(`02.05: Movies rated over 6 - by titles:`, moviesRatedOver6);


// 2.6 Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. 
// So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. 
// Can you make sure the search is case insensitive?
const threeKeywords = movies
    .filter(aMovie => aMovie.title.toLowerCase().includes('surfer')
        || aMovie.title.toLowerCase().includes('alien')
        || aMovie.title.toLowerCase().includes('benjamin'));
console.log(`02.06: Movies filtered by 3 lowerCased keywords: 
'surfer', 'alien' + 'benjamin':`, threeKeywords);



// 2.7 Create an array of movies where a word in the title is duplicated. 
// Fx "Star Wars: The Clone Wars" the word Wars is duplicated.
let theArrayWithWordsDuplicatedInTitles = movies.filter(words => {
    let arrayWithTitlesAsSeparateWords = words.title.split(" ");
    // console.log(arrayWithTitlesAsSeparateWords); 
    // works as designed: titles get split into --->  (3) ["Word1", "Word2", "Word3"] 
    for (let i = 0; i < arrayWithTitlesAsSeparateWords.length; i++) {
        words1forComparison = arrayWithTitlesAsSeparateWords[i].toLowerCase();
        // console.log(words1forComparison);
        for (let j = i + 1; j < arrayWithTitlesAsSeparateWords.length; j++) {
            words2forComparison = arrayWithTitlesAsSeparateWords[j].toLowerCase();
            // console.log(words2forComparison);
            if (words1forComparison === words2forComparison) {
                return true;
            }
        }
    }
    return false;
});
console.log(`02.07: The movies with titles containing duplicated words:`,
    theArrayWithWordsDuplicatedInTitles,
    `There are`, theArrayWithWordsDuplicatedInTitles.length, `of them.`);
// (204) [{…}, {…}, {…} ........ ]

let theArrayWithWordsDuplicatedInTitles_titlesOnly =
    theArrayWithWordsDuplicatedInTitles
        .map(item => item.title);
console.log(`02.07: The movies with titles containing duplicated words: (.titles_only)`,
    theArrayWithWordsDuplicatedInTitles_titlesOnly);
// (204) ["2 Fast 2 Furious", "40 Days and 40 Nights", "A Home at the End of the World" ..... ] 





// 2.8 Find the word that is mostly duplicated using sort. (Optional)   

// I need to split all the words of ---> theArrayWithWordsDuplicatedInTitles_titlesOnly
let theStringWithWordsDuplicatedInTitles_titlesOnly_joined =
    theArrayWithWordsDuplicatedInTitles_titlesOnly.join(' ');
console.log("02.08/1: theStringWithWordsDuplicatedInTitles_titlesOnly_joined: \n",
    theStringWithWordsDuplicatedInTitles_titlesOnly_joined);
// console.log(typeof theStringWithWordsDuplicatedInTitles_titlesOnly_joined); // ---> string

// ordering the long string by frequency of words 
// https://medium.com/swlh/javascript-order-words-in-string-based-on-frequency-8331f60cd9d4
function orderStringByFrequency(string) {
    let frequentObj = {};
    string.toLowerCase().split(' ') // I added to lower case
        .forEach(word => frequentObj[word] ? frequentObj[word]++
            : frequentObj[word] = 1);
    return Object.entries(frequentObj)
        .sort((a, b) => b[1] - a[1]).map((arr) => arr[0]).join(' ');
}
console.log('2.08/2: theStringWithWordsDuplicatedInTitles_titlesOnly_splitIntoWords S0RTED: \n',
    orderStringByFrequency(theStringWithWordsDuplicatedInTitles_titlesOnly_joined));

// turning the massive string into separate strings in an array
let theArrayWithWordsDuplicatedInTitles_titlesOnly_splitIntoWords =
    orderStringByFrequency(theStringWithWordsDuplicatedInTitles_titlesOnly_joined).split(' ');
console.log("02.08/3: theArrayWithWordsDuplicatedInTitles_titlesOnly_splitIntoWords: ",
    theArrayWithWordsDuplicatedInTitles_titlesOnly_splitIntoWords);

// console.log(typeof theArrayWithWordsDuplicatedInTitles_titlesOnly_splitIntoWords); 
// object ---> an array
console.log("02.08/4: The most duplicated word is ---> ",
    theArrayWithWordsDuplicatedInTitles_titlesOnly_splitIntoWords[0]);





// 2.9 Calculate the average rating of all the movies using reduce. (Optional)
let averageRating = movies
    .reduce((averageRating, score) => averageRating + score.rating, 0) / movies.length; //  6528
console.log(`02.09: Average rating:`, averageRating);



// 2.10 Count the total number of Good, Average and Bad movies using reduce. (Optional)
let totalNumber_OfEachRatingGroup = moviesWithARatingTag
    .map(moviesWithARatingTag => moviesWithARatingTag.tag)
    .reduce((acc, moovies) => {
        acc[moovies] = (acc[moovies] || 0) + 1;
        return acc;
    },
        {}
    );
console.log(`02.10: The numbers of movies rated as bad, average and good:`,
    totalNumber_OfEachRatingGroup);








// old notes (feel free to skip): 


// // ----------- older version of 2.10 -------------------------
// let totalNumberOfEachRatingGroupBAD = moviesWithARatingTag
//     .reduce((accumulator, value) => {
//         if (value.tag === 'bad') { accumulator.badFromZero = accumulator.badFromZero + 1; }
//         return accumulator;
//     },
//         { 'badFromZero': 0 }
//     );
// console.log(`2.10 Test for BAD /check!: The number of movies rated as bad: ${totalNumberOfEachRatingGroupBAD.badFromZero}`);

// or all at once: 
// let totalNumberOfEachRatingGroup = moviesWithARatingTag
//     .reduce((accumulator, value) => {
//         if (value.tag === 'bad') { accumulator.badFromZero = accumulator.badFromZero + 1; }
//         if (value.tag === 'average') { accumulator.averageFromZero = accumulator.averageFromZero + 1; }
//         if (value.tag === 'good') { accumulator.goodFromZero = accumulator.goodFromZero + 1; }
//         return accumulator;
//     },
//         { 'badFromZero': 0, 'averageFromZero': 0, 'goodFromZero': 0 }
//     );
// console.log(`2.10 an easier version: 
// The number of movies rated as bad: ${totalNumberOfEachRatingGroup.badFromZero}
// The number of movies rated as average: ${totalNumberOfEachRatingGroup.averageFromZero}
// The number of movies rated as good: ${totalNumberOfEachRatingGroup.goodFromZero}
// `);


/* 2.8: inspiration:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
let points = [40, 100, 1, 5, 25, 10];
Sort the numbers in the array in descending order
The first item in the array (points[0]) is now the highest value
points.sort(function (a, b) { return b - a });
console.log('SHOW ME (points)', points); */


// 2.10 inspiration :> 
// NUMBER OF EACH RATING.tag ENTRIES: 
// console.log(`MOVIES WITH TAGS bad/average/good:`); console.log(moviesWithARatingTag); 
// must be the same number because all of the have a tag, whatever the rating is
// moviesWithARatingTag.forEach(function (aMovie) { console.log(aMovie.tag); }); 
// works: simply shows all the tags for each movie object 
// https://www.freecodecamp.org/news/reduce-f47a7da511a9/ ---> TALLY! the fruit basket!!! 
// const fruitBasket = ['banana', 'cherry', 'orange', 'apple',
//     'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];
// const count = fruitBasket.reduce((tally, fruit) => {
//     tally[fruit] = (tally[fruit] || 0) + 1;
//     return tally;
// },
//     {}
// );  
// console.log(count); // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }
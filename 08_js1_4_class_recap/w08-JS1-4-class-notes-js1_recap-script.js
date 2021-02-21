console.log(`This is JS1-4 week 08 - CLASS EXERCISES \n `);



console.log(`EXERCISES  

https://github.com/HackYourFuture-CPH/JavaScript/tree/master/javascript1/week4

1. Fibonacci Sequence 
2. Fizz buzz
3. Build a sentiment analyzer
4. Credit card number formatter
-- 5. Character frequencies
-- 6. Palindromic substring
-- 7. Credit card info
-- 8. Tic Tac Toe
-- 9. Conway's game of life (optional) \n `);



console.log(`\n1. Fibonacci Sequence \nSoundtrack: https://www.youtube.com/watch?v=mBgviceBzFs\n `);
// Given a specific number in the fibonacci sequence return the fibonacci number. 

console.log(`Fibonacci V.1`)
const fibonacciArr_v1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]; // 0 1 2 3 4 5 6 7 8 9
console.log(`fibonacciArr_v1: `, fibonacciArr_v1);
function showFibNum(indexFrom_1) {
    const indexFrom_0 = indexFrom_1 - 1
    const requestedNumber = fibonacciArr_v1[indexFrom_0]; // changing indexing from 0-9 to 1-10
    console.log(`indexFrom_0: `, indexFrom_0, `. indexFrom_1: `, indexFrom_1, `. requestedNumber:`, requestedNumber, `.`)
    return requestedNumber;
}
console.log(showFibNum(0));  // old index -1  ---> undefined
// console.log(showFibNum(1));  // old index  0  ---> nr 0
// console.log(showFibNum(2));  // old index  1  ---> nr 1
// console.log(showFibNum(3));  // old index  2  ---> nr 1
// console.log(showFibNum(4));  // old index  3  ---> nr 2
console.log(showFibNum(5));  // old index  4  ---> nr 3
console.log(showFibNum(6));  // old index  5  ---> nr 5
// console.log(showFibNum(7));  // old index  6  ---> nr 8
// console.log(showFibNum(8));  // old index  7  ---> nr 13
// console.log(showFibNum(9));  // old index  8  ---> nr 21
console.log(showFibNum(10)); // old index  9  ---> nr 34
console.log(showFibNum(11)); // old index 10  ---> undefined


console.log(`Fibonacci V.2`)
const fibonacciArr_v2 = [0, 1];
for (i = fibonacciArr_v2.length; i <= 20; i++) { fibonacciArr_v2[i] = fibonacciArr_v2[i - 1] + fibonacciArr_v2[i - 2] }
console.log(`fibonacciArr_v2: `, fibonacciArr_v2);
function showFibNm(idxFrom_1) {
    const idxFrom_0 = idxFrom_1 - 1
    const theRequestedFibonacciNumber = fibonacciArr_v2[idxFrom_0]; // changing indexing from 0-9 to 1-10
    console.log(`idxFrom_0: `, idxFrom_0, `. idxFrom_1: `, idxFrom_1, `. theRequestedFibonacciNumber:`, theRequestedFibonacciNumber, `.`)
    return theRequestedFibonacciNumber;
}
console.log(showFibNm(0));  // old index -1  ---> undefined
console.log(showFibNm(1));  // old index  0  ---> nr 0
// console.log(showFibNm(2));  // old index  1  ---> nr 1
// console.log(showFibNm(3));  // old index  2  ---> nr 1
// console.log(showFibNm(4));  // old index  3  ---> nr 2
// console.log(showFibNm(5));  // old index  4  ---> nr 3
// console.log(showFibNm(10)); // old index  9  ---> nr 34
console.log(showFibNm(20)); // old index 19  ---> nr 4181
console.log(showFibNm(22)); // old index 21  ---> undefined


console.log(`Fibonacci V.3`) // recursion <3 <3 <3 
function fibonacci(num) {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log("fibonacci nr 1: ", fibonacci(1));
console.log("fibonacci nr 2: ", fibonacci(2));
console.log("fibonacci nr 3: ", fibonacci(3));
console.log("fibonacci nr 4: ", fibonacci(4));
console.log("fibonacci nr 5: ", fibonacci(5));


console.log(`\n2. Fizz Buzz \n `);
/*Create a function that prints the numbers from 1 to 100. 
But for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. 
For numbers which are multiples of both three and five print FizzBuzz.
When that works. Make the two number for multiples into parameters. So it can be called like this:
fizzBuzz(4, 12);*/

console.log(`\nV.1 --- fizzBuzz_lvl_Easy(param01)`)
function fizzBuzz_lvl_Easy(param01) {
    console.log(` Input: (param01): `, param01);
    if ((param01 <= 100) && (param01 >= 1)) {
        // fizzbuzz   // fizz  // buzz  // otherNumber                                     
        if ((param01 % 3 === 0) && (param01 % 5 === 0)) { param01 = 'FIZZBUZZ '; return `Output:     ----->  ${param01}`; }
        if (param01 % 3 === 0) { param01 = 'fizz '; return `Output:     ----->  ${param01}`; }
        if (param01 % 5 === 0) { param01 = 'buzz '; return `Output:     ----->  ${param01}`; }
        if ((param01 % 3 !== 0) && (param01 % 5 !== 0)) { return `Output:     ----->  ${param01}`; }
    }
    else return 'Output: The parameter is out of scope. Scope: 1-100.';

}
console.log(fizzBuzz_lvl_Easy(1));
console.log(fizzBuzz_lvl_Easy(2));
console.log(fizzBuzz_lvl_Easy(3));
console.log(fizzBuzz_lvl_Easy(5));
console.log(fizzBuzz_lvl_Easy(6));
console.log(fizzBuzz_lvl_Easy(7));
console.log(fizzBuzz_lvl_Easy(15));
console.log(fizzBuzz_lvl_Easy(301));


console.log(`\nV.2 --- fizzBuzz(param1, param2)`) // I'll keep it for historic purposes and as a warning :D
function fizzBuzz(param1, param2) {  // both params are numbers
    console.log(` Input: (param1, param2): `, param1, param2);
    // 1. anything containing fizzbuz value must go first, otherwise the function will stop at fizz or buzz when it sees 15 or 30 etc.  
    // 2. fizz and/or buzz combinations (also with nonfizz and nonbuzz numbers) go next
    // 3. other nonfizz and nonbuzz numbers go as the last condition and are displayed unchanged
    if (((param1 > 100) || (param1 <= 1)) || ((param2 > 100) || (param2 <= 1)))
        return `Output: At least on of your parameters is out of scope. Scope: 1-100.`;
    if (((param1 <= 100) && (param1 >= 1)) && ((param2 <= 100) && (param2 >= 1))) {
        // 1. 
        // fizzbuzz                                        fizzbuzz
        if ((((param1 % 3 === 0) && (param1 % 5 === 0)) && (((param2 % 3 === 0)) && (param2 % 5 === 0)))) { param1 = 'FIZZBUZZ '; param2 = 'FIZZBUZZ '; return `Output: (param1, param2): ${param1} ${param2}` }
        // fizzbuzz                                        fizz
        if (((param1 % 3 === 0) && (param1 % 5 === 0)) && (param2 % 3 === 0)) { param1 = 'fizzbuzz '; param2 = 'fizz '; return `Output: (param1, param2): ${param1} ${param2}` }
        // fizzbuzz                                        buzz 
        if (((param1 % 3 === 0) && (param1 % 5 === 0)) && (param2 % 5 === 0)) { param1 = 'fizzbuzz '; param2 = 'buzz '; return `Output: (param1, param2): ${param1} ${param2}` }
        // fizzbuzz                                        otherNumber
        if (((param1 % 3 === 0) && (param1 % 5 === 0)) && (((param2 % 3 !== 0)) && (param2 % 5 !== 0))) { param1 = 'fizzbuzz '; return `Output: (param1, param2): ${param1} ${param2}` }
        // fizz                    fizzbuzz
        if ((param1 % 3 === 0) && ((param2 % 3 === 0) && (param2 % 5 === 0))) { param1 = 'fizz '; param2 = 'fizzbuzz '; return `Output: (param1, param2): ${param1} ${param2}` }
        // buzz                    fizzbuzz 
        if ((param1 % 5 === 0) && ((param2 % 3 === 0) && (param2 % 5 === 0))) { param1 = 'buzzz '; param2 = 'fizzbuzz '; return `Output: (param1, param2): ${param1} ${param2}` }
        // otherNumber                                       fizzbuz
        if ((((param1 % 3 !== 0)) && (param1 % 5 !== 0)) && ((param2 % 3 === 0) && (param2 % 5 === 0))) { param2 = ' fizzbuzz '; return `Output: (param1, param2): ${param1} ${param2}` }
        // 2. 
        // fizz                      fizz
        if (((param1 % 3 === 0)) && (param2 % 3 === 0)) { param1 = 'fizz '; param2 = 'fizz '; return `Output: (param1, param2): ${param1} ${param2}` }
        // buzz                      buzz
        if (((param1 % 5 === 0)) && (param2 % 5 === 0)) { param1 = 'buzz '; param2 = 'buzz '; return `Output: (param1, param2): ${param1} ${param2}` }
        // fizz                      buzz
        if (((param1 % 3 === 0)) && (param2 % 5 === 0)) { param1 = 'fizz '; param2 = 'buzz '; return `Output: (param1, param2): ${param1} ${param2}` }
        // buzz                      fizz
        if (((param1 % 5 === 0)) && (param2 % 3 === 0)) { param1 = 'buzz '; param2 = 'fizz '; return `Output: (param1, param2): ${param1} ${param2}` }
        // fizz                      otherNumber
        if (((param1 % 3 === 0)) && (((param2 % 3 !== 0)) && (param2 % 5 !== 0))) { param1 = 'fizz '; return `Output: (param1, param2): ${param1} ${param2}` }
        // buzz                      otherNumber
        if (((param1 % 5 === 0)) && (((param2 % 3 !== 0)) && (param2 % 5 !== 0))) { param1 = 'buzz '; return `Output: (param1, param2): ${param1} ${param2}` }
        // otherNumber                                       fizz
        if ((((param1 % 3 !== 0)) && (param1 % 5 !== 0)) && ((param2 % 3 === 0))) { param2 = ' fizz'; return `Output: (param1, param2): ${param1} ${param2}` }
        // otherNumber                                       buzz
        if ((((param1 % 3 !== 0)) && (param1 % 5 !== 0)) && ((param2 % 5 === 0))) { param2 = ' buzz'; return `Output: (param1, param2): ${param1} ${param2}`; }
        // 3.
        // otherNumber  otherNumber
        else
            return `Output: (param1, param2): ${param1} ${param2}`
    }
}
console.log(fizzBuzz(15, 3));   // fizzbuzz     fizz
console.log(fizzBuzz(15, 5));   // fizzbuzz     buzz
console.log(fizzBuzz(15, 19));  // fizzbuzz     otherNumber 
console.log(fizzBuzz(3, 15));   // fizz         fizzbuzz
console.log(fizzBuzz(5, 15));   // buzz         fizzbuzz
console.log(fizzBuzz(19, 15));  // otherNumber  fizzbuzz 
console.log(fizzBuzz(3, 9));    // fizz         fizz
console.log(fizzBuzz(5, 20));   // buzz         buzz
console.log(fizzBuzz(3, 20));   // fizz         buzz
console.log(fizzBuzz(20, 3));   // buzz         fizz 
console.log(fizzBuzz(3, 19));   // fizz         otherNumber
console.log(fizzBuzz(5, 19));   // buzz         otherNumber
console.log(fizzBuzz(19, 3));   // otherNumber  fizz 
console.log(fizzBuzz(19, 5));   // otherNumber  buzz 
console.log(fizzBuzz(19, 23));  // otherNumber  otherNumber
console.log(fizzBuzz(15, 15));  // fizzbuzz     fizzbuzz
console.log(fizzBuzz(15, 60));  // fizzbuzz     fizzbuzz 
console.log(fizzBuzz(150, 600));  // At least on of your parameters is out of scope. Scope: 1-100. 
console.log(fizzBuzz(15, 600));   // At least on of your parameters is out of scope. Scope: 1-100.
console.log(fizzBuzz(150, 60));   // At least on of your parameters is out of scope. Scope: 1-100.


console.log(`\nV.3 --- fizzBuzz(param_1, param_2)`)
function fizzBuzz_v3(param_1, param_2) {
    console.log(` Input: (param_1, param_2): `, param_1, param_2);
    if (((param_1 <= 100) && (param_1 >= 1)) && ((param_2 <= 100) && (param_2 >= 1))) {
        if ((param_1 % 3 === 0) && (param_1 % 5 === 0)) { param_1 = 'fizzbuzz '; }
        if ((param_2 % 3 === 0) && (param_2 % 5 === 0)) { param_2 = 'fizzbuzz '; }
        if (param_1 % 3 === 0) { param_1 = 'fizz '; }
        if (param_2 % 3 === 0) { param_2 = 'fizz '; }
        if (param_1 % 5 === 0) { param_1 = 'buzz '; }
        if (param_2 % 5 === 0) { param_2 = 'buzz '; }
        return `Output: (param_1, param_2): ${param_1} ${param_2}`
    }
    else
        return 'Output: At least on of your parameters is out of scope. Scope: 1-100.'
}
console.log(fizzBuzz_v3(15, 3));   // fizzbuzz     fizz
console.log(fizzBuzz_v3(15, 5));   // fizzbuzz     buzz
console.log(fizzBuzz_v3(15, 19));  // fizzbuzz     otherNumber 
console.log(fizzBuzz_v3(3, 15));   // fizz         fizzbuzz
console.log(fizzBuzz_v3(5, 15));   // buzz         fizzbuzz
console.log(fizzBuzz_v3(19, 15));  // otherNumber  fizzbuzz 
console.log(fizzBuzz_v3(3, 9));    // fizz         fizz
console.log(fizzBuzz_v3(5, 20));   // buzz         buzz
console.log(fizzBuzz_v3(3, 20));   // fizz         buzz
console.log(fizzBuzz_v3(20, 3));   // buzz         fizz 
console.log(fizzBuzz_v3(3, 19));   // fizz         otherNumber
console.log(fizzBuzz_v3(5, 19));   // buzz         otherNumber
console.log(fizzBuzz_v3(19, 3));   // otherNumber  fizz 
console.log(fizzBuzz_v3(19, 5));   // otherNumber  buzz 
console.log(fizzBuzz_v3(19, 23));  // otherNumber  otherNumber
console.log(fizzBuzz_v3(15, 15));  // fizzbuzz     fizzbuzz
console.log(fizzBuzz_v3(15, 60));  // fizzbuzz     fizzbuzz 
console.log(fizzBuzz_v3(150, 600));  // At least on of your parameters is out of scope. Scope: 1-100. 
console.log(fizzBuzz_v3(15, 600));   // At least on of your parameters is out of scope. Scope: 1-100.
console.log(fizzBuzz_v3(150, 60));   // At least on of your parameters is out of scope. Scope: 1-100.

console.log(`My brain has just exploded. KABOOM. Thank you. <3 `)



console.log(`\n3. Build a sentiment analyzer \n `);
// A sentiment analyzer is some functionality that figures out how positive/negative a sentence is.
// `I am mega super awesome happy" Should have a high score; "I hate doing boring stuff" should have a low score.
// Create a function that takes a string as a parameter. 
// calling the function will return an object with score, positiveWords and negativeWords. 
// You decide how the score should be implemented and what words are negative and positive.
// Here is an example of using the function: 
// const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');
// console.log(sentimentScoreObject); 
const sentiment1 = 'I am mega super boring stupid awesome happy';
const sentiment2 = 'I hate doing stupid boring stuff';
const sentiment3 = 'I hate doing stupid boring terrible nested loop stuff aaaaaaaargh';
const sentiment4 = `super happy awesome mega mega mega looooooooooop`;
const sentiment5 = `I hate doing loop loop loop loop loop loop loop loop loop loop loop looooooooooop aaaaaaaargh`;

function getSentimentScore(aSentimentString) {
    console.log(`aSentimentString:`, aSentimentString);
    const wordsDefined_positive = ['awesome', 'happy', 'super', 'mega'];
    const wordsDefined_neutral = ['I', 'am', 'doing'];
    const wordsDefined_negative = ['hate', 'boring', 'stupid', 'terrible', 'nested', 'loop', 'looooooooooop', 'aaaaaaaargh'];
    let this_sentimentScoreObject = {
        positivity_score: 0,
        positiveWords: [],
        negativeWords: [],
        neutralWords: []
    }
    const aSentimentString_split = aSentimentString.split(" ");
    // console.log(`aSentimentString_split`, aSentimentString_split);
    for (let i_str = 0; i_str < aSentimentString_split.length; i_str++) {
        // console.log(aSentimentString_split[i_str]);
        for (let i_pos = 0; i_pos < wordsDefined_positive.length; i_pos++) {
            // console.log(wordsDefined_positive[i_pos])
            if ((aSentimentString_split[i_str]) === (wordsDefined_positive[i_pos])) {
                this_sentimentScoreObject.positiveWords.push(aSentimentString_split[i_str])
            }
        }
        for (let i_neu = 0; i_neu < wordsDefined_neutral.length; i_neu++) {
            // console.log(wordsDefined_neutral[i_neu])
            if ((aSentimentString_split[i_str]) === (wordsDefined_neutral[i_neu])) {
                this_sentimentScoreObject.neutralWords.push(aSentimentString_split[i_str])
            }
        }
        for (let i_neg = 0; i_neg < wordsDefined_negative.length; i_neg++) {
            // console.log(wordsDefined_negative[i_neg])
            if ((aSentimentString_split[i_str]) === (wordsDefined_negative[i_neg])) {
                this_sentimentScoreObject.negativeWords.push(aSentimentString_split[i_str])
            }
        }
    }
    (this_sentimentScoreObject.positivity_score) =
        ((this_sentimentScoreObject.positiveWords.length) + (this_sentimentScoreObject.neutralWords.length)
            - (this_sentimentScoreObject.negativeWords.length))

    return this_sentimentScoreObject
}

const sentimentScoreObject1 = getSentimentScore(sentiment1); console.log(sentimentScoreObject1);
const sentimentScoreObject2 = getSentimentScore(sentiment2); console.log(sentimentScoreObject2);
const sentimentScoreObject3 = getSentimentScore(sentiment3); console.log(sentimentScoreObject3);
const sentimentScoreObject4 = getSentimentScore(sentiment4); console.log(sentimentScoreObject4);
const sentimentScoreObject5 = getSentimentScore(sentiment5); console.log(sentimentScoreObject5);



console.log(`\n4. Credit card number formatter \n `);
/*Create a function that takes a number as parameter.The function should return the following object:
{ original: 123456789, formatted: "1234 5678 9",}
What should happen if the function is called with an argument that is not a number ? */


function formatCreditCardNumber(numberParam) {

    if ((typeof (numberParam)) === (typeof (666))) {

        console.log(`Ave Satan. You have typed this number:`, numberParam);

        const numberParam_string = numberParam.toString();
        console.log(`God loves you. Your number is now a string:`, numberParam_string);

        numberParam_string.match(/.{1,4}/g);  // console.log(numberParam.match(/.{1,4}/g).join(' '));  

        const beforeAfter = {
            original: 0,
            formatted: ''
        }
        // console.log(beforeAfter);

        beforeAfter.original = numberParam;
        beforeAfter.formatted = `${(numberParam_string.match(/.{1,4}/g).join(' '))}`;
        // console.log(beforeAfter);
        // console.log(beforeAfter.formatted.length); // ---> 19 === 3 spaces added

        return beforeAfter;

    }

    else if ((typeof (numberParam)) !== (typeof (666)))
        console.log(`This >>`, numberParam, `<< is not a number! I want a number!`)
    return NaN;  // or false or whatever

}

const formattedCreditCardObject1 = formatCreditCardNumber(1234999988887666);
console.log(formattedCreditCardObject1);

const formattedCreditCardObject2 = formatCreditCardNumber('I hate/love JS');
console.log(formattedCreditCardObject2);




console.log(`\n5. Character frequencies \n `);

console.log(`\n6. Palindromic substring \n `);

console.log(`\n7. Credit card info \n `);

console.log(`\n8. Tic Tac Toe \n `);



const oldArray = ['Sam', 'Andreas', 'Eva', 'Chris', 'Sara']

const startsWithoutVowel = name => {
    const firstLetter = name[0].toLowerCase()
    const vowels = ['a', 'e', 'i', 'u', 'o']
    // console.log(vowels.indexOf(firstLetter)) // -1   0   1   -1     -1
    return vowels.indexOf(firstLetter) === -1   // Sam          Chris  Sara
}

// const newArray = []
// for(let i = 0; i < oldArray.length; i++){
// 	// get current item
// 	const currentItem = oldArray[i]; // Sam
// 	// ask question
// 	//                  s
// 	const firstLetter = currentItem[0].toLowerCase()
// 	const vowels = ['a','e','i','u','o']
// 	const question = vowels.indexOf(firstLetter) === -1
// 	// new array
// 	if(question){
// 		newArray.push(currentItem);
// 	}
// }

const newArray = oldArray.filter(startsWithoutVowel)

// me: (all in one)
const newArray_M = oldArray.filter((aName) => {
    aName
    const firstLetter_M = aName[0].toLowerCase()
    const vowels_M = ['a', 'e', 'i', 'u', 'o']
    return vowels_M.indexOf(firstLetter_M) === -1
})

console.log("Before: ")
console.log(oldArray);

console.log("After: ")
console.log(newArray);
console.log(newArray_M);
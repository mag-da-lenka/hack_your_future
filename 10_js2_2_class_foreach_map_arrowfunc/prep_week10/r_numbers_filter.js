const oldArray = [1, 2, 3, 4, 5];

const smallerThanThree = n => n < 3

// const newArray = []
// for(let i = 0; i < oldArray.length; i++){
// 	// get current item
// 	const currentItem = oldArray[i];
// 	// ask question
// 	const question = smallerThanThree(currentItem)
// 	// new array
// 	if(question){
// 		newArray.push(currentItem);
// 	}
// }

const newArray = oldArray.filter(smallerThanThree)

// me: (all in one) 
const newArray_M = oldArray.filter((aNumber) => aNumber < 3)


console.log("Before: ")
console.log(oldArray);

console.log("After: ")
console.log(newArray);
console.log(newArray_M);
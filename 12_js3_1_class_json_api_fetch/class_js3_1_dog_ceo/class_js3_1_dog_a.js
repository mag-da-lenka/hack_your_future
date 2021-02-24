// Dog fan website

console.log(`\n \n dog ceo \n `)

/*
Lets create a site for dog lovers using this API: 
https://dog.ceo/api/breeds/image/random
- done: a) Get a random dog image and display it in the browser
- done: b) Get a new image every 2 sec. (see v1 of the function) 

... to be continues in a different script --->
- c) Get the list of all breeds from 
https://dog.ceo/api/breeds/list/all
- d) Display a random image of a breed from the list 
https://dog.ceo/api/breed/[BREEDNAME]/images/random 
- e) Display the name of the breed under the image
*/


// console test 

// function fetchData() {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(data => {
//       console.log(data)
//       // no rendering yet
//     })
// }

// const button = document
//   .getElementById("fetch-data")
//   .addEventListener('click', fetchData)






function fetchData() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      renderData(data)
    })
}

function renderData(data) {

  const root = document.getElementById("root")

  // v1: each image will be replaced by a new one every 2 secs
  // const img = `<img src="${data.message}" />`
  // root.innerHTML = img

  // v2: immages will be appended
  const img = document.createElement("img")
  img.setAttribute("src", data.message)
  root.appendChild(img)

}

// setInterval(fetchData, 500) // for v1 starting automatically

const button = document  // for v2 (with a data-fetching button)
  .getElementById("fetch-data")
  .addEventListener('click', fetchData)
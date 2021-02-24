// Dog fan website

console.log(`\n \n dog ceo \n `)

// console test 

// function fetchData() {
//   fetch("https://dog.ceo/api/breeds/list/all")
//     .then(response => response.json())
//     .then(data => {
//       console.log((data.message))
//       console.log(Object.keys(data.message)) // google <3
//       // console.log(JSON.stringify(data))
//       // console.log(JSON.stringify(data))
//       // no rendering yet
//     })
// }

// const button = document
//   .getElementById("fetch-data")
//   .addEventListener('click', fetchData)




let allBreedsArr;
let allBreedsStr;
let aSingleBreed;

function fetchData() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {
      // console.log(Object.keys(data.message))
      allBreedsArr = Object.keys(data.message);
      console.log(allBreedsArr)
      // console.log(typeof allBreedsArr)
      allBreedsStr = allBreedsArr.join(' ')
      // console.log(allBreedsStr);
      aSingleBreed = allBreedsArr.forEach(aBreed => {
        // console.log(aBreed)
        (aBreed)
      });
      // console.log(aSingleBreed);
      renderData(data)
    })
}

function renderData(data) {

  const ulElement = document.getElementById("breed-list");

  for (let i = 0; i < allBreedsArr.length; i++) {
    console.log(allBreedsArr[i]);
    const liElement = document.createElement("li");
    liElement.innerHTML = allBreedsArr[i];
    ulElement.appendChild(liElement)
  }

}

const button = document
  .getElementById("fetch-data")
  .addEventListener('click', fetchData)
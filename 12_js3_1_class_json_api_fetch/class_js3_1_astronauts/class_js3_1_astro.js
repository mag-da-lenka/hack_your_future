
// this is JS3-1 week 12 //2019 12 22   





console.log(`\n \n Astronauts in space \n `)                     // ---> https://jsonlint.com/ JSON VALIDATOR



// 01:32:05 after explaining apI on cardAPI, we're writing a callback function: (...) 
// 01:40:40 ??? ASTRONAUTS - an exercise from the lesson plan  


// ----> console test only
fetch('http://api.open-notify.org/astros.json')
  .then(response => response.json())
  .then(data => {
    console.log('DATA:', data)
    console.log('The astronauts in space are:', data.people)
    console.log('There are', data.people.length, 'of them.')
  })




//  HTML  

function fetchData() {
  return fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(renderOutput)
}

function renderOutput(data) {
  // grab the target element
  const root = document.getElementById('root')
  // put each astronaut in a li element
  const outputPeople = data.people.map((person) => {
    return `<li>${person.name}</li>`
  })
  // put the outputPeople variable in a ul element
  const output = `
    <p>There are ${data.number} astronauts in space now:</p>
    <ul>
      ${outputPeople.join('')}
    </ul>
  `
  // put it all in the target element
  root.innerHTML = output
}

// voilaaa / meow /squeeeak
document
  .getElementById('fetch-data')
  .addEventListener('click', fetchData)

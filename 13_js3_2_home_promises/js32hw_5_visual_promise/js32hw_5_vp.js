console.log(`\nhomework js3-2 ex.5 Visual promise by sq.mag\n `)
console.log(`\nEXERCISE ------- 5 \n `)



// Uncomment ONE function at a time. 
// Always RELOAD the page before calling a function 
// while all the functions are uncommented.

// console.log(`translateOneByOne_async(): `, translateOneByOne_async())
// console.log(`translateAllAtOnce_async(): `, translateAllAtOnce_async())
// console.log(`translateOneByOne(): `, translateOneByOne())
// console.log(`translateAllAtOnce(): `, translateAllAtOnce())


async function translateOneByOne_async() {
  try {
    await moveElement(document    // 1. move the red one
      .querySelector(`ul.marks li:nth-child(1)`), { x: 20, y: 300 })
      .then(() => { console.log(`Red element has hit the target.`); });
    await moveElement(document    // 2. move the blue one
      .querySelector(`ul.marks li:nth-child(2)`), { x: 400, y: 300 })
      .then(() => { console.log(`Blue element has hit the target.`); });
    await moveElement(document    // 3. move the green one
      .querySelector(`ul.marks li:nth-child(3)`), { x: 400, y: 20 })
      .then(() => { console.log(`Green element has hit the target.`); });
  } catch (err) {
    console.log(`ERROR`);
  }
}

async function translateAllAtOnce_async() {
  try {
    await Promise.all(
      [moveElement(document    // 1. move the red one
        .querySelector(`ul.marks li:nth-child(1)`), { x: 20, y: 300 })
        .then(() => { console.log(`Red.`); }),
      moveElement(document    // 2. move the blue one
        .querySelector(`ul.marks li:nth-child(2)`), { x: 400, y: 300 })
        .then(() => { console.log(`Blue.`); }),
      moveElement(document    // 3. move the green one
        .querySelector('ul.marks li:nth-child(3)'), { x: 400, y: 20 })
        .then(() => { console.log(`Green.`); })
      ]
    );
    console.log(`All the elements have hit the target at the same time.`);
  } catch (err) {
    console.log(`ERROR`);
  }
}


function translateOneByOne() {

  // 1. move the red one
  return moveElement(document
    .querySelector(`ul.marks li:nth-child(1)`), { x: 20, y: 300 })

    .then(() => {
      console.log(`Red element has hit the target.`)

      // 2. move the green one
      return moveElement(document
        .querySelector(`ul.marks li:nth-child(2)`), { x: 400, y: 300 });
    })

    .then(() => {
      console.log(`Green element has hit the target.`)

      // 3. move the blue one
      return moveElement(document
        .querySelector(`ul.marks li:nth-child(3)`), { x: 400, y: 20 });
    })

    .then(() => { console.log(`Blue element has hit the target.`); })


    .catch(() => console.log(`ERROR`));

};


function translateAllAtOnce() {

  const move_1 = moveElement(document
    .querySelector(`ul.marks li:nth-child(1)`), { x: 20, y: 300 });
  console.log(`Red.`)

  const move_2 = moveElement(document
    .querySelector(`ul.marks li:nth-child(2)`), { x: 400, y: 300 });
  console.log(`Blue.`)

  const move_3 = moveElement(document
    .querySelector(`ul.marks li:nth-child(3)`), { x: 400, y: 20 });
  console.log(`Green.`)

  return Promise
    .all([move_1, move_2, move_3])
    .then(() => console.log(`All the elements have hit the target at the same time.`))
    .catch(() => console.log(`ERROR`))

}
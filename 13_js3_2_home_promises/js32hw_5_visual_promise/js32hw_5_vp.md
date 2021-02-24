## Visual promise

This task is about visually understanding the difference between Promise.all and calling a promise one at a time.

If you go into the [promise-visual homework folder](homework/promise-visual) there is some html, css and some js. If you clone down the javascript repo, then you can simply copy the files into your hyf-homework js3 week 2 folder. Dont modify move-element.js, only work in main.js!

There is a function available to you called `moveElement`. Calling that function moves an element to a new position and returns a `Promise`. `moveElement` takes a `DOM element` and an `object` with `x` and `y` properties specifying how much to move the element in the x/y directions. _Note that because the elements start with a random position, it is up to you to calculate how much each element needs to be moved in x/y directions._
It then returns a `Promise` that resolves after the `DOM element` has been moved.

```js
// This code will move the li to the position 100, 100. Calling moveElement will return a promise that resolves after the li element has been moved.
moveElement(document.querySelector("li"), { x: 100, y: 100 }).then(() => {
  console.log("Element has been moved");
});
```

Your task is to create two functions.

- `translateOneByOne` - Should translate the circles one at a time from their **random start position** to their **target** see the target positions below. Log something out **after each element has been moved**
- `translateAllAtOnce` - Should translate all the circles at the same time from their **random start position** to their **target**. Log out something **after all elements have been moved**

Test that the functions works as intended before submitting homework. You decide if you want to do it the promise way or the async/await way

### Target positions:

```
Red circle target: x: 20px, y: 300px;
Blue circle target: x: 400px, y: 300px;
Green circle target: x: 400px, y: 20px;
```

**One by one**

<img alt="One by one" src="assets/one-by-one.gif" width="300" />

**All at one**

<img alt="All at one" src="assets/all-at-once.gif" width="300" />
## Shopping cart using Classes

Let's get a bit more into creating classes!

```js
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    // Implement functionality here
  }

  removeProduct(product) {
    // Implement functionality here
  }

  searchProduct(productName) {
    // Implement functionality here
  }

  getTotal() {
    // Implement functionality here
  }

  renderProducts() {
    // Implement functionality here
  }

  getUser() {
    // Implement functionality here
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
shoppingCart.addProduct(flatscreen);
```

So we have two classes. `Product` represents products. `ShoppingCart` represents a shopping cart.

### Part 1

Create the functionality for the `ShoppingCart` class.

- `addProduct` should add a product to the products array.
- `removeProduct` should remove a product from the products array.
- `getTotal` should get the total price of the products in the `shoppingcart`.
- `renderProducts` should render the products to html. You decide what to show and how.
- `searchProduct` should return an array of product that match the `productName` parameter
- `getUser` should return a promise with the data from this api: https://jsonplaceholder.typicode.com/users/1

### Part 2

Try and create some products and call the `addProduct` and the `removeProduct` functions to see if they work.

Call the `getUser` function to get a user. When the user has been fetched. Render the products using the `renderProducts` method. Also render the username and the total price of the products in the `shoppingcart`.

_Optional and a little tricky!_ Create a **searchbar where a user can search for a product.** Matching product are shown as an autocomplete. **Clicking a product** in the autocomplete **opens a modal** with product information.

### Part 3

The `Product` class should get a method called `convertToCurrency`. The function should have `currency` as a parameter. Depending on the **provided currency return the correct price** for the product. Add 3 or more curriencies. Or use an api for getting the price dependent on a currency that `convertToCurrency` uses.

```js
// Assuming dkr as default currency
const plant = new Product("plant", 50);
console.log(plant.convertToCurrency("dollars")); // 7.5
```

### Part 4, optional

Be creative! Create some cool/weird/quirky functionality of either the `Product` class or the `ShoppingCart` class.

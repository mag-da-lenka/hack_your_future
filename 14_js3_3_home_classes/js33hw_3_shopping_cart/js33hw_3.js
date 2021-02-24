console.log("\njs33hw_3_shopping_cart\n ")
// https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript3/week3/homework.md#shopping-cart-using-classes 

// const exchRateApiKey = '53f7b37fb3d5864e7d30d8e8'; // on gmail
const exchRateApiKey = '224ca481cfe07016c3c90c2d';    // on Federacja

// https://www.exchangerate-api.com/docs/standard-requests
// https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD 
// https://v6.exchangerate-api.com/v6/${exchRateApiKey}/latest/DKK
// https://v6.exchangerate-api.com/v6/53f7b37fb3d5864e7d30d8e8/latest/DKK

const main_El = document.querySelector('main')
main_El.innerHTML = `<h1> JS_3.3 ex.3 shopping cart </h1> `
document.body.appendChild(main_El)


class Product {

    constructor(name, price) {
        this.name = name;
        this.price = price; // default currency === DKK
    }

    convertToCurrency(currency, product) {

        fetch(`https://v6.exchangerate-api.com/v6/${exchRateApiKey}/latest/DKK`)
            .then(response => response.json())
            .then(currencyData => {

                const exchangeRate =
                    (currencyData.conversion_rates[currency.toUpperCase()])

                const calculatedPrice = this.price * exchangeRate;

                console.log(`\n${product}:`,
                    `${calculatedPrice.toFixed(2)}`,
                    `${currency.toUpperCase()}`,
                    `\nexchange rate:`, exchangeRate);

                return calculatedPrice.toFixed(2)

            })
        //
    }
}



class ShoppingCart {

    constructor() {
        this.products = [];
        console.log(`\nthis.products: `, this.products);
    }

    addProduct(productName) {
        this.products.push(productName);
        // console.log(`\naddProduct -> this.products: `, this.products);
    }

    removeProduct(productName) {
        this.products = this.products
            .filter(productToRemove =>
                productToRemove.name !== productName.name);
        // console.log(`\nremoveProduct -> this.products: `, this.products)
    }

    searchProduct(productName) {
        const searchedProduct = this.products
            .filter(searchedProduct =>
                searchedProduct.name === productName);
        console.log(`\nsearched product:`, searchedProduct);
    }

    getTotal() {
        this.total = this.products
            .reduce((acc, product) => acc + product.price, 0);
        console.log(`\ngetTotal -> this.total: `, this.total, `DKK.`);
    }

    getUser() {

        const generateRandomNumber = (min, max) =>
            (Math.random() * (max - min) + min).toFixed();

        let userId = generateRandomNumber(1, 10)

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(userData => {
                // console.log(`\nuserData: `, userData);
                this.user = userData;
                if (this.user) {

                    const userName = document.createElement('p');
                    userName.innerHTML =
                        `name: ${userData.name} <br> username: ${userData.username}`;
                    main_El.appendChild(userName);
                }
                this.renderProducts();
            })
        //
    }

    renderProducts() {

        this.products.forEach(product => {

            const product_ul_El = document.createElement('ul');
            product_ul_El.innerHTML = `
            <li class="product_name">${product.name}</li>
            <li>DKK ${product.price} </li>`;
            main_El.appendChild(product_ul_El);

        });

        const totalPrice_El = document.createElement('p');
        totalPrice_El.innerHTML = `<b>Total price</b>: 
        <span class="total_price"> ${this.total} DKK </span>`
        main_El.appendChild(totalPrice_El);
    }

}


const squirrelToys = new Product('squirrel toys', 250.00);
const hazelnuts = new Product('hazelnuts', 10.00);
const walnuts = new Product('walnuts', 15.00);
const gingerHenna = new Product('ginger henna', 70.01);
const blackHenna = new Product('black henna', 50.00);
const sunflowerSeeds = new Product('sunflower seeds', 50.00);

const shoppingCart = new ShoppingCart();
shoppingCart.addProduct(squirrelToys);
shoppingCart.addProduct(gingerHenna);
shoppingCart.addProduct(hazelnuts);
shoppingCart.addProduct(sunflowerSeeds);
// add && remove walnuts
shoppingCart.addProduct(walnuts);
shoppingCart.removeProduct(walnuts);
console.log(`\nshoppingCart: `, shoppingCart); // no walnuts: 

shoppingCart.searchProduct('hazelnuts'); // logs
shoppingCart.getTotal(); // 380.01
shoppingCart.getUser();  // random

hazelnuts.convertToCurrency('USD', 'hazelnuts');      //  1.63
hazelnuts.convertToCurrency('pln', 'hazelnuts');      //  6.09 
hazelnuts.convertToCurrency('ils', 'hazelnuts');      //  5.35
gingerHenna.convertToCurrency('plN', 'ginger henna'); // 42.62
gingerHenna.convertToCurrency('usD', 'ginger henna'); // 11.43

// try the acronims below: 
const conversion_rates = {
    "DKK": 1,
    "AED": 0.5995,
    "AFN": 12.7219,
    "ALL": 16.5349,
    "AMD": 84.5935,
    "ANG": 0.2922,
    "AOA": 106.3965,
    "ARS": 14.0745,
    "AUD": 0.2107,
    "AWG": 0.2922,
    "AZN": 0.2765,
    "BAM": 0.2622,
    "BBD": 0.3265,
    "BDT": 13.7881,
    "BGN": 0.2622,
    "BHD": 0.06138,
    "BIF": 315.7999,
    "BMD": 0.1632,
    "BND": 0.2162,
    "BOB": 1.1182,
    "BRL": 0.8774,
    "BSD": 0.1632,
    "BTN": 11.9173,
    "BWP": 1.7923,
    "BYN": 0.4149,
    "BZD": 0.3265,
    "CAD": 0.2066,
    "CDF": 323.4857,
    "CHF": 0.1444,
    "CLP": 116.9917,
    "CNY": 1.0555,
    "COP": 558.9469,
    "CRC": 99.6898,
    "CUC": 0.1632,
    "CUP": 4.0808,
    "CVE": 14.7801,
    "CZK": 3.5004,
    "DJF": 29.0100,
    "DOP": 9.4957,
    "DZD": 21.6195,
    "EGP": 2.5601,
    "ERN": 2.4485,
    "ETB": 6.4043,
    "EUR": 0.1340,
    "FJD": 0.3313,
    "FKP": 0.1192,
    "FOK": 1.0000,
    "GBP": 0.1192,
    "GEL": 0.5385,
    "GGP": 0.1192,
    "GHS": 0.9503,
    "GIP": 0.1192,
    "GMD": 8.5328,
    "GNF": 1680.7000,
    "GTQ": 1.2655,
    "GYD": 34.7873,
    "HKD": 1.2644,
    "HNL": 3.9260,
    "HRK": 1.0099,
    "HTG": 11.9603,
    "HUF": 47.9841,
    "IDR": 2292.2969,
    "ILS": 0.5347,
    "IMP": 0.1192,
    "INR": 11.8920,
    "IQD": 238.9715,
    "IRR": 6840.8255,
    "ISK": 21.0339,
    "JMD": 23.6246,
    "JOD": 0.1157,
    "JPY": 16.9073,
    "KES": 17.8837,
    "KGS": 13.7105,
    "KHR": 663.8674,
    "KID": 0.2113,
    "KMF": 65.9441,
    "KRW": 179.8527,
    "KWD": 0.04891,
    "KYD": 0.1360,
    "KZT": 68.2769,
    "LAK": 1517.3889,
    "LBP": 246.0746,
    "LKR": 32.0382,
    "LRD": 27.5842,
    "LSL": 2.4581,
    "LYD": 0.7304,
    "MAD": 1.4558,
    "MDL": 2.8387,
    "MGA": 613.1093,
    "MKD": 8.2603,
    "MMK": 216.6417,
    "MNT": 467.1471,
    "MOP": 1.3042,
    "MRU": 5.9755,
    "MUR": 6.4407,
    "MVR": 2.5050,
    "MWK": 125.9552,
    "MXN": 3.2478,
    "MYR": 0.6571,
    "MZN": 12.1614,
    "NAD": 2.4581,
    "NGN": 65.2001,
    "NIO": 5.6724,
    "NOK": 1.3803,
    "NPR": 19.0676,
    "NZD": 0.2270,
    "OMR": 0.06276,
    "PAB": 0.1632,
    "PEN": 0.5906,
    "PGK": 0.5711,
    "PHP": 7.8320,
    "PKR": 26.1010,
    "PLN": 0.6087,
    "PYG": 1143.6576,
    "QAR": 0.5942,
    "RON": 0.6526,
    "RSD": 15.7609,
    "RUB": 12.1489,
    "RWF": 161.5707,
    "SAR": 0.6121,
    "SBD": 1.2986,
    "SCR": 3.4468,
    "SDG": 9.0251,
    "SEK": 1.3520,
    "SGD": 0.2159,
    "SHP": 0.1192,
    "SLL": 1662.3818,
    "SOS": 94.6763,
    "SRD": 2.3162,
    "SSP": 28.6865,
    "STN": 3.2840,
    "SYP": 83.6278,
    "SZL": 2.4581,
    "THB": 4.8871,
    "TJS": 1.8422,
    "TMT": 0.5711,
    "TND": 0.4383,
    "TOP": 0.3704,
    "TRY": 1.2074,
    "TTD": 1.1198,
    "TVD": 0.2113,
    "TWD": 4.5537,
    "TZS": 377.6765,
    "UAH": 4.5895,
    "UGX": 600.1444,
    "USD": 0.1632,
    "UYU": 6.8697,
    "UZS": 1726.3989,
    "VES": 283436.2352,
    "VND": 3757.8107,
    "VUV": 17.6807,
    "WST": 0.4084,
    "XAF": 87.9254,
    "XCD": 0.4407,
    "XDR": 0.1130,
    "XOF": 87.9254,
    "XPF": 15.9954,
    "YER": 40.7521,
    "ZAR": 2.4500,
    "ZMW": 3.4746
}
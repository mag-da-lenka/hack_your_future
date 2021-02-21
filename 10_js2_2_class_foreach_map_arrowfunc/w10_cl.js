console.log(`Hello Squirrels! /parallel world connection test: class ex w10 / js2-2 \n `);



const listings = [

    {
        "type": "Shed",
        "facilities": [
            "Parkering"
        ],
        "price": 1311,
        "hasGarden": true,
        "size": 383
    },
    {
        "type": "House",
        "facilities": [
            "Elevator",
            "Parkering"
        ],
        "price": 752,
        "hasGarden": true,
        "size": 627
    },
    {
        "type": "Shed",
        "facilities": [
            "Have"
        ],
        "price": 2564,
        "hasGarden": false,
        "size": 349
    },
    {
        "type": "Shed",
        "facilities": [
            "Parkering",
            "Altan"
        ],
        "price": 2309,
        "hasGarden": true,
        "size": 687
    },
    {
        "type": "Shed",
        "facilities": [
            "Have"
        ],
        "price": 1269,
        "hasGarden": false,
        "size": 76
    },
    {
        "type": "Apartment",
        "facilities": [
            "Elevator",
            "Have"
        ],
        "price": 9032,
        "hasGarden": true,
        "size": 25
    },
    {
        "type": "Farm",
        "facilities": [
            "Altan",
            "Parkering"
        ],
        "price": 8266,
        "hasGarden": true,
        "size": 697
    },
    {
        "type": "House",
        "facilities": [
            "Husdyr",
            "Elevator"
        ],
        "price": 8601,
        "hasGarden": true,
        "size": 573
    },
    {
        "type": "House",
        "facilities": [
            "Husdyr"
        ],
        "price": 3041,
        "hasGarden": true,
        "size": 872
    },
    {
        "type": "House",
        "facilities": [
            "Parkering"
        ],
        "price": 8233,
        "hasGarden": true,
        "size": 781
    },
    {
        "type": "Shed",
        "facilities": [
            "Altan",
            "Husdyr"
        ],
        "price": 9842,
        "hasGarden": false,
        "size": 280
    },
    {
        "type": "House",
        "facilities": [
            "Have",
            "Altan"
        ],
        "price": 5387,
        "hasGarden": false,
        "size": 338
    },
    {
        "type": "Apartment",
        "facilities": [
            "Have",
            "Husdyr"
        ],
        "price": 4233,
        "hasGarden": false,
        "size": 252
    },
    {
        "type": "Farm",
        "facilities": [
            "Altan",
            "Have",
            "Parkering"
        ],
        "price": 8477,
        "hasGarden": true,
        "size": 917
    },
    {
        "type": "Farm",
        "facilities": [
            "Have",
            "Altan",
            "Husdyr",
            "Elevator"
        ],
        "price": 6904,
        "hasGarden": true,
        "size": 339
    },
    {
        "type": "Farm",
        "facilities": [
            "Husdyr",
            "Have"
        ],
        "price": 5601,
        "hasGarden": true,
        "size": 474
    },
    {
        "type": "Apartment",
        "facilities": [
            "Altan",
            "Husdyr"
        ],
        "price": 790,
        "hasGarden": true,
        "size": 896
    },
    {
        "type": "Farm",
        "facilities": [
            "Husdyr",
            "Altan"
        ],
        "price": 543,
        "hasGarden": false,
        "size": 984
    },
    {
        "type": "Dorm",
        "facilities": [
            "Husdyr",
            "Elevator"
        ],
        "price": 7382,
        "hasGarden": false,
        "size": 95
    },
    {
        "type": "Farm",
        "facilities": [
            "Elevator",
            "Altan",
            "Husdyr"
        ],
        "price": 9280,
        "hasGarden": false,
        "size": 597
    }

]
console.log(`listings array:`, listings)



console.log(`\nforEach: 
create 37 listings and log out every listings size\n `);

listings
    .forEach(function (aListing) {
        console.log("a) size via forEach: ", aListing.size);
    });

for (let i = 0; i < listings.length; i++) {
    console.log("b) size via forLoop: ", listings[i].size);
}  //  so the for Loop is completely unnecessary now 




console.log(`\nmap: 
create an array that contains all the 37 listing prices\n `);

const pricingList = listings
    .map(function (aListing) {
        return aListing.price;
    });
console.log(pricingList);






console.log(`\nfiter + map:\n `);

const users = [
    { name: "1Zenek1", freinds: 200 },
    { name: "2Bronek2", freinds: 150 },
    { name: "3Zdzisława3", freinds: 350 },
    { name: "4Wodzisława4", freinds: 30 }
];
console.log(`users:\n`, users);


const famousNameUsers = users
    .filter(function (aUser) {                    // the parameter can be really called whatever I want
        if (aUser.freinds >= 200) return true;    // ---> so this picks only the obects with name 1 and 3 and returns them (ie.: full objects) --->    (2) [{…}, {…}]
        else return false;                        // ---> this is simply not shown because it has been filtered out boolean style :> 
    })
    .map(function (aUser) {
        return aUser.name;                        // ---> this will return only the values of the filtered ---> (2) ["1Zenek1", "3Zdzisława3"]

    });                                            // ---> don't mis this semicolon! 
console.log(`famousNameUsers via normal function:\n`, famousNameUsers);

/* alternative syntax 
.filter(function (aUser) {
    if (aUser.freinds >= 200) return true;
    else return false;
    return aUser.freinds >= 200;
})
.map(function (aUser) {
    return aUser.name;
})  */



console.log(`\n=> arrow function \n `);

const famousNameUsersARROW = users
    .filter(aUser => aUser.freinds >= 200)
    .map(aUser => aUser.name);
console.log(`famousNameUsers via arrow function:\n`, famousNameUsers);








console.log(`\nNormal function vs. arrow )see js file)\n `)

function doMath(a) {
    return a * a + 5;
}
// console.log(doMath(7));       // ---> 54 

const doSomething1 = a => {
    // console.log(a);
    return a * a + 5;
};
// console.log(doSomething1(7)); // ---> 54


console.log("hello I'm up, that was at the beginning of class: (activate us) ");

array = [1, 2, 3];
array
    .forEach(function (item) {
        // console.log(item);  // ----> 1 2 3
    });

for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);   // ----> 1 2 3
}


function custmForEach(wowList, func) {
    for (let i = 0; i < wowList.length; i++) {
        func(wowList[i]);
    }
}

// const array2 = ["hello", "test"];
// custmForEach(array2, function (item) {
//     console.log(item);
// });




a = [1, 2, 3];
const result = a.map(function (x) {
    return x * x;
});
//console.log(a);
//console.log(result);


function customMap(array, func) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const result = func(array[i]);
        newArray.push(result);
    }
    return newArray;
}

const mapResult = customMap([4, 2], function (x) {
    return x * x;
});
// console.log(mapResult);



// const doSomething2 = param1 => {
//     // console.log(param1);
//     return param1 * param1 + 5;
// };
// console.log(doSomething2(7));

const circleArea1 = r => {
    return 2 * Math.PI * r;
};
// console.log(circleArea1(2));
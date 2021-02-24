console.log(`\nhomework js3-2 ex.3 Rewrite time by sq.mag\n `)


/* Rewrite time
Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises.
The getCurrentPosition function is probably going to throw an error, but that is fine.
As long as you can use it as a promise.

Example of usage

setTimeoutPromise(3000).then(() => {
    console.log("Called after 3 seconds");
});

getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });

*/


setTimeout(function () { console.log(`\nEXERCISE ------- 3 \n `) }, 50)



const setTimeoutPromise = (delayTime) => {

    const mySetTimeoutPromise = new Promise((resolve, reject) => {

        setTimeout(() => {
            // console.log(`ex.3: I'm a resolve string after ${delayTime} seconds.`)
            resolve(`ex.3: I'm a resolve string after ${delayTime} seconds.`)
        }, (delayTime * 1000))

        setTimeout(() => {
            // console.log(`ex.3: I'm a reject string after ${delayTime} seconds.`)
            reject(`ex.3: I'm a reject string after ${delayTime} seconds.`)
        }, (delayTime * 1000))

    })


    return mySetTimeoutPromise

        .then((data_success) => {

            navigator.geolocation.getCurrentPosition((data_position) => {

                // this will log without event listener ofc unless I move it ... ----->
                const longitude = data_position.coords.longitude.toFixed(2)
                const latitude = data_position.coords.latitude.toFixed(2)
                console.log(` Latitude: `, latitude, `\nLongitude: `, longitude)

                // event listener, bc why not :P
                const locationButton = document.getElementById('location-btn')
                locationButton.addEventListener('click', () => {

                    // -----> ... here

                    const latStringElement = document.getElementById('lat-string');
                    const lonStringElement = document.getElementById('lon-string');

                    latStringElement.innerHTML = `Latitude  : ${data_position.coords.latitude.toFixed(2)}`
                    lonStringElement.innerHTML = `Longitude : ${data_position.coords.longitude.toFixed(2)}`;

                    console.log(data_success)
                    return (data_success, latitude, longitude)

                });

            });

        }) // no semicolon heeeeere! chaining going on :>

        .catch((data_error) => {
            console.log(`Error: `, data_error)
        })

    //

}

console.log(setTimeoutPromise(2));
console.log(`\nhomework js3-2 ex.3 Fetching and waiting by sq.mag\n `)

/* Fetching and waiting
Do the 3 steps below using promises and .then.
Do the 3 steps below using async/await

The 3 steps:
1. Wait 3 seconds
2. After 3 seconds fetch some data from any api you like
3. Log out the data from the api

q: Which way do you prefer, the promise way or the async/await way?
a: the PROMISE WAY <3 <3 <3 */

setTimeout(function () { console.log(`\nEXERCISE ------- 4 \n `) }, 50)

// https://api.nasa.gov/ 
const apiKey_NASA_apod = `F2UskCngt9oMhZBQEhzh9kvLN9c8yvjh2nIL5F53`
const url_NASA_apod = `https://api.nasa.gov/planetary/apod?api_key=F2UskCngt9oMhZBQEhzh9kvLN9c8yvjh2nIL5F53`
// const url_NASA_apod = `https://api.nasa.gov/planetary/apod?api_key=${apiKey_NASA_apod}` 
// illegal: WHY? 

const title_El = document.getElementById("title")
const date_El = document.getElementById("date")
const pic_url_El = document.getElementById("pic_url")
const vid_url_El = document.getElementById("vid_url")
const expl_El = document.getElementById("explanation")
const media_El = document.getElementById("media_type")
const serv_El = document.getElementById("service_version")



const make_NASA_apod_Promise = (delay) => {

    return fetch(url_NASA_apod)

        .then((response) => response.json())

        .then((apod_data) => {

            const the_NASA_apod_Promise = new Promise((resolve, reject) => {

                setTimeout(() => {
                    console.log(`\nThis is apod_data object in RESOLVE 
                    fetched after ${delay} seconds: \n `, apod_data);
                    return resolve(apod_data)
                }, delay * 1000)

                setTimeout(function () {
                    return reject(`\nAccess denied! \n `)
                }, delay * 1000)

            })


            // the PROMISE WAY ----> switch with the async/await way
            the_NASA_apod_Promise

                .then(apod_data => {
                    console.log(`\nThis is .then and it has access to apod_data: \n `, apod_data)

                    // console.log(apod_data.title)
                    // console.log(apod_data.date)
                    // console.log(apod_data.explanation)
                    // console.log(apod_data.hdurl)
                    // console.log(apod_data.url)
                    // console.log(apod_data.media_type)
                    // console.log(apod_data.service_version)

                    // title
                    title_El.innerHTML = (apod_data.title);

                    // date
                    date_El.innerHTML = (apod_data.date);

                    // image or video
                    function checkIfImgOrVid(str) {
                        let result = "";
                        if ((str.includes('.jpg')) || (str.includes('.png')) || (str.includes('.jpeg'))) {
                            result = pic_url_El.innerHTML =
                                (`<img width="500" autoplay loop muted 
                                  src=${apod_data.url} alt="image" </img>`);
                        } else {
                            result = vid_url_El.innerHTML =
                                (`<iframe width="500" height="281" autoplay loop muted  
                                  src=${apod_data.url} frameborder="0"allowfullscreen> </iframe>`);
                        }
                        return result;
                    }
                    let urlString = (apod_data.url)
                    checkIfImgOrVid(urlString)

                    // explanation
                    expl_El.innerHTML = (apod_data.explanation)

                    // // media type
                    // media_El.innerHTML = (`05: Media type: ` + apod_data.media_type) 

                    // // service version
                    // serv_El.innerHTML = (`06: Service version: ` + apod_data.service_version)

                })

                .catch(err0r_msg => {
                    console.log(`\nThis is .catch: \n `, err0r_msg)
                })

            // RETURN === promise!!!
            return the_NASA_apod_Promise




            // // the ASYNC/AWAIT WAY ----> switch with the promise way
            // async function into_AsyncAwait() {
            //     try {
            //         // console.log(apod_data.title)
            //         // console.log(apod_data.date)
            //         // console.log(apod_data.explanation)
            //         // console.log(apod_data.hdurl)
            //         // console.log(apod_data.url)
            //         // console.log(apod_data.media_type)
            //         // console.log(apod_data.service_version) 

            //         // title
            //         title_El.innerHTML = (apod_data.title);

            //         // date
            //         date_El.innerHTML = (apod_data.date);

            //         // image or video
            //         function checkIfImgOrVid(str) {
            //             let result = "";
            //             if ((str.includes('.jpg')) || (str.includes('.png')) || (str.includes('.jpeg'))) {
            //                 result = pic_url_El.innerHTML =
            //                     (`<img width="500" autoplay loop muted 
            //                 src=${apod_data.url} alt="image" </img>`);
            //             } else {
            //                 result = vid_url_El.innerHTML =
            //                     (`<iframe width="500" height="281" autoplay loop muted  
            //                 src=${apod_data.url} frameborder="0"allowfullscreen> </iframe>`);
            //             }
            //             return result;
            //         }
            //         let urlString = (apod_data.url)
            //         checkIfImgOrVid(urlString)

            //         // explanation
            //         expl_El.innerHTML = (apod_data.explanation)

            //         // // media type
            //         // media_El.innerHTML = (`05: Media type: ` + apod_data.media_type) 

            //         // // service version
            //         // serv_El.innerHTML = (`06: Service version: ` + apod_data.service_version)


            //         const data_aa = await the_NASA_apod_Promise;
            //         console.log(data_aa)
            //         return (data_aa)
            //     }
            //     catch (err) {
            //         console.log(err)
            //         return (err)
            //     }
            // }
            // into_AsyncAwait()

            // // RETURN === promise !!!
            // return the_NASA_apod_Promise


        })

    //


}

console.log(make_NASA_apod_Promise(3))
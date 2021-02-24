console.log(`Hello Squirrels. 
Parallel world connection test. 
This is HYF:: JS3_1 hw ex:4 
giphy API ---> app`)

// adult content warning :D
const yourAge = prompt("Please enter your age: ")
if (yourAge < 18) alert("Sorry, this page is for adults only");
if (yourAge >= 18) alert("Hello, you can search for gifs now. Enjoy :>");
if (yourAge < 18) location.href = ("../html/index.html");

giphy_apiKey = 'ZfeO6WGI1GuPuoqhhSXgGqQNU5sou62D';

function fetchGifs() {

    // itercept the inputs: 
    let typed_PhraseStr = document.getElementById("phrase_interceptor").value;
    let typed_NumOfGifs = document.getElementById("number_interceptor").value;

    // prepare for no string input
    let noInputWarning = document.getElementById("emptiness_interceptor");
    noInputWarning.innerText = '';

    // in case of no string input ---> spit a message:
    if (!typed_PhraseStr) {
        noInputWarning.innerHTML = `type what and how many gifs you need`;
    }

    // otherwise gimmie gifies: 
    else {  // for adults:
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${giphy_apiKey}&q=
        ${typed_PhraseStr}&limit=${typed_NumOfGifs}&offset=0&rating=r&lang=en`)
            // for kids: 
            // fetch(`http://api.giphy.com/v1/gifs/search?q=
            // ${typed_PhraseStr}&api_key=${giphy_apiKey}&limit=${typed_NumOfGifs}`) 

            .then(response => response.json())

            .then(gifies => {
                console.log(gifies);
                renderGifs(gifies);
            })
    }
}

function renderGifs(gifies) {

    let gifShowcaseElement = document.getElementById("rendered_gifs_area")

    gifShowcaseElement.innerHTML = gifies.data // <-- an array, so:
        .map(aGif => `<img src=${aGif.images.fixed_width.url}>`)
}

// get the button and attach event listener: click -> GO
const buttonElement = document.getElementById("search_button")
buttonElement.addEventListener("click", fetchGifs)
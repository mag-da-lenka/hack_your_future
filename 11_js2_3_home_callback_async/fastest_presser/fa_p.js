console.log(`The fastest presser in the realm - game (part of js2_3 homework)`)


// input intercepting and re/start buttons:
const blankInputSayer_El = document.getElementById("blank_input_interceptor");
let inputNumberValue_El = document.getElementById("input_number_interceptor");
const startButton_El = document.getElementById("start_button");
const restartButton_El = document.getElementById("restart_button");

// keys ---> S/L: 
const key_S_El = document.getElementById("key_S"); let s_clicks = "";
const key_L_El = document.getElementById("key_L"); let l_clicks = "";

// info boxes: 
const resultInfoBox_El = document.getElementById("result_info_box")
const countdownInfoBox_El = document.getElementById("countdown_info_box")



const countAndShow_SL_clicks = () => {
    if (window.event.code === "KeyS") { s_clicks++; key_S_El.innerHTML = s_clicks }
    if (window.event.code === "KeyL") { l_clicks++; key_L_El.innerHTML = l_clicks }
    // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/codes
}


const compareResults = () => {

    if (l_clicks > s_clicks) {
        resultInfoBox_El.innerHTML = `L wins`;
    } else if (s_clicks > l_clicks) {
        resultInfoBox_El.innerHTML = `S wins`;
    } else if (s_clicks === l_clicks) {
        resultInfoBox_El.innerHTML = `L === S`;
    }
    disablePreses()
}


const play = () => {

    let inputNumberValue_El = document  // get input.value 
        .getElementById("input_number_interceptor").value;

    if (!inputNumberValue_El) { // no input ---> set timer 
        if (window.event.code === "KeyS" || window.event.code === "KeyL"
            || window.event.currentTarget.id === "start_button") {
            blankInputSayer_El.innerHTML = `set timer`;
        }
    }

    if (inputNumberValue_El) {

        if (window.event.currentTarget.id === "start_button") {

            let countDownTo_0 = setInterval(() => {

                inputNumberValue_El--;
                countdownInfoBox_El
                    .innerHTML = `${inputNumberValue_El} seconds left`;

                if (inputNumberValue_El === 0) {
                    clearInterval(countDownTo_0)
                }

            }, 1000);

        }

        countAndShow_SL_clicks()

        setTimeout(compareResults, inputNumberValue_El * 1000);

    }

}


// event listeners: 

// keys enabled
const enablePresses = () => {
    window.addEventListener("keyup", play);
};
enablePresses(); // !!!

// keys disabled
const disablePreses = () => {
    window.removeEventListener("keyup", play);
}

// start btn
startButton_El
    .addEventListener("click", play)

// restart btn
restartButton_El
    .addEventListener("click",
        () => window.location.reload());
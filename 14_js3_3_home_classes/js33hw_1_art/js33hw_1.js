console.log("\njs33hw_1_art\n ")

// notes <3 <3 <3 
// https://www.w3schools.com/graphics/canvas_text.asp
// https://www.w3schools.com/graphics/canvas_drawing.asp
// https://www.w3schools.com/graphics/canvas_coordinates.asp
// https://javascript.info/task/random-min-max
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
// https://stackoverflow.com/questions/1484506/random-color-generator
// https://stackoverflow.com/questions/1664785/resize-html5-canvas-to-fit-window

console.log(`\nsoundtrack:  https://www.youtube.com/watch?v=L_XJ_s5IsQc\n `)

const canvas_El = document.getElementById("canvas");
canvas_El.width = window.innerWidth;
canvas_El.height = window.innerHeight;

const context = canvas_El.getContext("2d");


// make canvast un/stretch depending on the window size 

const getDynamicCanvas = () => {

    const initialize = () => {
        window.addEventListener('resize', resizeCanvas, false);
        resizeCanvas();
    };

    initialize();

    function redraw() {
        context.strokeStyle = 'none';
        context.lineWidth = '2';
        context.strokeRect(0, 0,
            window.innerWidth, window.innerHeight);

        // just in case: this is text on canvas <3 
        // context.font = "50px Arial";
        // context.fillStyle = "rgb(172, 184, 252)";
        // context.textAlign = "center";
        // context.fillText("Hello World", canvas_El.width / 2, canvas.height - 510);

    }

    function resizeCanvas() {

        // also: show (and log) canvas (a.k.a. sky) size dynamically <3 <3 <3 
        let canvasSizeMessage = document.getElementById("canvas_info");
        canvas_El.width = window.innerWidth;
        canvas_El.height = window.innerHeight;
        console.log(`canvas W x H:  ${canvas_El.width} x ${canvas_El.height}`)
        canvasSizeMessage = document.getElementById("canvas_info")
            .textContent = `sky size: ${canvas_El.width} x ${canvas_El.height}`;

        redraw();
    }
}

getDynamicCanvas();


// PART 1 


// Circle class with draw method

class Circle {

    constructor(x, y, r, startAngle, endAngle, fillColor, context) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
        this.context = context
    }

    draw = () => {

        const arcPath = new Path2D();
        arcPath.arc(
            this.x,
            this.y,
            this.r,
            this.startAngle,
            this.endAngle,
        );

        context.fillStyle = this.fillColor;
        context.fill(arcPath);
    }

}

// little helpers
const generateRandomNumber = (min, max) => Math.random() * (max - min) + min;
const generateRandomColor = () => `#` + (Math.floor(Math.random() * 16777215).toString(16));


function drawCirclesInIntervals(seconds) {
    
    setInterval(

        function generate_aRandomCircle() {

            const aCircle_1 = new Circle(
                // args:
                generateRandomNumber(10, canvas_El.width),   // x
                generateRandomNumber(10, canvas_El.height),  // y
                generateRandomNumber(0.5, 2),                // r
                0,                                           // startAngle
                (2 * Math.PI).toFixed(2),                    // endAngle
                generateRandomColor(),                       // fillColor
            );

            aCircle_1
                .draw();

        }, seconds * 1000);

}

canvas_El
    .addEventListener("dblclick",
        () => { drawCirclesInIntervals(0.070) });




// PART 2 :: OPTIONAL: 
// follow the cursor on mouse enter continually

// version 2  :: PATH !!!

let path;

class Circle_around_cursor {

    constructor(canvas) {
        this.coord = { x: 0, y: 0 };
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
    }

    showMousePosition = (event) => {
        this.coord.x = event.clientX;
        this.coord.y = event.clientY;
    }


    start = () => {

        path = setInterval(() => {

            const newCircle_cursor = new Circle(
                // args:
                this.coord.x,                       // x
                this.coord.y,                       // y
                generateRandomNumber(0.5, 3),       // r
                0,                                  // startAngle
                (2 * Math.PI),                      // endAngle
                generateRandomColor(),              // fillColor
            );

            newCircle_cursor
                .draw();

        }, 0.666);

    }

    keepGoing = (event) => {
        this.showMousePosition(event);
        this.context.beginPath();
    }

    stop = () => clearInterval(path);


}


const aCircle_around_cursor =
    new Circle_around_cursor(canvas);

// event listeners for drawing paths
canvas_El.addEventListener("mousedown",
    function () { aCircle_around_cursor.start(); });
canvas_El.addEventListener("mousemove",
    function (event) { aCircle_around_cursor.keepGoing(event); });
canvas_El.addEventListener("mouseup",
    function () { aCircle_around_cursor.stop(); });




// console.SPAM(¯\_(ツ)_/¯)
document.addEventListener('mouseenter',
    function () { console.log(`<--- mouse  in`, '¯\\_(ツ)_/¯') })
document.addEventListener('mouseleave',
    function () { console.log(`---> mouse out`, '¯\\_(ツ)_/¯') })


    // // ignore
// const my_gradient = context.createLinearGradient(0, 0, 0, 120);
// my_gradient.addColorStop(0, "black");
// my_gradient.addColorStop(1, "white");
// context.fillStyle = my_gradient; 



// // version 1 of part 2  // sucks... 

// function generateCirclesInIntervals_cursor(event) {
//     // console.log(event)

//     const circle_Cursor = new Circle(
//         event.clientX,
//         event.clientY,
//         generateRandomNumber(0.5, 2.71),
//         0,
//         Math.PI * 2,
//         generateRandomColor());

//     circle_Cursor.draw();

// }

// document.body
//     .addEventListener('mousemove',
//         generateCirclesInIntervals_cursor)
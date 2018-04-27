//target canvas element
var canvas = document.getElementById("myCanvas");
//create drawing object
var ctx = canvas.getContext("2d");
//pass event object information to get info about event
var brush = "circle";

function changeBrush(brushName) {
    brush = brushName;
}

function putPoint(e){
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;

    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;
    var opacity = document.getElementById("opacity").value;

    if (brush === "circle") {
        //begin circle path
        ctx.beginPath();
        //create arc using event x & y and width variables
        ctx.ellipse(e.clientX, e.clientY, width, height, 0, Math.PI*2, false);
        //close path
        ctx.closePath();
        //use the rgb variables to set the fill style
        ctx.fillStyle = "rgba("+red+","+green+","+blue+","+opacity+")";
        //fill the circle
        ctx.fill();
    } else if (brush === "rectangle") {
        //begin rectangle path
        ctx.beginPath();
        //create arc using event x & y and width variables
        ctx.rect(e.clientX - (width / 2), e.clientY - (height / 2), width, height);
        //close path
        ctx.closePath();
        //use the rgb variables to set the fill style
        ctx.fillStyle = "rgba("+red+","+green+","+blue+","+opacity+")";
        //fill the circle
        ctx.fill();
    }
}
//event listener for user clicks
canvas.addEventListener("mousedown", putPoint); 

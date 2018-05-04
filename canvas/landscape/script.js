var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var cWidth = canvas.width;
var cHeight = canvas.height;
var sunHeight = 0;
var clouds = [0, cWidth / 2, cWidth];
var cloudDirections = [1, 1, -1];
var sunDirection = 1;

function drawSky() {
    var fade = 1 - (sunHeight / cHeight);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cWidth, cHeight);

    ctx.fillStyle = "rgba(0, 255, 255, " + fade + ")";
    ctx.fillRect(0, 0, cWidth, cHeight);
}

function drawMountains() {
    ctx.beginPath();
    ctx.moveTo(0, cHeight);
    ctx.lineTo(0, 600);
    ctx.lineTo(300, 200);
    ctx.lineTo(500, 500);
    ctx.lineTo(700, 350);
    ctx.lineTo(cWidth, 600);
    ctx.lineTo(cWidth, cHeight);
    ctx.fillStyle = "rgb(50, 200, 70)";
    ctx.fill();
}

function drawSun() {

    ctx.beginPath();
    ctx.arc(cWidth / 2, sunHeight, 80, 0, 2*Math.PI);
    ctx.closePath();

    ctx.fillStyle = "rgb(255, " + Math.round(255 * (1 - (sunHeight / (cHeight / 2)))) + ", 0)";
    ctx.fill();

    if (sunHeight < 0) {
        sunDirection = 1;
    } else if (sunHeight > 700) {
        sunDirection = -1;
    }

    sunHeight += sunDirection;
}

function drawClouds() {
    var cloudY = 250;

    for (var i = 0; i < clouds.length; i++) {

        // our clouds are just a bunch of circles drawn over each other
        ctx.beginPath();
        ctx.arc(clouds[i], cloudY, 35, 0, 2*Math.PI);
        ctx.arc(clouds[i] + 15, cloudY - 30, 30, 0, 2*Math.PI);
        ctx.arc(clouds[i] + 35, cloudY, 35, 0, 2*Math.PI);
        ctx.arc(clouds[i] + 55, cloudY - 30, 30, 0, 2*Math.PI);
        ctx.arc(clouds[i] + 65, cloudY, 35, 0, 2*Math.PI);
        ctx.closePath();
        ctx.fillStyle = "white";
        ctx.fill();

        if (clouds[i] < 0) {
            cloudDirections[i] = 1;
        } else if (clouds[i] > cWidth) {
            cloudDirections[i] = -1;
        }

        clouds[i] += cloudDirections[i];
    }


}

function animate() {
    ctx.clearRect(0, 0, cWidth, cHeight);

    drawSky();
    drawSun();
    drawClouds();
    drawMountains();

    requestAnimationFrame(animate);
}


animate();

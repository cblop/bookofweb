const images = ["apple.jpg", "orange.jpg", "pineapple.jpg", "pen.jpg", "banana.jpg", "kiwi.jpg"];
var grid = [];
var clicks = [];
var matches = [];
var count = 0;

function makeGrid() {

    var allImages = images.concat(images);

    grid = [];

    while(allImages.length > 0) {
        rand = Math.floor((Math.random() * allImages.length));

        grid.push(allImages[rand]);
        allImages.splice(rand, 1);
    }
}

function clicked(i) {

    count++;

    if (clicks.length >= 2) {
        clicks = [i];
    } else {
        clicks.push(i);
    }

    printGrid();

    if (grid[clicks[1]] && (grid[clicks[0]] === grid[clicks[1]])) {
        matches = matches.concat(clicks);
    }

    if (matches.length === grid.length) {
        alert("Congrats! You won in " + count + " clicks.");
        startGame();
    }
}

function printGrid() {
    var htmlString = "<table id=\"grid\">";
    var match = false;

    for (var i = 0; i < grid.length; i++) {
        match = false;

        if (i % 4 === 0) {
            htmlString += "<tr>";
        }

        for (var j = 0; j < matches.length; j++) {
            if (matches[j] === i){
                match = true;
            }
        }

        if ((clicks[0] === i) || (clicks[1] === i)) {
            htmlString += "<td><img src='" + grid[i] + "'>";
        } else if (match) {
            htmlString += "<td class='matched'>";
        }
        else {
            htmlString += "<td onclick='clicked(" + i + ")' class='unclicked'>";
        }

        htmlString += "</td>";

        if ((i + 1) % 4 === 0) {
            htmlString += "</tr>";
        }
    }

    htmlString += "</table>";
    document.getElementById("game").innerHTML = htmlString;
}


function startGame() {
    clicks = [];
    matches = [];
    count = 0;
    makeGrid();
    printGrid();
}

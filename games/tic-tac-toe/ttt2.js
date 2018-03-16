// Grid:
// 0 1 2
// 3 4 5
// 6 7 8

var grid = [" ", " ", " ",
            " ", " ", " ",
            " ", " ", " "];

var count = 0;

var winningCombo = undefined;

function makeMove(i) {

    if (grid[i] === " ") {

        count++;

        if (count % 2 === 0) {
            grid[i] = "X";
        } else {
            grid[i] = "O";
        }
    }

    printGrid();
    checkWinner();

}

function checkWinner() {
    var combos = [[0, 1, 2],
                  [3, 4, 5],
                  [6, 7, 8],
                  [0, 3, 6],
                  [1, 4, 7],
                  [2, 5, 8],
                  [0, 4, 8],
                  [6, 4, 2]];

    for (var i = 0; i < combos.length; i++) {
        var row = combos[i];
        var firstElem = grid[row[0]];
        if ((firstElem !== " ") && (grid[row[0]] === grid[row[1]]) && (grid[row[1]] === grid[row[2]])) {
            winningCombo = row;
            endGame(firstElem);
        }
    }

    if (!winningCombo && count >= 9){
        endGame("Nobody");
    }

}

function endGame(winner) {
    printGrid();
    document.getElementById("message").innerHTML = "<h2>" + winner + " wins!</h2><a onclick='startGame()' href='#'>Click here to start again</a>";
}

function printGrid() {
    var htmlString = "<table id=\"grid\">";

    for (var i = 0; i < grid.length; i++) {

        if (i % 3 === 0)
            htmlString += "<tr>";

        htmlString +=  "<td ";

        if (winningCombo) {
            for (var j = 0; j < winningCombo.length; j++) {
                if (winningCombo[j] === i) {
                    htmlString += "class='invert'";
                }
            }
        } else {
            htmlString +=  " onclick=\"makeMove(" + i + ")\"";
        }

        htmlString += ">" + grid[i]; + "</td>";

        if ((i + 1) % 3 === 0)
            htmlString += "</tr>";

    }

    htmlString += "</table>";
    document.getElementById("game").innerHTML = htmlString;
}

function startGame() {
    grid = [" ", " ", " ",
            " ", " ", " ",
            " ", " ", " "];
    count = 0;

    document.getElementById("message").innerHTML = "";
    winningCombo = undefined;
    printGrid();
}

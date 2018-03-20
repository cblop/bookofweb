// This is our grid.
// Each square in the game grid is given a number:
// 0 1 2
// 3 4 5
// 6 7 8

// At first, the grid contains blank strings.
// It's much easier to put them in a 1D array,
// rather than using a 2D one
var grid = [" ", " ", " ",
            " ", " ", " ",
            " ", " ", " "];

// This keeps track of how many times the player has clicked
var count = 0;

// This will store the winning combination of moves
var winningCombo = undefined;

// This function is called whenever a player clicks on the grid.
// It puts a "X" or "O" on the grid, depending on who has clicked.
function makeMove(i) {
    // If the grid square clicked on is empty
    if (grid[i] === " ") {
        // Add 1 to the number of clicks
        count++;

        // If the number of clicks is even
        if (count % 2 === 0) {
            // Put an "X" in the grid
            grid[i] = "X";
        } else {
            // Otherwise, put a "O" in
            grid[i] = "O";
        }
    }

    // Print the grid
    printGrid();

    // See if someone has won
    checkWinner();
}

// This function looks at the grid, and sees
// if there are three "O"s or "X"s in a row
function checkWinner() {
    // These are all the possible combinations of three
    // Os or Xs in a row:
    var combos = [[0, 1, 2],
                  [3, 4, 5],
                  [6, 7, 8],
                  [0, 3, 6],
                  [1, 4, 7],
                  [2, 5, 8],
                  [0, 4, 8],
                  [6, 4, 2]];

    // Go through the winning combinations above,
    // see if they exist in the current game grid:
    for (var i = 0; i < combos.length; i++) {
        // One possible winning combination
        var row = combos[i];

        //  l
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

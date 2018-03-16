var grid = [[" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "]];

var count = 0;

function makeMove(x, y) {
    count++;

    if (count % 2 == 0) {
        grid[x][y] = "X";
    } else {
        grid[x][y] = "O";
    }
    checkWinner();
    printGrid();
}

function checkWinner() {
    var combos = [[[0, 0], [0, 1], [0, 2]],
                  [[1, 0], [1, 1], [1, 2]],
                  [[2, 0], [2, 1], [2, 2]],
                  [[0, 0], [1, 0], [2, 0]],
                  [[0, 1], [1, 1], [2, 1]],
                  [[0, 2], [1, 2], [2, 2]],
                  [[0, 0], [1, 1], [2, 2]],
                  [[2, 0], [1, 1], [0, 2]]
                 ];

    for (var i = 0; i < combos.length; i++) {
        var row = combos[i];
        var firstElem = grid[row[0][0]][row[0][1]];
        if ((firstElem !== " ") && (grid[row[0][0]][row[0][1]] === grid[row[1][0]][row[1][1]]) && (grid[row[1][0]][row[1][1]] === grid[row[2][0]][row[2][1]])) {
            endGame(firstElem);
        }
    }

}

function endGame(winner) {
    printGrid();
    alert(winner + " wins!");
}

function printGrid() {
    var htmlString = "<table id=\"grid\">";

    for (var i = 0; i < grid.length; i++) {

        htmlString += "<tr>";

        for (var j = 0; j < grid[0].length; j++) {
            htmlString +=  "<td onclick=\"makeMove(" + i + ", " + j + ")\" class=\"square\">" + grid[i][j]; + "</td>";
        }

        htmlString += "</tr>";
    }

    htmlString += "</table>";
    document.getElementById("game").innerHTML = htmlString;
}

function startGame() {
    printGrid();
}

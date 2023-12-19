const boardTiles = document.querySelectorAll(".board_tile");
let user_turn = "p1";
var gameboard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function printGameboard() {
    console.log('Current Gameboard:');
    for (let row = 0; row < gameboard.length; row++) {
        console.log(gameboard[row].join(' | '));
        if (row < gameboard.length - 1) {
            console.log('---------');
        }
    }
}
function checkWin() {
    // Check rows
    for (let row of gameboard) {
        if (row[0] === row[1] && row[1] === row[2] && row[0] !== '') {
            return true;
        }
    }

    // Check columns
    for (let col = 0; col < gameboard[0].length; col++) {
        if (
            gameboard[0][col] === gameboard[1][col] &&
            gameboard[1][col] === gameboard[2][col] &&
            gameboard[0][col] !== ''
        ) {
            return true;
        }
    }

    // Check diagonals
    if (
        (gameboard[0][0] === gameboard[1][1] && gameboard[1][1] === gameboard[2][2] && gameboard[0][0] !== '') ||
        (gameboard[0][2] === gameboard[1][1] && gameboard[1][1] === gameboard[2][0] && gameboard[0][2] !== '')
    ) {
        return true;
    }

    return false;
}
function checkDraw() {
    // Flatten the 2D board array into a 1D array
    const value_list = gameboard.flat();

    // Check if any cell is empty
    if (value_list.includes('')) {
        return false; // Not a draw, since there are still empty cells
    }

    // If no empty cells, it's a draw
    return true;
}

boardTiles.forEach(tile => {
    tile.addEventListener("click", () => {
        if (user_turn === "p1" && tile.innerHTML === "") {
            tile.innerHTML = "&#10005;";
            gameboard[parseInt(tile.dataset.row)][parseInt(tile.dataset.column)] = 'X';
        } else if (user_turn === "p2" && tile.innerHTML === "") {
            tile.innerHTML = "&#x4f;";
            gameboard[parseInt(tile.dataset.row)][parseInt(tile.dataset.column)] = 'O';
        } else {
            return false;
        }
        
        
        
        // Call the checkWin() function and perform any actions on a win
        // Call the checkWin() function and perform any actions on a win
if (checkWin()) {
    // Perform actions for a win (e.g., display a message or reset the game)
    document.querySelector("#message h2").textContent = (user_turn === "p1" ? `${document.querySelector(".playername1").textContent}` : `${document.querySelector(".playername2").textContent}`) + " wins!";
    document.querySelector('#message').style.display = "block";

    
    document.querySelector("#gameBoard").style.display = "none";
}
if(checkDraw()){
    document.querySelector("#message h2").textContent = "It's a draw!";
    document.querySelector('#message').style.display = "block";

    
    document.querySelector("#gameBoard").style.display = "none";
}
// Switch the turn to the other player
user_turn = user_turn === "p1" ? "p2" : "p1";
        
    });
});


document.querySelector("#start-game").addEventListener("click", () => {
    
    var container = document.getElementById("gameBoard");
    document.querySelector('#message').style.display = "none";
    boardTiles.forEach(tile=>{
        tile.innerHTML = "";
    })
    for(let i = 0;i <= 2;i++ ){
        for(let x = 0; x <= 2; x++){
            gameboard[i][x] = ''
        }
    }
    user_turn = "p1";
    container.style.display = "grid";
  });
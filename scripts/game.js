// Game object

let game = {
	score: 0,
	currentGame: [],
	playerMoves: [],
	choices: ["button1", "button2", "button3", "button4"],
};

// New game function

/** Check if new game has been clicked
 * Check whether sequence == false
 * Start new sequence
 */

function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    showScore();
    addTurn();
}

// Add turn game - add random  turn to sequence

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    // showTurns();
}



// PLayer turn to check if player has clicked correct circle

// Show score

function showScore() { 
    document.getElementById("score").innerText = game.score; 
}

// Light up the circle in the sequence

function lightsOn(circ) {
    document.getElementById(circ).classList.add("light");
    setTimeout(() => {
        document.getElementById(circ).classList.remove("light");
    }, 400);
}

module.exports = { game, newGame, showScore, addTurn, lightsOn };

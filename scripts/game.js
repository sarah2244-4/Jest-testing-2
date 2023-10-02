// Game object

let game = {
	score: 0,
	currentGame: [],
	playerMoves: [],
	choices: ["button1", "button2", "button3", "button4"],
	turnNumber: 0,
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
	for (let circle of document.getElementsByClassName("circle")) {
		if (circle.getAttribute("data-listener") !== "true") {
			circle.addEventListener("click", (e) => {
				let move = e.target.getAttribute("id");
				lightsOn(move);
				game.playerMoves.push(move);
				playerTurn();
			});
			circle.setAttribute("data-listener", "true");
		}
	}
	showScore();
	addTurn();
	turnNumber = 0;
}

// Add turn game - add random  turn to sequence

function addTurn() {
	game.playerMoves = [];
	game.currentGame.push(game.choices[Math.floor(Math.random() * 4)]);
	showTurns();
}

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

// Add to turn count

function showTurns() {
	game.turnNumber = 0;
	let turns = setInterval(() => {
		lightsOn(game.currentGame(game.turnNumber));
		game.turnNumber++;
		if (game.turnNumber >= game.currentGame.length) {
			clearInterval(turns);
		}
	}, 800);
}

// PLayer turn to check if player has clicked correct circle

function playerTurn() {
	let i = game.playerMoves.length - 1;
	if (game.currentGame[i] === game.playerMoves[i]) {
		if (game.currentGame.length == game.playerMoves.length) {
			game.score++;
			showScore();
			addTurn();
		}
	} else {
		alert("Wrong move!");
		newGame();
	}
}

module.exports = {
	game,
	newGame,
	showScore,
	addTurn,
	lightsOn,
	showTurns,
	playerTurn,
};

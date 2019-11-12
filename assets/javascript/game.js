
var wordList = [
	"black hole",
	"intersteller",
	"dark energy",
	"dark matter",
	"star",
	"universe",
	"planet",
	"galaxy",
	"electromagnetic",
	"relativity",
	"gravitional wave",
	"light speed",
	"singularity",
	"supernova"
];
var correctLetter = [];
var wrongLetter = [];
var word;
var guesses = 10;
var wins = 0;
var losses = 0;
var letterCounter = 0;
var winCounter = 0;

// resetStats() resets wins, losses, & guesses back to initial value
function updateStats() {
	document.getElementById('wins').innerHTML = 'Wins: ' + wins;
	document.getElementById('losses').innerHTML = 'Losses: ' + losses;
	document.getElementById('guessesLeft').innerHTML = guesses;
};

// wordGen() chooses random word and creates appropriate number of letter positions
function wordGen() {
	word = wordList[Math.floor(Math.random() * wordList.length)];
	for (var i = 0; i < word.length; i++) {
		var newDiv = document.createElement('div');
		if (word[i] !== ' ') {
			newDiv.setAttribute('id', 'letter' + [i])
			winCounter = (word.length - 1);
		};
		document.getElementById('letterPosition').append(newDiv);
	};
};

// gameCore() checks if letter is in random word
// if letter matches display letter, other wise push and display on wrongLetter array
function gameCore(letter) {
	for (var i = 0; i < word.length; i++) {
		if (letter === word[i]) {
			document.getElementById('letter' + i).innerHTML = letter.toUpperCase();
			correctLetter[i].push
			console.log(letterCounter);
		}
	}

	if (!wrongLetter.includes(letter) && !word.includes(letter)) {
		wrongLetter.push(letter);
		var newDiv = document.createElement('div');
		newDiv.innerHTML = letter.toUpperCase();
		document.getElementById('wrongLetter').append(newDiv);
		guesses--;
	}
	else if (!correctLetter.includes(letter) && word.includes(letter)) {
		correctLetter.push(letter);
	}
	updateStats();
	winCondition();
};

// winCondition() checks if number of correct letters guessed equals number of letters in word
function winCondition() {
	if (letterCounter === winCounter) {
		console.log('You Win!');
		wins++;
	}
	else if (guesses === 0) {
		console.log('You Lose!');
		losses++;
	}
	updateStats();
}

// userInput() takes user key input and passes to gameCore()
function userInput() {
	document.onkeyup = function (event) {
		var input = event.key.toLowerCase();
		gameCore(input);
	};
};

updateStats();
wordGen();
userInput();

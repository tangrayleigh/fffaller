
$(document).ready(function () {

	var wordList = [
		"black hole",
		// "intersteller",
		// "dark energy",
		// "dark matter",
		// "star",
		// "universe",
		// "planet",
		// "galaxy",
		// "electromagnetic",
		// "relativity",
		// "gravitional wave",
		// "light speed",
		// "singularity",
		// "supernova"
	];
	var correctLetter = [];
	var wrongLetter = [];
	var word;
	var guesses = 10;
	var wins = 0;
	var losses = 0;

	function wordGen() {
		word = wordList[Math.floor(Math.random() * wordList.length)];
		for (var i = 0; i < word.length; i++) {
			var newSpan = document.createElement('span');
			if (word[i] !== ' ') {
				newSpan.setAttribute('id', 'letter' + [i])
			};
			document.getElementById('letterPosition').append(newSpan);
		};
	};

	function compareLetter(input) {
		var letterToken = false;
		for (var i = 0; i < word.length; i++) {
			if (input === word[i]) {
				letterToken = true;
			}
		};
		if (letterToken) {
			for (var j = 0; j < word.length; j++) {
				if (input === word[j]) {
					correctLetter[j] = input;
					document.getElementById("letter" + j).innerHTML = input;
				}
			}
		}
		else {
			var newSpan = document.createElement('span');
			newSpan.innerHTML = wrongLetter.push(input);
			document.getElementById('wrongLetter').append(newSpan);
			guesses--;
		};
	};

	function userInput() {
		document.onkeyup = function (event) {
			var letter = event.key.toLowerCase();
			compareLetter(letter);
		};
	};

	function winLossState() {
		inputArray.join();
		if (inputArray === word) {
			winCount++;
		}
		else {
			lossCount++;
		};
	};

	function updateGame() {
		document.getElementById('wins').innerHTML = 'Wins: ' + wins;
		document.getElementById('losses').innerHTML = 'Losses: ' + losses;
		document.getElementById('guessesLeft').innerHTML = 'Guesses Remaining: <br><br>' + guesses;
	};

	function playGame() {
		document.getElementById('play').style.display = 'none';
		document.getElementById('instructions').style.visibility = 'visible';
		document.getElementById('quit').style.display = 'block';
		wordGen();
		userInput();
		updateGame();
		updateWinLoss();
	};

	function endGame() {

	};



	document.getElementById('play').addEventListener('click', playGame);
	document.getElementById('quit').addEventListener('click', endGame);


}); // end

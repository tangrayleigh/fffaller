var wordList = [
	"quarks",
	"spectrum",
	"energy",
	"moon",
	"star",
	"universe",
	"planet",
	"galaxy",
	"electromagnetic",
	"relativity",
	"gravity",
	"radiation",
	"singularity",
	"supernova"
];

// using Math.floor + Math.random to choose random word from wordList array
var word = wordList[Math.floor(Math.random() * wordList.length)];

// empty array to hold correct letters of random word
var letterList = [];

// empty array to hold incorrect letters of random word
var letterGuessed = [];

// variable to track number of letters in random word
var letterCount = word.length;

// variable to track number of guesses during game play
var guessCount = 10;

// creating div element to display number of letters in random word
var letterCountNode = document.createElement("div");
letterCountNode.append("This word has " + letterCount + " letters.");
document.getElementById("wordBox").appendChild(letterCountNode);

// creating div element to display number of guesses left while playing game
var guessCountNode = document.createElement("div");
guessCountNode.append("Guesses Left: " + guessCount);
document.getElementById("wordBox").appendChild(guessCountNode);

// loop to create and display underscores for each letter of random word
for (var i = 0; i < word.length; i++) {
	letterList[i] = "_";
	var spanNode = document.createElement("span");
	var letterNode = document.createTextNode(letterList[i]);

	spanNode.appendChild(letterNode);
	document.getElementById("wordBox").appendChild(spanNode);
}


/////////////////////////////////////


$(document).ready(function () {

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
	var letterPosition = [];
	var incorrectLetter = [];
	var guessCount = 10;
	var winsCount = 0;
	var losesCount = 0;


	// game play function
	function playGame() {
		var word = wordList[Math.floor(Math.random() * wordList.length)];

		for (var i = 0; i < word.length; i++) {
			if (word[i] === " ") {
				var spanNode = document.createElement("span");
				var letterPositionNode = document.createTextNode("");
				spanNode.appendChild(letterPositionNode);
				document.getElementById("letterPosition").appendChild(spanNode).style.visibility = "invisible";
				spanNode.style.padding = "0";
			}
			else {
				letterPosition[i] = "";
				var spanNode = document.createElement("span");
				var letterPositionNode = document.createTextNode(letterPosition[i]);
				spanNode.appendChild(letterPositionNode);
				document.getElementById("letterPosition").appendChild(spanNode).style.borderBottom = "2px solid black";
			};
		};
	};

	const playBtn = document.getElementById("playBtn");
	playBtn.addEventListener("click", function () {
		playGame();
	});
});


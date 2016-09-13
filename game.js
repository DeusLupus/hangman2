var Word = require('./word.js');
var wordBank = ['Cyclops', 'Jean Grey', 'Wolverine', 'Iceman', 'Beast', 'Angel', 'Havok', 'Storm', 'Colossus', 'Gambit'];

function Game(){
	this.wins = 0;
	this.losses = 0;
	this.livesLeft = 0;
	this.lettersUsed = [];
	this.word;

	this.StartNewGame = function() {
		this.livesLeft = 10;
		this.lettersUsed = [];
		this.word = this.generateRandomWord();

		console.log('Welcome to X-Men Hangman!');
	}
	this.generateRandomWord = function(){
		var len = wordBank.length;
		var randomWord = wordBank[(Math.random()*len)];
		var currentWord = new Word(randomWord);

		return currentWord;
	}

	this.printResults = function(){
		//prints results between guesses
	}

	this.endGame = function(){
		//prints end of game results
		//print display and target word
	}
}

module.exports = Game;
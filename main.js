var inquirer = require('inquirer');
var Game = require('./game.js');

function initHangman() {
	game.startNewGame();
	promptandProcessInput();
}

function promptandProcessInput(){
	inquirer.prompt([
	{
		type: 'input',
		name: 'userGuess',
		message: 'Enter guess (letter a-z or number 0-9):',
		validate: function(value){
			var validInputs = /[a-z]|[0-9]/i;

			if (value.length === 1 && validInputs.test(value))
				return true;

			return 'Please enter a valid guess (a-z or 0-9):';
		}
	}
	]).then(function (answer){
		var userGuess = answer.userGuess.toUpperCase();

		if (game.lettersUsed.indexOf(userGuess) = -1){
			game.lettersUsed.push(userGuess);
			var correct = game.word.checkLetterInput(userGuess);

			if (correct){
				game.printresults('Your guess was right!')
			}
			else{
				game.liveRemaining--;
				game.printresults('Wrong');
			}
		} else {
			game.printresults('You already used that letter');
		}

		var userWon = game.word.getDisplayWord() === game.word.getTargetWord();

		if (userWon){
			game.wins++;
			endCurrentGame('You Won!!!!');
		}else if(game.livesRemaining > 0)
			promptandProcessInput();
			else{
				game.losses++;
				endCurrentGame('You Lost!');
			}
	});
}

//Application Go
initHangman();
////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
var move;
var playerMove;
var computerMove;
var winner;
var playerWins;
var computerWins;

function getPlayerMove(move) {
       return getInput();
}

function getComputerMove(move) {
    return randomPlay();
}

function getWinner(playerMove,computerMove) {
    playerMove = getPlayerMove();
    computerMove = getComputerMove();  
   if (playerMove === computerMove){
        winner = 'tie';
        console.log('player chose ' + playerMove + ', computer chose ' + computerMove);
    } else if ((playerMove === 'paper' && computerMove === 'rock') || (playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'scissors' && computerMove === 'paper')) {
        console.log('player chose ' + playerMove + ', computer chose ' + computerMove);
        winner = 'player';
    } else {
        console.log('player chose ' + playerMove + ', computer chose ' + computerMove);
        winner = 'computer';
    }
    return winner;
}

function playToFive(playerMove, computerMove) {
    var playerWins = 0;
    var computerWins = 0;
    console.log("Let's play Rock, Paper, Scissors");
    while ((playerWins < 5) && (computerWins < 5)){
        getWinner();
        if (winner ==='player') {
            console.log('player wins this round');
            playerWins +=1;
        }
        if (winner ==='computer') {
            console.log('computer wins this round');
            computerWins+=1;
        }
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    console.log('player score: ' + playerWins + ' and computer score is: '+ computerWins);
    }
    return [playerWins, computerWins];
}
console.log(playToFive());

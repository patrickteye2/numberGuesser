let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// Write your code below:
function generateTarget() {
    const num = Math.floor(Math.random() * 10)
    return num;
}

function compareGuesses(userGuess, computerGuess, secretTarget) {
    if (Math.abs(userGuess - secretTarget) < Math.abs(computerGuess - secretTarget)) {
        return true;
    }
    else if (Math.abs(userGuess - secretTarget) > Math.abs(computerGuess - secretTarget)) {
        return false;
    }
    else {
        return true;
    }
}
function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    }
    else if (winner === 'computer') {
        computerScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}



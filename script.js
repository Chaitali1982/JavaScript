let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//step 3
	function generateTarget( ){
    return Math.floor(Math.random() * 10);
console.log (generateTarget);
 };
generateTarget( );
 
//step 4 
const compareGuesses = (currentHumanGuess, computerGuess, target1) => {
    if (Math.abs(currentHumanGuess - target1) < Math.abs(computerGuess - target1)) {
        return true;
    } else if (Math.abs(computerGuess - target1) < Math.abs(currentHumanGuess - target1)) {
        return false;
    } else {
        return true;
    }
};
compareGuesses();


//step 5
function updateScore(winner){
	if(winner  == 'humman'){
		hummanScore +=1;
	}
	if(winner  == 'computer'){
		computerScore +=1;
	}
};

updateScore();


//step 6
function advanceRound(){
	currentRoundNumber += 1
}

advanceRound();

const getAbsoluteDistance = (a1, a2) => {
  return (Math.abs((currentHumanGuess  - target1)));
}


const alert = () => {
    if (currentHumanGuess > 9) 
    return 'Alert, guess must be between 0 and 9!'
};



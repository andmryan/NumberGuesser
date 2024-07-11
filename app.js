// -- Delcare Variables --
let randomNum;
let guessesLeft = 10;
let totalGuesses = 0;
let guessedNums = [];

const userGuess = document.querySelector("#guessInput");
const submitBtn = document.querySelector("#guessSubmit");
const resetBtn = document.querySelector("#reset");

const gameMessage = document.querySelector("#gameMessage");
const guessedNumsEl = document.querySelector("#prevGuesses");
const guessesLeftEl = document.querySelector("#guessesLeft");
// -- Code Functions --
function pickNumber(){
    return (Math.floor(Math.random()*100) +1)
};
// Init function should set guesses left to 0, remove everything from the guesses array, and set total guesses to 0. And pick a new random numeber.
function init (){ 
    randomNum = pickNumber();
    guessesLeft = 10;
    totalGuesses = 0;
    guessedNums = [];
    guessedNumsEl.textContent = guessedNums;
    guessesLeftEl.textContent = 10;
    gameMessage.textContent="";
};

function validGuess(userGuess) {
    if (userGuess == randomNum){
        gameMessage.textContent=(`Correct! The number was ${randomNum}`);
    }
    else if (userGuess > randomNum && guessesLeft != 0) {
        if (userGuess-randomNum <= 5){
            gameMessage.textContent=("Close, but too high. Guess again.")
        } else {
            gameMessage.textContent=("Whoops, that's too high. Guess again.")
        };
        guessesLeft -= 1;
        guessedNums.push(userGuess);
        guessedNumsEl.textContent = guessedNums;
        guessesLeftEl.textContent = guessesLeft;
    }
    else if (userGuess < randomNum && guessesLeft != 0){
        if (randomNum-userGuess <=5){
            gameMessage.textContent=("Close, but too low. Guess again.")
        } else {
            gameMessage.textContent=("Whoops, that's too low. Guess again.");
        };
        guessesLeft -= 1;
        guessedNums.push(userGuess);
        guessedNumsEl.textContent = guessedNums;
        guessesLeftEl.textContent = guessesLeft;
    }
    else if (guessesLeft == 0){
        gameMessage.textContent=("Game over, reset to try again.");
    }     
}

// function 
// I need a function to check the guessed number against the random number. (would be cool if it could also check if the number is within 5 places of the random number and give a unique message.)
// I need a function to end the game if there are no guesses left.

// -- Event Listeners --
// one for the submit button to run the check against the random number.
submitBtn.addEventListener('click', () => {
    // console.log(userGuess.value)
    validGuess(userGuess.value)
})
// one to reset the entire game/call init.
resetBtn.addEventListener('click', init)

// -- First Init --
init()
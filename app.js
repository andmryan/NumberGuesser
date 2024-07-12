let randomNum;
let guessesLeft = 10;
let totalGuesses = 0;
let guessedNums = [].join(', ');

const userGuess = document.querySelector("#guessInput");
const submitBtn = document.querySelector("#guessSubmit");
const resetBtn = document.querySelector("#reset");

const gameMessage = document.querySelector("#gameMessage");
const guessedNumsEl = document.querySelector("#prevGuesses");
const guessesLeftEl = document.querySelector("#guessesLeft");

function pickNumber(){
    return (Math.floor(Math.random()*100) +1)
};

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
        guessedNumsEl.textContent = guessedNums.join(', ');
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
        guessedNumsEl.textContent = guessedNums.join(', ');
        guessesLeftEl.textContent = guessesLeft;
    }
    else if (guessesLeft == 0){
        gameMessage.textContent=("Game over, reset to try again.");
    }     
    guessInput.value = '';
}

submitBtn.addEventListener('click', () => {
    validGuess(userGuess.value)
})

resetBtn.addEventListener('click', init)

init()
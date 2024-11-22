const gameContainer = document.getElementById('gameContainer');
const hangManSketch = document.getElementById("hangManSketch");
const newGameButton = document.getElementById("newGame");

let gameKeyboard     = new Keyboard();
let gameWord         = new Word(WordGenerator.getRandomWord());
let guessField       = new GuessField();
let wrongGuesses     = 0;
let correctGuesses   = 0;
let currentGameState = JSON.parse(`{"word": "", "guesses": []}`);
// {
//     "word": "",
//     "guesses": [],
// };



newGameButton.addEventListener('click', function(){
    $("#newGameScreen").css('display', 'none');
    $("#hangmanGame").css('display', '');
    createGame();
});

function createGame(saveGameState = null){
    if(saveGameState != null){
        console.log("game loaded");
    }
    else{
        currentGameState.word = `{"word": "${gameWord.word}", "hint": "${gameWord.hint}"}`;
        //console.log(currentGameState);
        guessField.getNewWord(gameWord);
        gameContainer.append(guessField.getGuessField());
        gameContainer.append(guessField.getHint());
        gameContainer.append(gameKeyboard.createKeyboard());
        let $keyboardButtons = $(".letter");

        $keyboardButtons.on('click', function(){
            let wordArray = [...gameWord.word.toLowerCase()];
            let $guesses  = $(".guess");
            let correct = false;
            this.disabled = true;
            currentGameState.guesses.push(this.innerText);
            console.log(currentGameState);
            for(let i = 0; i < wordArray.length; i++){
                if(this.innerText.toLowerCase() == wordArray[i]){
                    $guesses[i].innerText = this.innerText;
                    correct = true;
                    correctGuesses ++;
                }
            }
            if(!correct){
                handleWrongGuess();
            }
            if(correctGuesses == wordArray.length){
                winTheGame();
            }
        });
    }
}

function saveGame(){
    console.log("state = " + currentGameState);
    console.log("stringify = " + JSON.stringify(currentGameState));
    localStorage.setItem("gameState", currentGameState);
}

function winTheGame(){
    console.log("you won!");
}

function handleWrongGuess(){
    wrongGuesses++;
    switch(wrongGuesses){
        case 1:     
            $(".head").css('display', 'block');
            $(".head").addClass("draw");
            break;
        case 2:
            $(".body").css('display', 'block');
            $(".body").addClass("draw");
            break;
        case 3:
            $(".rightArm").css('display', 'block');
            $(".rightArm").addClass("draw");
            break;
        case 4:
            $(".leftArm").css('display', 'block');
            $(".leftArm").addClass("draw");
            break;
        case 5:
            $(".rightLeg").css('display', 'block');
            $(".rightLeg").addClass("draw");
            break;
        case 6:
            $(".leftLeg").css('display', 'block');
            $(".leftLeg").addClass("draw");
            break;
        case 7: 
            loseTheGame();
            break;
    }
}

function loseTheGame(){
    let hungManImage = `<img src ="./images/hungman.svg">`;
    $("#hangManSketch").replaceWith(hungManImage);
    saveGame();
    console.log("this is the localStorage " 
        + JSON.parse(localStorage.getItem("gameState")));
}




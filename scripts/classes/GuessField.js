class GuessField{
    constructor(){
        this.word;
        this.hint;
    }

    getNewWord(word){
        this.word = word.word;
        this.hint = word.hint;
    }

    getGuessField(){
        let guessField = document.createElement('div');
        guessField.id = "guessField";
        for(let i = 0; i < this.word.length; i++){
            guessField.innerHTML += `<div class="guess">_</div>`;
        }
        return guessField;
    }

    getHint(){
        let hintField = document.createElement('div');
        hintField.id = "hintField";
        hintField.innerText = `Hint: ${this.hint}`;
        return hintField;
    }
}
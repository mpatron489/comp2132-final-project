class WordGenerator{
    static getRandomWord(){
        return JSON.stringify(fetch());
        //return JSON.stringify(this.wordLibrary[getRandomInt(27)]);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
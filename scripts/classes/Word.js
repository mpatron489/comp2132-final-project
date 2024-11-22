class Word{
    constructor(word){
        let wordObject = JSON.parse(word);
        this.word = wordObject.word;
        this.hint = wordObject.hint;
    };
}
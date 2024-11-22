

class Keyboard{
    constructor(){
        this.keyLayout = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
        this.rowLayout = [10, 9, 7]
    }
    
    createKeyboard(){
        let keyboardContainer = document.createElement('div');
        keyboardContainer.id  = "keyboardContainer";
        let keycounter = 0;
        for(let x = 0; x < this.rowLayout.length; x++){
            let row = document.createElement('div');
            for(let y = 0; y < this.rowLayout[x]; y++){
                row.innerHTML += `<button class="letter" id="${this.keyLayout[keycounter]}">${this.keyLayout[keycounter].toUpperCase()}</button>`;
                keycounter++;
            }
            keyboardContainer.append(row);
        }
        // this.keyLayout.forEach(element => {
        //     keyboardContainer.innerHTML += `<button class="letter" id="${element}">${element.toUpperCase()}</button>`;
        // });
        return keyboardContainer;
    }
}


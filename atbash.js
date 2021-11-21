const alphabet = require("./alphabet.js");

const alphabetUpper = alphabet.map((char)=>char.toUpperCase());

exports.atbash = (text) => {
    
    const inputTextArr = text.split('');
    const outputTextArr = inputTextArr.map((char) => {
        
        if(alphabet.includes(char)){
            let pos = alphabet.indexOf(char) ;
            pos = alphabet.length - 1 - pos;
            return alphabet[pos];
        }

        if(alphabetUpper.includes(char)){
            let pos = alphabetUpper.indexOf(char);
            pos = alphabetUpper.length - 1 - pos;
            return alphabetUpper[pos];
        }
        
        return char;
    });
    return outputTextArr.join('')
}


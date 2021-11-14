const alphabet = require("./alphabet.js");

const alphabetUpper = alphabet.map((char)=>char.toUpperCase());

exports.atbash = (text) => {
    
    const inputTextArr = text.split('');
    const outputTextArr = inputTextArr.map((char) => {
        
        if(alphabet.includes(char)){
            let pos = alphabet.indexOf(char) ;
            pos = pos < 0?  alphabet.length - 1 - pos : pos;
            return alphabet[pos];
        }

        if(alphabetUpper.includes(char)){
            let pos = alphabetUpper.indexOf(char);
            pos = pos < 0?  alphabetUpper.length - 1 - pos : pos;
            return alphabetUpper[pos];
        }
        
        return char;
    });
    return outputTextArr.join('')
}


const alphabet = require("./alphabet.js");

const alphabetUpper = alphabet.map((char)=>char.toUpperCase());

exports.caesarCipher = (text,encode=true) => {
    let shift = encode?+1:-1;
    
    const inputTextArr = text.split('');
    const outputTextArr = inputTextArr.map((char) => {
        
        if(alphabet.includes(char)){
            let pos = (alphabet.indexOf(char) + shift);
            pos = pos < 0? alphabet.length + pos : pos > alphabet.length-1? pos-(alphabet.length):pos;
            return alphabet[pos];
        }

        if(alphabetUpper.includes(char)){
            let pos = (alphabetUpper.indexOf(char) + shift);
            pos = pos < 0? alphabetUpper.length + pos : pos > alphabetUpper.length-1? pos-(alphabetUpper.length):pos;
            return alphabetUpper[pos];
        }
        
        return char;
    });
    return outputTextArr.join('')
}


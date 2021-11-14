const alphabet = require("./alphabet.js");

const alphabetUpper = alphabet.map((char)=>char.toUpperCase());

exports.caesarCipher = (text,encode=true) => {
    let shift = encode?+1:-1;
    
    const inputTextArr = text.split('');
    const outputTextArr = inputTextArr.map((char) => {
        
        if(alphabet.includes(char)){
            let pos = (alphabet.indexOf(char) + shift);
            console.log(pos)
            pos = pos < 0? alphabet.length + pos : pos;
            // console.log(pos)
            return alphabet[pos];
        }

        if(alphabetUpper.includes(char)){
            let pos = (alphabetUpper.indexOf(char) + shift);
            pos = pos < 0? alphabetUpper.length + pos : pos;
            return alphabetUpper[pos];
        }
        
        return char;
    });
    return outputTextArr.join('')
}


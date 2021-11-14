const alphabet = require("./alphabet.js");

const alphabetUpper = alphabet.map((char)=>char.toUpperCase());

exports.rot8 = (text,encode=true) => {
    
    const inputTextArr = text.split('');
    const outputTextArr = inputTextArr.map((char) => {
        
        if(alphabet.includes(char)){
            let pos = (alphabet.indexOf(char) + encode? 8 : -8 ) ;
            pos = pos < 0? alphabet.length + pos : pos;
            return alphabet[pos];
        }

        if(alphabetUpper.includes(char)){
            let pos = (alphabetUpper.indexOf(char) + encode? 8 : -8 ) % alphabetUpper.length;
            pos = pos < 0? alphabetUpper.length + pos : pos;
            return alphabetUpper[pos];
        }
        
        return char;
    });
    return outputTextArr.join('')
}


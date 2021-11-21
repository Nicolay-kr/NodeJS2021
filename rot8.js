const alphabet = require("./alphabet.js");

const alphabetUpper = alphabet.map((char)=>char.toUpperCase());

exports.rot8 = (text,encode=true) => {
    let shift = encode?+8:-8;

    const inputTextArr = text.split('');
    const outputTextArr = inputTextArr.map((char) => {
        
        if(alphabet.includes(char)){
            let pos = (alphabet.indexOf(char) + shift ) ;
            if(pos > alphabet.length-1){
                pos = pos - alphabet.length;
            }
            else if(pos<0){
                pos = alphabet.length + pos;
            }
            return alphabet[pos];
        }

        if(alphabetUpper.includes(char)){
            let pos = (alphabetUpper.indexOf(char) + shift ) ;
            if(pos > alphabetUpper.length-1){
                pos = pos - alphabetUpper.length;
            }
            else if(pos<0){
                pos = alphabetUpper.length + pos;
            }
            return alphabetUpper[pos];
        }
        
        return char;
    });
    return outputTextArr.join('')
}


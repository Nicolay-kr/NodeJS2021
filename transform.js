const { Transform } = require("stream");
const { caesarCipher } = require("./caesarCipher");
const { atbash } = require("./atbash");
const { rot8 } = require("./rot8");

exports.transformStream = (cipherCode) => {
    return new Transform({transform(chunk, _encoding, callback){
        let cipher = chunk.toString('utf8');
        let cipherCodeArr = cipherCode.split('-');
        cipherCodeArr.forEach(item => {
            if(item.startsWith("C")){
                cipher = caesarCipher(cipher,!!+item[1]);
            }
            if(item.startsWith("R")){
                cipher = (rot8(cipher,!!+item[1]));
            }
            if(item.startsWith("A")){
                cipher = (atbash(cipher));
            }
        });
        this.push(cipher);
        callback();
    }})
}
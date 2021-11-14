const { Transform } = require("stream");
const { caesarCipher } = require("./caesarCipher");
const { atbash } = require("./atbash");
const { rot8 } = require("./rot8");

exports.transformStream = (cipher) => {
    return new Transform({transform(chunk, _encoding, callback){
        let cipherArr = cipher.split('-');
        cipherArr.forEach(item => {
            if(item.startsWith("C")){
                this.push(caesarCipher(chunk.toString('utf8'),!!+item[1]));
            }
            if(item.startsWith("R")){
                this.push(rot8(chunk.toString('utf8'),!!+item[1]));
            }
            if(item.startsWith("A")){
                this.push(atbash(chunk.toString('utf8')));
            }
        });

        
        callback();
    }})
}

// C1-C1-R0-A
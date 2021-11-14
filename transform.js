const { Transform } = require("stream");
const { caesarCipher } = require("./caesarCipher")

exports.transformStream = (shift) => {
    return new Transform({transform(chunk, _encoding, callback){
        this.push(caesarCipher(chunk.toString('utf8'), +shift));
        callback();
    }})
}
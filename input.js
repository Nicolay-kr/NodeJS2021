const fs = require("fs");

exports.inputStream = file => {
    if(file){
        if(fs.existsSync(file)) {
            return fs.createReadStream(file)
        } else {
            throw new Error(`Input file doesn't exist`);
        }
    }
    return process.stdin
}

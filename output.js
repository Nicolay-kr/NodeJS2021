const fs = require("fs");

exports.outputStream = file => {
    if(file){
        if(fs.existsSync(file)) {
            return fs.createWriteStream(file, {flags:'a'})
        } else {
           throw new Error(`Output file doesn't exist`);
        }
    }
    return process.stdout
}
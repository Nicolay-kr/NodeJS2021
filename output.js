const fs = require("fs");

exports.outputStream = file => {
    if(file){
        if(fs.existsSync(file)) {
            return fs.createWriteStream(file, {flags:'a'})
        } else {
            console.error("output file doesn't exist")
            process.exit(9);
        }
    }
    return process.stdin
}
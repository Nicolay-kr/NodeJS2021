const fs = require("fs");

exports.inputStream = file => {
    if(file){
        if(fs.existsSync(file)) {
            return fs.createReadStream(file)
        } else {
            console.error("input file doesn't exist"); -
            process.exit(9);
        }
    }
    return process.stdin
}

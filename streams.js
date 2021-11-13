const fs = require('fs');
const { pipeline } = require('stream');

const input = fs.createReadStream('input.txt', 'utf-8');
const output = fs.createWriteStream('output.txt');

pipeline(
    input,
    output,
    err => {
        if (err) {
            // обрабатываем ошибки
        }
    }
);

module.exports = pipeline;
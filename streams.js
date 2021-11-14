const { pipeline } = require('stream');
const { inputStream } = require('./input');
const { outputStream } = require('./output');
const { transformStream } = require('./transform');

exports.streams = ( config, input, output ) => {
    if( !config ) {
        console.error("Config are required");
        process.exit(9);
    }

    pipeline(
        inputStream(input),
        transformStream(config),
        outputStream(output),
        err => {
            if (err) {
                console.error("Errore", err);
                process.exit(9);
            }
        }
    )
}
const { pipeline } = require('stream');
const { inputStream } = require('./input');
const { outputStream } = require('./output');
const { transformStream } = require('./transform');

exports.streams = ( shift, action, input, output ) => {
    if( !shift || !action ) {
        console.error("Shift and action are required");
        process.exit(9);
    }
    shift = action === "encode"? shift * 1 : shift * -1;

    pipeline(
        inputStream(input),
        transformStream(shift),
        outputStream(output),
        err => {
            if (err) {
                console.error("Errore", err);
                process.exit(9);
            }
        }
    )
}
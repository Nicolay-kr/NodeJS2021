const { streams } = require("./streams.js");
const { stdout, exit } = process;

const allowedFlags = ['-s', '--shift', '-i', '--input', '-o', '--output', '-a', '--action'];
const flags = process.argv.slice(2);

Array.from(flags).forEach(flag => {
    if(flag.startsWith("-")){
        if (!allowedFlags.includes(flag)) {
            stdout.write(`Flag ${flag} is incorrect`);
            stdout.write(`\nYou can use only -s, --shift, -i, --input', -o, --output, '-a', --action`);
            exit(9);
        }
    }
});

function getValue(shortFlaf,longFlaf) {
    const flagIndex = process.argv.indexOf(shortFlaf||longFlaf);
    return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
}

streams(  getValue('-s','--shift'),getValue('-a','--action'), getValue('-i','--input'), getValue('-o','--output'));

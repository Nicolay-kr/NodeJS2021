const { streams } = require("./streams.js");
const { stdout, exit } = process;

const allowedFlags = ['-c', '--config', '-i', '--input', '-o', '--output'];
const flags = process.argv.slice(2);
const flagsArr = Array.from(flags);

flagsArr.forEach(flag => {
    if(flag.startsWith("-")){
        if (!allowedFlags.includes(flag)) {
            stdout.write(`Flag ${flag} is incorrect`);
            stdout.write(`\nYou can use only -c, --config, -i, --input', -o, --output`);
            exit(9);
        }
        let numberOfRepetitions = flagsArr.filter(item=>item === flag.toString()).length
        if (numberOfRepetitions > 1){
            console.error(`Flag ${flag} repeated ${numberOfRepetitions}. Flags must not be repeated`);
            exit(9);
        }
    }
});
// C1-C1-R0-A

function getValue(shortFlaf,longFlaf) {
    const flagIndex = process.argv.indexOf(shortFlaf||longFlaf);
    return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
}




streams( getValue('-c','--config'), getValue('-i','--input'), getValue('-o','--output'));

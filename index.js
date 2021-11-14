const { Command } = require("commander");
const { process } = require("./process");

const prog = new Command();
prog
.storeOptionsAsProperties(false).version("0.0.1")
.options("-s, --shift <type>","a shift", value => value)
.options("-i, --input <type>","file input", value => value)
.options("-o, --output <type>","file output", value => value)
.options("-a, --action <type>","action ancode/decode", value => value)
.action(() => {
    const { action, shift, input, output } = program.opts();
    process(
        shift,
        action,
        input,
        output
    )
})
.parse(process.argv)
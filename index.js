const { streams } = require("./streams.js");
const { stdout, exit } = process;

function configValidation(argument) {
  let checkCayserAndRot = /[C,R][0,1]/;
  let checkCayserAtbash = /^A$/;

  let ciphersArr = argument.split("-");

  ciphersArr.forEach((key) => {
    if (
      key.match(checkCayserAndRot) === null &&
      key.match(checkCayserAtbash) === null
    ) {
      console.error(`Key ${key} of cipher is incorrect`);
      exit(9);
    }
  });

  return argument;
}
function flagsValidation(flags) {
  const allowedFlags = ["-c", "--config", "-i", "--input", "-o", "--output"];
  const flagsArr = Array.from(flags);
  flagsArr.forEach((flag) => {
    if (flag.startsWith("-")) {
      if (!allowedFlags.includes(flag)) {
        stdout.write(`Flag ${flag} is incorrect`);
        stdout.write(
          `\nYou can use only -c, --config, -i, --input', -o, --output`
        );
        exit(9);
      }
    }
  });
  let unicFlags = [];
  flagsArr.forEach((item) => {
    if (!unicFlags.includes(item)){
      unicFlags.push(item);
    }else{
      console.error(`Flags must not be repeated`);
    exit(9);
    }
  });
}

const parseArguments = (arguments) => {
  flagsValidation(arguments)

  const getArgument = (shortFlag, longFlag) => {
    const flagIndex = process.argv.indexOf(shortFlag || longFlag);
    let argument = flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
    if (shortFlag === "-c" || longFlag === "--config") {
      return configValidation(argument);
    }
    return argument;
  };

  streams(
    getArgument("-c", "--config"),
    getArgument("-i", "--input"),
    getArgument("-o", "--output")
  );
};

parseArguments(process.argv.slice(2));

module.exports = {configValidation,flagsValidation,parseArguments}

const { streams } = require("./streams.js");
const { stderr, exit } = process;
const { configValidation } = require("./validators/configValidation");
const { flagsValidation } = require("./validators/flagsValidation");

const parseArguments = (flags) => {
  try {
    flagsValidation(flags);
  } catch (error) {
    stderr.write(error.toString());
    exit(9);
  }
  
  const getArgument = (shortFlag, longFlag) => {
    const flagIndex = process.argv.indexOf(shortFlag || longFlag);
    let argument = flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
    if(argument){
      if (shortFlag === "-c" || longFlag === "--config") {
        try {
          return configValidation(argument);
        } catch (error) {
          stderr.write(error.toString());
          exit(9);
        }
      
    }
    return argument;

    }
    
  };

  streams(
    getArgument("-c", "--config"),
    getArgument("-i", "--input"),
    getArgument("-o", "--output")
  );
};

parseArguments(process.argv.slice(2));

module.exports = { parseArguments };

const { streams } = require("./streams.js");
const { stdout, exit } = process;

const allowedFlags = ["-c", "--config", "-i", "--input", "-o", "--output"];
const flags = process.argv.slice(2);
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
// C1-C1-R0-A

function getValue(shortFlag, longFlag) {

  const flags = process.argv.slice(2);
  const flagsArr = Array.from(flags);

  let numberOfRepetitions = flagsArr.filter(
    (item) => item === shortFlag.toString() || item === longFlag.toString()
  ).length;

  if (numberOfRepetitions > 1) {
    console.error(
      `Flags must not be repeated`
    );
    exit(9);
  }

  const flagIndex = process.argv.indexOf(shortFlag || longFlag);
  let argument = flagIndex !== -1 ? process.argv[flagIndex + 1] : null;

  


  if(shortFlag==="-c"||longFlag==="--config"){
      let checkCayserAndRot = /[C,R,][0,1]/;
      let checkCayserAtbash = /^A$/;

      let ciphersArr = argument.split("-");

  ciphersArr.forEach((key)=>{
      if(key.match(checkCayserAndRot)===null && key.match(checkCayserAtbash)===null){
        console.error(
            `Key ${key} of cipher is incorrect`
          );
          exit(9);

      };
  })
  }

  return argument
}

streams(
  getValue("-c", "--config"),
  getValue("-i", "--input"),
  getValue("-o", "--output")
);

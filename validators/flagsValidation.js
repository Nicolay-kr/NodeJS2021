const { stdout, stderr, exit } = process;

function flagsValidation(flags) {
    if( typeof flags === "string"){
        flags = flags.split(' ')
    }
  const allowedFlags = ["-c", "--config", "-i", "--input", "-o", "--output"];
  const flagsArr = Array.from(flags);
  flagsArr.forEach((flag) => {
    if (flag.startsWith("-")) {
      if (!allowedFlags.includes(flag)) {
        throw new Error(`You provided incorrect argument`);
      }
    }
  });
  let countConfigFlag = flagsArr.filter(
    (item) => item.toString() === "-c" || item.toString() === "--config"
  ).length;
  if (countConfigFlag > 1) {
    throw new Error(`You provided config argument more than once`);
  }else if(countConfigFlag === 0){
    throw new Error(`You should provided config argument`);
  }

  let countImportFlag = flagsArr.filter(
    (item) => item.toString() === "-i" || item.toString() === "--input"
  ).length;
  if (countImportFlag > 1) {
    throw new Error(`You provided input argument more than once`);
  }

  let countOutputFlag = flagsArr.filter(
    (item) => item.toString() === "-o" || item.toString() === "--output"
  ).length;
  if (countOutputFlag > 1) {
    throw new Error(`You provided output argument more than once`);
  }
}

module.exports = { flagsValidation };

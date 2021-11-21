function configValidation(argument) {
    let checkCayserAndRot = /[C,R][0,1]/;
    let checkCayserAtbash = /^A$/;
  
    let ciphersArr = argument.split("-");
  
    ciphersArr.forEach((key) => {
      if (
        key.match(checkCayserAndRot) === null &&
        key.match(checkCayserAtbash) === null
      ) {
        throw new Error(`Key of cipher is incorrect`);
      }
    });
  
    return argument;
  }

  module.exports = {configValidation}
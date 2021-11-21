const { caesarCipher } = require("../caesarCipher");
const { atbash } = require("../atbash");
const { rot8 } = require("../rot8");
const { configValidation } = require("../validators/configValidation");
const { flagsValidation } = require("../validators/flagsValidation");
const { inputStream } = require("../input");
const { outputStream } = require("../output");

describe("Testing flagsValidation ", () => {
  test("should return error if get the same cli argument twice", () => {
    const mockFn = jest
      .fn()
      .mockImplementationOnce(() => flagsValidation("-c C1-C1-A-R0 -c C1"));
    expect(mockFn).toThrowError(
      new Error(`You provided config argument more than once`)
    );
  });

  test("should return error if User doesn't pass -c or --config argument", () => {
    const mockFn = jest
      .fn()
      .mockImplementationOnce(() =>
        flagsValidation(`./input.txt" -i ./input.txt" -o ./output.txt`)
      );
    expect(mockFn).toThrowError(
      new Error(`You should provided config argument`)
    );
  });

  test("should return error if apply two same output flag", () => {
    const mockFn = jest
      .fn()
      .mockImplementationOnce(() =>
        flagsValidation(
          `-c C1-C1-R0-A -i ./input.txt" -o ./output.txt -o ./output.txt`
        )
      );
    expect(mockFn).toThrowError(
      new Error(`You provided output argument more than once`)
    );
  });

  test("should return error if apply incorrect flag", () => {
    const mockFn = jest
      .fn()
      .mockImplementationOnce(() =>
        flagsValidation(`-c C1-C1-R0-A -i ./input.txt" -k -o ./output.txt`)
      );
    expect(mockFn).toThrowError(new Error(`You provided incorrect argument`));
  });
});

describe("Testing configValidation and check if it has {XY(-)}n format ", () => {
  test("should return error if User passes incorrent symbols in argument for --config", () => {
    const mockFn = jest
      .fn()
      .mockImplementationOnce(() => configValidation(`K2`));
    expect(mockFn).toThrowError(new Error(`Key of cipher is incorrect`));
  });

  test("should return error if Y get value unlike of 1 or 2", () => {
    const mockFn = jest
      .fn()
      .mockImplementationOnce(() => configValidation(`C2`));
    expect(mockFn).toThrowError(new Error(`Key of cipher is incorrect`));
  });

  test("should work if it get correct cipher", () => {
    const mockFn = jest.fn(() => configValidation(`C1-C1-A-R0`));
    mockFn();
    expect(mockFn).toHaveReturned();
  });
});

describe("Testig input stream", () => {
  test("should return error if User passes -i argument with path that doesn't exist", () => {
      console.log(typeof inputStreame )
    const mockFn = jest
      .fn()
      .mockImplementationOnce(() => inputStream("./inp.txt"));
    expect(mockFn).toThrowError(
      new Error(`Input file doesn't exist`)
    );
  });
});

describe("Testig output stream", () => {
    test("should return error if User passes -o argument with path that doesn't exist", () => {
        console.log(typeof inputStreame )
      const mockFn = jest
        .fn()
        .mockImplementationOnce(() => outputStream("./out.txt"));
      expect(mockFn).toThrowError(
        new Error(`Output file doesn't exist`)
      );
    });
  });

describe("Testing caesarCipher", () => {
  test("shold return correct cipher", () => {
    const cipher = caesarCipher(`This is secret. Message about "_zZ_" symbol!`);
    expect(cipher).toEqual(`Uijt jt tfdsfu. Nfttbhf bcpvu "_aA_" tzncpm!`);
  });

  test("shold return correct cipher", () => {
    const cipherDecode = caesarCipher(
      `This is secret. Message about "_aA_" symbol!`,
      false
    );
    expect(cipherDecode).toEqual(
      `Sghr hr rdbqds. Ldrrzfd zants "_zZ_" rxlank!`
    );
  });
});

describe("Testing rot8", () => {
  test("shold return correct cipher", () => {
    const cipher = rot8(`This is secret. Message about "_zZ_" symbol!`);
    expect(cipher).toEqual(`Bpqa qa amkzmb. Umaaiom ijwcb "_hH_" agujwt!`);
  });

  test("shold return correct cipher", () => {
    const cipherDecode = rot8(
      `This is secret. Message about "_aA_" symbol!`,
      false
    );
    expect(cipherDecode).toEqual(
      `Lzak ak kwujwl. Ewkksyw stgml "_sS_" kqetgd!`
    );
  });
});

describe("Testing atbash", () => {
  test("shold return correct cipher", () => {
    const cipher = atbash(`This is secret. Message about "_" symbol!`);
    expect(cipher).toEqual(`Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!`);
  });
});

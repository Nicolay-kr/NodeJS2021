const { caesarCipher } = require("../caesarCipher");
const { atbash } = require("../atbash");
const { rot8 } = require("../rot8");

describe("Test caesarCipher", () => {
  test("shold return correct cipher", () => {
    const cipher = caesarCipher(`This is secret. Message about "_zZ_" symbol!`);
    expect(cipher).toEqual(`Uijt jt tfdsfu. Nfttbhf bcpvu "_aA_" tzncpm!`);
  });

  test("shold return correct cipher", () => {
    const cipherDecode = caesarCipher(`This is secret. Message about "_aA_" symbol!`, false);
    expect(cipherDecode).toEqual(`Sghr hr rdbqds. Ldrrzfd zants "_zZ_" rxlank!`);
  });
});

describe("Test rot8", () => {
  test("shold return correct cipher", () => {
    const cipher = rot8(`This is secret. Message about "_zZ_" symbol!`);
    expect(cipher).toEqual(`Bpqa qa amkzmb. Umaaiom ijwcb "_hH_" agujwt!`);
  });

  test("shold return correct cipher", () => {
    const cipherDecode = rot8(`This is secret. Message about "_aA_" symbol!`, false);
    expect(cipherDecode).toEqual(`Lzak ak kwujwl. Ewkksyw stgml "_sS_" kqetgd!`);
  });
});

describe("Test atbash", () => {
  test("shold return correct cipher", () => {
    const cipher = atbash(`This is secret. Message about "_" symbol!`);
    expect(cipher).toEqual(`Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!`);
  });
});

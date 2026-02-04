const { expect } = require('chai');
const hexToRgb = require('../src/utils/hextorgb');

describe("hexToRgb function", () => {
    it("converts #FFFFFF to RGB", () => {
        expect(hexToRgb("#FFFFFF")).to.deep.equal({ r: 255, g: 255, b: 255 });
    });

    it("converts 000000 to RGB", () => {
        expect(hexToRgb("000000")).to.deep.equal({ r: 0, g: 0, b: 0 });
    });

    it("throws error on invalid hex", () => {
        expect(() => hexToRgb("GGGGGG")).to.throw("Invalid HEX color");
    });
});
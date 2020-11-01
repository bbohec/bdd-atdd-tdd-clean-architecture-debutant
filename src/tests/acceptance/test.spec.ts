import 'mocha';
import chai = require("chai");
const expect = chai.expect;


const arr = [1];
const foundStuff = arr.find(stuff => stuff === 2)


describe("TEST", () => {
    it("true must be true", () => {
        expect(true).is.true
    })
    it("false must be false", () => {
        expect(false).is.false
    })
    it("true must not be false", () => {
        expect(true).is.not.false
    })
    it("false must not be true", () => {
        expect(false).is.not.true
    })
    it("found stuff is 1", () => {
        expect(foundStuff).is.equal(1)
    })
})
import  toInteger  from "./../src/toInteger.js";
import chai from "./../node_modules/chai/chai.js";
import { assert } from "chai";

describe("ToInteger function", function() {
    it("toInteger(3.2) should be equal to 3", function() {
        assert.equal(toInteger(3.2), 3);
    });
    it("toInteger(Number.MIN_VALUE) should be equal to 0", function() {
        assert.equal(toInteger(Number.MIN_VALUE), 0);
    });
    it("toInteger(Infinity) should be equal to 1.7976931348623157e+308", function() {
        assert.equal(toInteger(Infinity), 1.7976931348623157e+308);
    });
    it("toInteger('3.2') should be equal to 3", function() {
        assert.equal(toInteger('3.2'), 3);
    });
    it("toInteger('a') should be equal to 0", function() {
        assert.equal(toInteger('a'), 0);
    });
});
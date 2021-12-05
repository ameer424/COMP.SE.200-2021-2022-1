import  toNumber  from "./../src/toNumber.js";
import chai from "./../node_modules/chai/chai.js";
import { assert } from "chai";

describe("IsNumber function", function() {
    it("toNumber(3.2) should be equal to 3.2", function() {
        assert.equal(toNumber(3.2), 3.2);
    });
    it("toNumber(Number.MIN_VALUE) should be equal to 5e-324", function() {
        assert.equal(toNumber(Number.MIN_VALUE), 5e-324);
    });
    it("toNumber(Infinity), should be equal to Infinity", function() {
        assert.equal(toNumber(Infinity), Infinity);
    });
    it("toNumber(0/0) should be equal to NaN", function() {
        assert.isNaN(toNumber(0/0));
    });
    it("toNumber(4/0) should be equal to Infinity", function() {
        assert.equal(toNumber(4/0), Infinity);
    });
});
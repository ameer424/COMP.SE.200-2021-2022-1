import  upperFirst  from "./../src/upperFirst.js";
import chai from "./../node_modules/chai/chai.js";
import { assert } from "chai";

describe("UpperFirst function", function() {
    it("upperFirst('fred') should be equal to 'Fred'", function() {
        assert.equal(upperFirst('fred'), 'Fred');
    });
    it("upperFirst('FRED') should be equal to 'FRED'", function() {
        assert.equal(upperFirst('FRED'), 'FRED');
    });
})
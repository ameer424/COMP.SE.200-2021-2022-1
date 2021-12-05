import  toString  from "./../src/toString.js";
import chai from "./../node_modules/chai/chai.js";
import { assert } from "chai";

describe("ToString function", function() {
    it("toString(null) should be equal to ''", function() {
        assert.equal(toString(null), '');
    });
    it("toString(-0) should be equal to '-0'", function() {
        assert.equal(toString(-0), '-0');
    });
    it("toString([1, 2, 3]) should be equal to '1,2,3'", function() {
        assert.equal(toString([1, 2, 3]), '1,2,3');
    });
});
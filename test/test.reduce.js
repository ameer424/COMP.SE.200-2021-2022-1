import  reduce  from "./../src/reduce.js";
import chai from "./../node_modules/chai/chai.js";
import { assert } from "chai";

describe("Reduce function", function() {
    it("reduce([1, 2], (sum, n) => sum + n, 0) should be equal to 3", function() {
        assert.equal(reduce([1, 2], (sum, n) => sum + n, 0), 3);
    });
    it("reduce([1, 2, 0], (mul, n) => mul * n, 1) should be equal to 0", function() {
        assert.equal(reduce([1, 2, 0], (mul, n) => mul * n, 1), 0);
    });
});
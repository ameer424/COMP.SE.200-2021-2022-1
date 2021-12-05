import  slice  from "./../src/slice.js";
import chai from "./../node_modules/chai/chai.js";
import { assert } from "chai";

describe("Slice function", function() {
    it("slice([1, 2, 3, 4], 2) should be equal to [3, 4]", function() {
        assert.sameMembers(slice([1, 2, 3, 4], 2), [3, 4]);
    });
    it("slice([], 2, 4) should be equal to []", function() {
        assert.sameMembers(slice([], 2, 4), []);
    });
    it("slice([1, 2, 3, 4], 2, 3) should be equal to [3]", function() {
        assert.sameMembers(slice([1, 2, 3, 4], 2, 3), [3]);
    });
})
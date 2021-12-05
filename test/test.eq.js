import  eq  from "./../src/eq.js";
import chai from "./../node_modules/chai/chai.js";
import { assert } from "chai";


describe('Equality function', function(){
    const object = {'a' : 1};
    const other = {'a' : 1};
    it("eq(object, object) should be true", function() {
        assert.isTrue(eq(object, object));
    });
    it("eq(object, other) should be false", function() {
        assert.isFalse(eq(object, other));
    });
    it("rq('a', 'a') should be true", function() {
        assert.isTrue(eq('a', 'a'));
    });
    it("eq('a', Object('a')) should be false", function() {
        assert.isFalse(eq('a'), Object('a'));
    });
    it("eq(NaN, NaN) should be true", function() {
        assert.isTrue(eq(NaN, NaN));
    });
});
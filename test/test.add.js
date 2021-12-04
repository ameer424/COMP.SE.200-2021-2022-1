import  add  from "./../src/add.js";
import chai from "./../node_modules/chai/chai.js";
import { assert } from "chai";
describe('Add function', function(){
    it('add(2, 3) should be equal to 5', function() {
        assert.equal(add(2, 3), 5);
    });
    it('add(0, 1) should be equal to 1', function() {
        assert.equal(add(0, 1), 1);
    });
    it('add(4, -1) should be equal to 3', function() {
        assert.equal(add(4, -1), 3);
    });
    it('add(-3, -7) should equal to -10', function() {
        assert.equal(add(-3, -7), -10);
    });
    it('add(-10, 0) should be equal to -10', function() {
        assert.equal(add(-10, 0), -10);
    });
    it('add(40000000, 60000000) should not crash', function() {
        assert.equal(add(40000000, 60000000), 100000000);
    });
});
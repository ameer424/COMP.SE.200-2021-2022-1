import  divide  from "./../src/divide.js";
import chai from "./../node_modules/chai/chai.js";
import { assert } from "chai";

describe('Divide function', function(){
    it('divide(6, 4) should be equal to 1.5', function() {
        assert.equal(divide(3.0, 2.0), 1.5);
    });
    it("divide(4, 0) should be equal to NAN", function() {
        assert.isNaN(divide(4, 0));
    });
});
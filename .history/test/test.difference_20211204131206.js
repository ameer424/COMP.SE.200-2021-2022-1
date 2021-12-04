import  difference  from "./../src/difference.js";
import chai from "./../node_modules/chai/chai.js";
import { assert } from "chai";

describe('Difference function', function(){
    it('difference([2,1],[2,3]) should be equal to [1]',function(){
        assert.isArray(difference([2, 1], [2, 3]), [])
        assert.equal(difference([2,1], [2,3]), [1]);
    });
});
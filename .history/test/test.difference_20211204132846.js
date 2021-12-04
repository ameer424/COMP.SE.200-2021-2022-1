import  difference  from "./../src/difference.js";
import chai from "./../node_modules/chai/chai.js";
import { assert } from "chai";

describe('Difference function', function(){
    it('difference([2,1],[2,3]) should be equal to [1]',function(){
        assert.isArray(difference([2, 1], [2, 3]));
        assert.sameMembers(difference([2,1], [2,3]), [1]);
    });
    it('difference([],[]) should be equal to []',function(){
        assert.isArray(difference([], []));
        assert.sameMembers(difference([], []), []);
    });
    it('difference([1, 2, 3, 3, 3],[3]) should be equal to []',function(){
        assert.isArray(difference([1, 2, 3, 3, 3], [3]));
        assert.sameMembers(difference([1, 2, 3, 3, 3], [3]), [1, 2]);
    });

    it('difference([],[3]) should be equal to []',function(){
        assert.isArray(difference([1, 2, 3, 3, 3], [3]));
        assert.sameMembers(difference([1, 2, 3, 3, 3], [3]), [1, 2]);
    });
});
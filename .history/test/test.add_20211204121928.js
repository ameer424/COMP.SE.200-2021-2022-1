var mocha = require('mocha');
var addJs = require('../src/add');
// Luodaan joku muuttuja
var assert = require('assert');
describe('Add function', function(){
    it('add(2, 3) should be equal to 5', function() {
        mocha
        assert.equal(add(2, 3), 5);
    });
});
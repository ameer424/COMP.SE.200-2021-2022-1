const mocha = require("mocha");
const chai = require("chai")
const addJs = require('./../src/add.js');

var assert = require('assert');
describe('Add function', function(){
    it('add(2, 3) should be equal to 5', function() {
        assert.equal(addJs.add(2, 3), 5);
    });
});
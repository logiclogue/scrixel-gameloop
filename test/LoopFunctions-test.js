var assert = require('chai').assert;
var LoopFunctions = require('../src/LoopFunctions');


describe('LoopFunctions', function () {
    var loop;

    describe('#constructor()', function () {
        loop = new LoopFunctions();

        it('should set #draw to an empty function', function () {
            assert.equal(typeof loop.draw, 'function');
        });

        it('should set #update to an empty function', function () {
            assert.equal(typeof loop.update, 'function');
        });
    });
});

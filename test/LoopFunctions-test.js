var assert = require('chai').assert;
var LoopFunctions = require('../src/LoopFunctions');


describe('LoopFunctions', function () {
    var loop;

    describe('#constructor()', function () {
        loop = new LoopFunctions();

        it('should set #drawFunction to an empty function', function () {
            assert.equal(typeof loop.drawFunction, 'function');
        });

        it('should set #updateFunction to an empty function', function () {
            assert.equal(typeof loop.updateFunction, 'function');
        });
    });
});

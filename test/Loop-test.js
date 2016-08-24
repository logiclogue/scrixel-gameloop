var assert = require('chai').assert;
var Loop = require('../src/Loop');


describe('Loop', function () {
    var loop;

    describe('#constructor()', function () {
        loop = new Loop();

        it('should set #drawFunction to an empty function', function () {
            assert.equal(typeof loop.drawFunction, 'function');
        });

        it('should set #updateFunction to an empty function', function () {
            assert.equal(typeof loop.updateFunction, 'function');
        });
    });
});

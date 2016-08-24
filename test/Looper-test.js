var assert = require('chai').assert;
var LoopFunctions = require('../src/LoopFunctions.js');
var Looper = require('../src/Looper');


describe('Looper', function () {
    var loopFunctions = new LoopFunctions();
    var looper = new Looper(loopFunctions);

    loopFunctions.draw = function () {
        return 'start';
    };
    
    loopFunctions.update = function () {
        return 'stop';
    };

    describe('#constructor(LoopFunctions)', function () {
        it('should throw error if looper isn\'t passed', function () {
            assert.throws(Looper, ReferenceError);
        });

        it('should set #loopFunctions with passed in object', function () {
            assert.equal(looper.loopFunctions, loopFunctions);
        });
    });
});

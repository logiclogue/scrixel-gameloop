var LoopFunctions = require('./LoopFunctions');


function Looper(loopFunctions) {
    if (!(loopFunctions instanceof LoopFunctions)) {
        throw new ReferenceError('not instance of LoopFunctions');
    }

    this.loopFunctions = loopFunctions;
}

(function (proto_) {

    proto_.start = function () {

    };

    proto_.stop = function () {

    };

}(Looper.prototype));

module.exports = Looper;

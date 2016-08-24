function LoopFunctions() {
    this.draw = this._emptyFunction;
    this.update = this._emptyFunction;
}

(function (proto_) {

    proto_._emptyFunction = function () {

    };

}(LoopFunctions.prototype));

module.exports = LoopFunctions;

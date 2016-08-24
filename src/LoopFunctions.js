function LoopFunctions() {
    this.drawFunction = this._emptyFunction;
    this.updateFunction = this._emptyFunction;
}

(function (proto_) {

    proto_._emptyFunction = function () {

    };

}(LoopFunctions.prototype));

module.exports = LoopFunctions;

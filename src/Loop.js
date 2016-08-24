function Loop() {
    this.drawFunction = this._emptyFunction;
    this.updateFunction = this._emptyFunction;
}

(function (proto_) {

    proto_._emptyFunction = function () {

    };

}(Loop.prototype));

module.exports = Loop;

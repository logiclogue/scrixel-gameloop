var LoopFunctions = require('./LoopFunctions');


function Looper(loopFunctions) {
    if (!(loopFunctions instanceof LoopFunctions)) {
        throw new ReferenceError('not instance of LoopFunctions');
    }

    this.loopFunctions = loopFunctions;

    this._animMethodIndex = {
        timeout: 0,
        animation: 1,
        interval: 2
    };
    this._animationMethod = this._animMethodIndex.animation;
    this._lastFrameTimeMs = 0;
    this._maxFPS = 120;
    this._maxFPMS = 1000 / this._maxFPS;
    this._delta = 0;
    this._lastFpsUpdate = 0;
    this._framesThisSecond = 0;
    this._timestep = 1000 / 60;
    this._fps = 30;
    this._lastDelta = 0;
    this._cycles = 0;
    this._isStopping = false;

    this._getAnimMethod();
}

(function (proto_) {

    proto_.start = function () {
        this._isStopping = false;

        this._loop();
    };

    proto_.stop = function () {
        this._isStopping = true;
    };


	proto_._loop = function(timestamp) {
        if (this._isStopping) {
            return;
        }

        if (this._animationMethod !== this._animMethodIndex.animation) {
            timestamp = Date.now();
        }

		// credit to: http://www.isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing
		// also note: http://jsfiddle.net/IceCreamYou/rnqLfz14/6/light/
		if (timestamp < this._lastFrameTimeMs + this._maxFPMS) {
            if (this._animationMethod === this._animMethodIndex.animation) {
                requestAnimationFrame(this._loop.bind(this));
            }
            else if (this._animationMethod === this._animMethodIndex.timeout) {
                setTimeout(this._loop.bind(this), 1);
            }

	        return;
	    }
		
	    this._delta = (timestamp - this._lastFrameTimeMs) + this._lastDelta;
	    this._lastFrameTimeMs = timestamp;

	    if (timestamp > this._lastFpsUpdate + 1000) {
	        this._fps = (0.25 * this._framesThisSecond) + (0.75 * this._fps);

	        this._lastFpsUpdate = timestamp;
	        this._framesThisSecond = 0;
	    }

	    this._framesThisSecond++;

	    var numUpdateSteps = 0;

	    while (this._delta >= this._timestep) {
	    	this._cycles++;
	        this.loopFunctions.update(this._timestep);
	        this._delta -= this._timestep;

	        if (++numUpdateSteps >= 240) {
	            this._delta = 0;
	            break;
	        }
	    }
	   	
        if (isNaN(this._delta)) {
            this._lastDelta = 0;
        }
        else {
            this._lastDelta = this._delta;
        }

        // Draws
        this.loopFunctions.draw();

		// Call itself
		if (this._animationMethod === this._animMethodIndex.animation) {
			requestAnimationFrame(this._loop.bind(this));
        }
        else if (this._animationMethod === this._animMethodIndex.timeout) {
			setTimeout(this._loop.bind(this), 1);
		}
	};
    
    proto_._getAnimMethod = function () {
        if (typeof window === 'undefined') {
            this._animationMethod = this._animMethodIndex.timeout;

            return;
        }

        if (!window.requestAnimationFrame) {
            this._animationMethod = this._animMethodIndex.timeout;
        }
    };

}(Looper.prototype));

module.exports = Looper;

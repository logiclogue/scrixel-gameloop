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


    proto_._loop = function () {
        this.loopFunctions.draw();
        this.loopFunctions.update();
    };

	proto_._loop = function(timestamp) {
        if (window.requestAnimationFrame == null) {
            timestamp = new Date().getTime();
        }

		// credit to: http://www.isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing
		// also note: http://jsfiddle.net/IceCreamYou/rnqLfz14/6/light/
		if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
            if (window.requestAnimationFrame != null) {
                requestAnimationFrame(mod.gameLoop);
            }
            else {
                setTimeout(mod.gameLoop, 1);
            }

	        return;
	    }
		//console.log(delta);
		
	    delta = (timestamp - lastFrameTimeMs) + lastDelta;
	    lastFrameTimeMs = timestamp;

	    if (timestamp > lastFpsUpdate + 1000) {
	        fps = 0.25 * framesThisSecond + 0.75 * fps;
	        //console.log(fps);

	        lastFpsUpdate = timestamp;
	        framesThisSecond = 0;
	    }

	    framesThisSecond++;

	    var numUpdateSteps = 0;

	    //console.log(delta + ", " + timestep);
	    //timestep = 17;
	    while (delta >= timestep) {
	    	publc.cycles++;
	        update(timestep);
	        delta -= timestep;

	        if (++numUpdateSteps >= 240) {
	            delta = 0;
	            break;
	        }
	    }
	   	
	   	if (isNaN(delta) ? lastDelta = 0 : lastDelta = delta);
	    //lastDelta = delta;
	    //numTotal += numUpdateSteps;

	    draw();

		// call itself
		if (window.requestAnimationFrame != null) {
			window.requestAnimationFrame(mod.gameLoop);
        }
        else {
			setTimeout(mod.gameLoop, 1);
		}
	};

}(Looper.prototype));

module.exports = Looper;

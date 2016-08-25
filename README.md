# scrixel-gameloop

Game loop for the Scrixel game engine.

## Installation

`npm install --save scrixel-collision`

## Example

### Require

`var ScrixelGameLoop = require('scrixel-gameloop');`

### Creating a LoopFunctions Object

```
var loopFunctions = new ScrixelGameLoop.LoopFunctions();
var x = 0;

loopFunctions.draw = function () {
    // All code that draws the scene.

    // Example:
    ctx.rect(x, 0, 100, 100);
};

loopFunctions.update = function () {
    // All code that updates the scene.

    // Example:
    x += 2;
};
```

### Creating a Looper

Pass in your `LoopFunctions` instance, into the `Looper` constructor. This will
create a `Looper` instance which will use your `LoopFunctions` instance's
functions to draw and update the scene.

```
var looper = new ScrixelGameLoop.Looper(loopFunctions);

// Starts the animation.
looper.start();

// Stops the animation after 10 seconds.
setTimeout(function () {
    looper.stop();
}, 10000);
```

## Tests

In `scrixel-gameloop` root directory, run:

```
npm install
npm test
```

## Author

Jordan Lord

## License

GPLv3. See [LICENSE.txt](LICENSE.txt).

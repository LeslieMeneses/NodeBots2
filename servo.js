var five  = require('johnny-five'),
    board = new five.Board(),
    servo;

board.on('ready', function () {
	new five.Servo({
	  pin: 3,
	  type: "continuous"
	});
});
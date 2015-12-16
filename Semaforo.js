var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
/*
  var led = [];
  var pin = 2;

  	// for
  	
	for (i = 0; i < 2; i++) { 
    	led[i] = new five.Led(pin);
    	led[i].blink(500);
    	pin++;
	}*/

	var ledRojo = new five.Led(4);
	var ledAzul = new five.Led(3);
	var ledVerde = new five.Led(2);


	setTimeout(funRojo, 0);

	function funRojo(){
		ledRojo.on();
		ledVerde.off();
		setTimeout(funAzul, 3000);
	}

	function funAzul(){
		ledRojo.off();
		ledAzul.on();
		setTimeout(funVerde, 3000);
	}

	function funVerde(){
		ledAzul.off();
		ledVerde.on();
		setTimeout(funRojo, 3000);
	}

});


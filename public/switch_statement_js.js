// ignore these lines for now
// just know that the variable 'color' will end up with a random value from the colors array
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

switch (color) {

	case "red":
		console.log("red is the color of blood");
		break;
	case "orange":
		console.log("orange's are orange");
		break;
	case "yellow":
		console.log("yellow is the color of a banana");
		break;
	case "green":
		console.log( color +" is green");
		break;
	case "blue":
		console.log("the sky is blue");
		break;
	default:
		console.log("I\'m not to familiar with that color");

	}

    // todo: create a case statement that will handle every color except indigo and violet
    // todo: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

    // todo: create a default case that will catch indigo and violet
    // todo: for the default case, log: I do not know anything by that color.

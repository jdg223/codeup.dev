// ignore these lines for now
// just know that the variable 'color' will end up with a random value from the colors array
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'red'; // todo, change this to your favorite color from the list

if(color == 'red'){
	console.log("red is the color of a clown\'s nose")
}if(color == 'orange'){
	console.log("Orange is the color of tangerines")
}if(color =='yellow'){
	console.log("yellow is the color o fthe tunas fin")
}if(color == 'green'){
	console.log("Orange is the color of tangerines")
}if(color =='blue'){
	console.log("I wish the riverwalk had blue water")
}else{
	console.log("i dont know anything about that color")
}

var message = (color == favorite) ? "Thats my favorite color" : "This is not my favorite color";
console.log(message);


// todo: Create a block of if/else statements to check for every color except indigo and violet.
// todo: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.
// todo: Have a final else that will catch indigo and violet.
// todo: In the else, log: I do not know anything by that color.

// todo: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.
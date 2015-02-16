var car = {};

car.make = "Toyota";
car.model = "Camry";

 car.makeModel = function(){
console.log("This vehicle is a " + this.make  + this.model)
}

car.honkHonk = function(){

	console.log("The car went honk");
};
var game = {};

game.score = 0;

game.addToScore = function() {
	game.score++
};

game.addToScore();
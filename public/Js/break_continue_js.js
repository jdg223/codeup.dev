var random=Math.floor((Math.random()*50)+1) 

for (var i = 1 ; i <= 50; i++) {

	if (random == i) {
		console.log('Here is an odd number to skip:' + i)
		};
	if(i % 2 !== 0) {
		console.log("Here is an odd number:" + i)
			continue;
		};

}


function doSomething () {
	console.log("we are here")
}


function isEven(input)
{
	var remainder = input % 2;
	if (remainder == 0){

	} else{
		console.log("odd");
	}
}

function sum(a,b)
{
	return a + b;
}
sum(10,3);

function areaOfRectangle(l,h)
{
	console.log ((l * h)/2);
}
function areaOfTriangle(b,h)
{
	console.log((b * h)/2);
}
function areaOfWeirdShape()
{
	var area = areaOfRectangle(10,5) - areaOfTriangle(5,7);
	console.log(area);	
}
areaOfRectangle(10,5);
areaOfTriangle(5,7);
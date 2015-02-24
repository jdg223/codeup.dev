var firstBox = document.getElementById('first-input')
var value = document.getElementById('value')
var equals = document.getElementById('equals')
var clear = document.getElementById('clear')
var adding = document.getElementById('plus')
var subtracting = document.getElementById('minus')
var multiplying = document.getElementById('multiply')
var divideing = document.getElementById('divide')
var decimal = document.getElementById('decimal')
var cosine = document.getElementById('cosine')
var tangent = document.getElementById('tangent')
var sine = document.getElementById('sine')
var absolute = document.getElementById('absolute')
var squareRoot = document.getElementById('square-root')
var logarithm = document.getElementById('log')
var exponent = document.getElementById('exp')
var pi = document.getElementById('pi')
var π = Math.PI 
var leftParan = document.getElementById('left-paran')
var rightParan = document.getElementById('right-paran')
var percent = document.getElementById('percent')
var squared = document.getElementById('squared')
var cubed = document.getElementById('cubed')
var cubedRoot = document.getElementById('cubed-root')
var eulers = document.getElementById('eulers')
var e = Math.E
var random = document.getElementById('random')
var rand = Math.random()
var hex = document.getElementById('hex')
var dec = document.getElementById('dec')
var rpn = document.getElementById('rpn')

// for buttons representing numbers
var allNumbers = [
document.getElementById('1'),
document.getElementById('2'),
document.getElementById('3'),
document.getElementById('4'),
document.getElementById('5'),
document.getElementById('6'),
document.getElementById('7'),
document.getElementById('8'),
document.getElementById('9'),
document.getElementById('0')
]

//for numbers
var numbers = [
parseInt('1'),
parseInt('2'),
parseInt('3'),
parseInt('4'),
parseInt('5'),
parseInt('6'),
parseInt('7'),
parseInt('8'),
parseInt('9'),
parseInt('0')
]

//mathematical operators
var math = [
function add () {
	firstBox.value += "+"
},

function subtract() {
	firstBox.value += "-"
},

function mult () {
	firstBox.value += "*"
},

function div () {
	firstBox.value += "/"
},

function dec () {
	firstBox.value += "."
},
function cosine () {
	value.value += Math.cos(firstBox.value)
},
function tangent () {
	value.value += Math.tan(firstBox.value)
},
function sine () {
	value.value += Math.sin(firstBox.value)
},
function absolute () {
	value.value += Math.abs(firstBox.value)
},
function squareroot () {
	value.value += Math.sqrt(firstBox.value)
},
function logarithm () {
	value.value += Math.log(firstBox.value)
},
function exponent () {
	value.value += Math.exp(firstBox.value)
},
function pi () {
	firstBox.value += 'π'
},
function leftParanthesis () {
	firstBox.value += '('
},
function rightParanthesis() {
	firstBox.value += ')'
},
function percent () {
	value.value += firstBox.value / 100
},
function squared () {
	value.value += firstBox.value * firstBox.value
},
function cubed () {
	value.value += firstBox.value * firstBox.value * firstBox.value
},
function cubedRoot () {
	value.value += firstBox.value / firstBox.value / firstBox.value
},
function eulers () {
	firstBox.value += 'e'
},
function random () {
	firstBox.value += 'rand'
},
function hex () {
	value.value += Math.pow(firstBox.value,firstBox.value.length -= 1).toString(16).toUpperCase()
},
function dec () {
	value.value += Math.floor(parseInt(firstBox.value,16))
},
function rpn () {

 	value.value += firstBox.value.substr(0,0) + firstBox.substr(0,2) + "+"

}
]

// buttons call function that puts value into firstBox
var buttons = [
function change () {
	firstBox.value += numbers[0];
},
function change () {
	firstBox.value += numbers[1];
},
function change () {
	firstBox.value += numbers[2];
},
function change () {
	firstBox.value += numbers[3];
},
function change () {
	firstBox.value += numbers[4];
},
function change () {
	firstBox.value += numbers[5];
},
function change () {
	firstBox.value += numbers[6];
},
function change () {
	firstBox.value += numbers[7];
},
function change () {
	firstBox.value += numbers[8];
},
function change () {
	firstBox.value += numbers[9];
}
]

//evaluates the inputs in firstBox and returns value
var evalu = function evaluation() {
	var calc = eval(firstBox.value)
	value.value = calc
}

// clears firstBox and value
var remove = function takeOffScreen() {
	firstBox.value = " "
	value.value = " "
}

// on click makes button change to coresponding value in firstBox
allNumbers[0].addEventListener('click',buttons[0],false)
allNumbers[1].addEventListener('click',buttons[1],false)
allNumbers[2].addEventListener('click',buttons[2],false)
allNumbers[3].addEventListener('click',buttons[3],false)
allNumbers[4].addEventListener('click',buttons[4],false)
allNumbers[5].addEventListener('click',buttons[5],false)
allNumbers[6].addEventListener('click',buttons[6],false)
allNumbers[7].addEventListener('click',buttons[7],false)
allNumbers[8].addEventListener('click',buttons[8],false)
allNumbers[9].addEventListener('click',buttons[9],false)

// on click makes operators button change to corresponsing value in firstBox
adding.addEventListener('click',math[0],false)
subtracting.addEventListener('click',math[1],false)
multiplying.addEventListener('click',math[2],false)
divideing.addEventListener('click',math[3],false)
decimal.addEventListener('click',math[4],false)
cosine.addEventListener('click',math[5],false)
tangent.addEventListener('click',math[6],false)
sine.addEventListener('click',math[7],false)
absolute.addEventListener('click',math[8],false)
squareRoot.addEventListener('click',math[9],false)
logarithm.addEventListener('click',math[10],false)
exponent.addEventListener('click',math[11],false)
pi.addEventListener('click',math[12],false)
leftParan.addEventListener('click',math[13],false)
rightParan.addEventListener('click',math[14],false)
percent.addEventListener('click',math[15],false)
squared.addEventListener('click',math[16],false)
cubed.addEventListener('click',math[17],false)
cubedRoot.addEventListener('click',math[18],false)
eulers.addEventListener('click',math[19],false)
random.addEventListener('click',math[20],false)
hex.addEventListener('click',math[21],false)
dec.addEventListener('click',math[22],false)
rpn.addEventListener('click',math[23],false)

// on click evalutes firstBox
equals.addEventListener('click',evalu,false)

//on click removes inputs of firstBox and value
clear.addEventListener('click',remove,false)


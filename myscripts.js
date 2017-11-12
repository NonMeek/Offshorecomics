var Strips = ["images/Strip1.jpg", "images/Strip2.PNG", "images/Strip3.PNG", "images/Strip4.PNG", "images/Strip5.PNG"];

var Current = 0;

var myStrip = document.getElementById('Strip');
myStrip.setAttribute('src', Strips[Current]);

function Prev(){
	if(Current == 0)
		Current = Strips.length - 1;
	else
		Current--;
	
	var myStrip = document.getElementById('Strip');
	myStrip.setAttribute('src', Strips[Current]);
}

function Next(){
	if(Current == Strips.length - 1)
		Current = 0
	else
		Current++;
	
	var myStrip = document.getElementById('Strip');
	myStrip.setAttribute('src', Strips[Current]);
}

function Rand(){
	var myRandomStrip = Strips[Math.floor(Math.random() * Strips.length)];
	document.getElementById('Strip').setAttribute('src', myRandomStrip);
}
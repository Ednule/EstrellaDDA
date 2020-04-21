let	p1 = {x: 0, y:0};
let	p2 = {x: window.innerWidth, y:innerHeight};
let	p3 = {x: 0, y: innerHeight};
let	p4 = {x:window.innerWidth, y: 0};
let	p5 = {x:0, y: innerHeight/2};
let	p6 = {x:window.innerWidth, y:innerHeight/2};
let	p7 = {x:window.innerWidth/2, y:0};
let	p8 = {x:window.innerWidth/2, y:innerHeight};


function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	ecuapp(p1,p2);
	ecuapp(p3,p4);
	ecuapp(p5,p6);
	ecuapp(p7,p8);
}

function ecuapp(p1, p2) {
	var p,xi,yi,k;
	var dx = p2.x - p1.x;
	var dy = p2.y - p1.y;

	point(p1.x, p1.y)

	let y=p1.y,x=p1.x;
	
	if (dx > dy || dy == 0) {
		p = dx;
	} else {
		p = dy;
	}

	xi = dx / p;
    yi = dy / p;

	for(k = 0;k < p;k++){
		x += xi;
		y += yi;
		point(x, y);
	}
}
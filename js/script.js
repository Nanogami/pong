let ball
let p1
let p2

function setup(){
  //createCanvas(windowWidth, windowHeight)
  createCanvas(1600, 800)
  p1 = new paleta(1,color("red"))
  p2 = new paleta(2,color("blue"))
  ball = new Ball()
}

function draw(){
	background("#0f962b")
	drawLine()
	ball.draw()
	ball.move()
	p1.draw()
	p2.draw()

	if(keyIsPressed){
		if (keyIsDown(87)) {
			p1.move(-1)
		}
		if (keyIsDown(83)) {
			p1.move(1)
		}
		if (keyIsDown(UP_ARROW)) {
			p2.move(-1)
		}
		if (keyIsDown(DOWN_ARROW)) {
			p2.move(1)
		}				
	}	
}

const drawLine = function(){
	stroke("#fff")
	strokeWeight(4)
	line(width/2, 0, width/2, height)
}
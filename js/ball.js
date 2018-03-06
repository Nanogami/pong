const Ball = function(){
	const r = 25
	let x = Math.floor(width/2)
	let y = Math.floor(height/2)
	let stepX = 5
	let stepY = 10

	const reset = function(){
		x = Math.floor(width/2)
		y = Math.floor(height/2)
		stepX *= Math.round(Math.random()) * 2 - 1
		stepY *= Math.round(Math.random()) * 2 - 1
	}

	const edges = function(){
		if(x - r <= 0 || x + r >= width)
		{
			reset()
		}

		if(y - r <= 0 || y + r >= height)
		{
			stepY = -stepY
		}
	}

	const move = function(){
		x += stepX
		y += stepY
		edges()
	}

	const draw = function(){
		ellipseMode(CENTER)
		fill("yellow")
		ellipse(x, y, r*2, r*2)
	}

	return{
		draw,
		move,
	}
}
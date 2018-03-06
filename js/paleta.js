const paleta = function(player, color){
	const p = player
	const c = color
	const w = 30
	const h = 200
	const speed = 8
	const x = p === 1 ? Math.round(w/2) : width - Math.round(w/2)
	let y = Math.floor(height/2)
	let score = 0

	const draw = function(){
		rectMode(CENTER)
		fill(c)
		noStroke()
		rect(x,y,w,h)
	}

	const move = function(dir){
		y += (speed * dir)
	}
	
	return{
		draw,
		move,
	}
}

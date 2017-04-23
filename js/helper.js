var mousePos;
//canvas.addEventListener uses this function to calculate mouse position
function getMousePos(evt, canvas) {
	var rect = canvas.getBoundingClientRect();

	if(evt.clientX && evt.clientY){
		var x = evt.clientX - rect.left;
		var y = evt.clientY - rect.top;
	}

	var shiftedX = x - zoom * shift[0];
	var shiftedY = y - zoom * shift[1];

	var proj = applyZoom([zoomCenter[0], zoomCenter[1]], [shiftedX, shiftedY], 1/zoom, true);

	var zoomedX = proj.x;
	var zoomedY = proj.y;

	return {
			x: zoomedX,
			y: zoomedY,
			xPhysical: x,
			yPhysical: y
		};
	}


function mouseMove(){
	canvas.addEventListener('mousemove', function(evt){
	   mousePos = getMousePos(evt, canvas);
  }
}

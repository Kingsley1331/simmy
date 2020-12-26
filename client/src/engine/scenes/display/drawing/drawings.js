import Vector, { rotateShape } from "../../../utils/maths/Vector";

export function screenWriter(context, text, position) {
  context.save();
  context.fillStyle = "black";
  context.font = "15px Arial";
  context.fillText(text, position.x, position.y);
  context.restore();
}

export function drawShape(context, vertices, centreOfMass, config) {
  var num = vertices.length;
  var x0 = vertices[0].x + centreOfMass.x;
  var y0 = vertices[0].y + centreOfMass.y;

  context.beginPath();
  context.moveTo(x0, y0);
  for (var j = 1; j < num; j++) {
    var x = vertices[j].x + centreOfMass.x;
    var y = vertices[j].y + centreOfMass.y;
    context.lineTo(x, y);
  }
  context.save();
  for (var prop in config) {
    context[prop] = config[prop];
  }
  context.closePath();
  context.stroke();
  context.fill();
  context.restore();
}

export const drawPolyline = (context, vertices, config, open = false) => {
  var numOfPoints = vertices.length;
  if (numOfPoints) {
    const startingPoint = {
      x: vertices[0].x,
      y: vertices[0].y
    };
    context.beginPath();
    context.moveTo(startingPoint.x, startingPoint.y);
    for (let i = 1; i < numOfPoints; i++) {
      let x = vertices[i].x;
      let y = vertices[i].y;
      context.lineTo(x, y);
    }

    context.save();
    for (let prop in config) {
      context[prop] = config[prop];
    }
    if (!open) {
      context.closePath();
      context.fill();
    }
    context.stroke();
    context.restore();
  }
};

export function drawDot(context, radius, centre, colour) {
  context.save();
  context.fillStyle = colour;
  context.beginPath();
  context.arc(centre.x, centre.y, radius, 0, 2 * Math.PI);
  context.fill();
  context.restore();
}

export function drawLine(context, start, end, config) {
  context.save();
  // context.strokeStyle = 'red';
  // context.lineWidth = 2;
  for (var prop in config) {
    if (typeof context[prop] === "function") {
      context[prop](config[prop]);
    } else {
      context[prop] = config[prop];
    }
  }
  context.beginPath();
  context.moveTo(start.x, start.y);
  context.lineTo(end.x, end.y);
  context.stroke();
  context.restore();
}

export function drawArrow(context, head, shaft, config, length) {
  var start = shaft[0];
  var end = { x: shaft[0].x + shaft[1].x, y: shaft[0].y + shaft[1].y };
  // var vector = shaft[1];
  // var shaftVector = new Vector({x: vector.x - start.x, y: vector.y - start.y});
  var shaftVector = new Vector({ x: shaft[1].x, y: shaft[1].y });

  var magnitude = shaftVector.magnitude;
  if (length) {
    var scale = length / magnitude;
    shaftVector = shaftVector.scalProd(scale);
    end = { x: shaft[0].x + shaftVector.x, y: shaft[0].y + shaftVector.y };
  }
  var referenceVector = new Vector({ x: 0, y: 1 });
  //var angle = shaftVector.findAngle(referenceVector);
  var angle = referenceVector.findAngle(shaftVector);
  var rotatedHead = rotateShape(end, angle, head);

  drawShape(context, rotatedHead, end, config);

  drawLine(context, start, end, config, context);
}

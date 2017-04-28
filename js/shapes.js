var shapeSelection = {
  square: [
      {x: -18, y: -18},
      {x: 18, y: -18},
      {x: 18, y: 18},
      {x: -18, y: 18}
    ],
  bar: [
      {x: -18, y: -126},
      {x: 18, y: -126},
      {x: 18, y: 126},
      {x: -18, y: 126}
    ],
  triangle: [
      {x: -40/2, y: Math.sqrt(3)/6 * 40},
      {x: 40/2, y: Math.sqrt(3)/6 * 40},
      {x: 0, y: -2 * Math.sqrt(3)/6 * 40}
    ],
  star: [
      {x: 0, y: -50},
      {x: 19.0983*Math.sin(2*Math.PI*(36/360)), y: -19.0983*Math.cos(2*Math.PI*(36/360))},
      {x: 50*Math.cos(2*Math.PI*(18/360)), y: -50*Math.sin(2*Math.PI*(18/360))},
      {x: 19.0983*Math.cos(2*Math.PI*(18/360)), y: 19.0983*Math.sin(2*Math.PI*(18/360))},
      {x: 50*Math.sin(2*Math.PI*(36/360)), y: 50*Math.cos(2*Math.PI*(36/360))},
      {x: 0, y: 19.0983},
      {x: -50*Math.sin(2*Math.PI*(36/360)), y: 50*Math.cos(2*Math.PI*(36/360))},
      {x: -19.0983*Math.cos(2*Math.PI*(18/360)), y: 19.0983*Math.sin(2*Math.PI*(18/360))},
      {x: -50*Math.cos(2*Math.PI*(18/360)), y: -50*Math.sin(2*Math.PI*(18/360))},
      {x: -19.0983*Math.sin(2*Math.PI*(36/360)), y: -19.0983*Math.cos(2*Math.PI*(36/360))}
    ],
    plus: [
      {x: -6, y: -6},
      {x: -6, y: -30},
      {x: 6, y: -30},
      {x: 6, y: -6},
      {x: 30, y: -6},
      {x: 30, y: 6},
      {x: 6, y: 6},
      {x: 6, y: 30},
      {x: -6, y: 30},
      {x: -6, y: 6},
      {x: -30, y: 6},
      {x: -30, y: -6},
    ],
    tShape: [
      {x: 30, y: -6},
      {x: 30, y: 6},
      {x: 6, y: 6},
      {x: 6, y: 54},
      {x: -6, y: 54},
      {x: -6, y: 6},
      {x: -30, y: 6},
      {x: -30, y: -6},
    ],
    arrow: [
      {x: 30, y: -6},
      {x: 30, y: -18},
      {x: 55, y: 0},
      {x: 30, y: 18},
      {x: 30, y: 6},
      {x: -20, y: 6},
      {x: -20, y: -6},
    ],
    pentagon: [
      {x: 0, y: -22},
      {x: 22*Math.cos(2*Math.PI*(18/360)), y: -22*Math.sin(2*Math.PI*(18/360))},
      {x: 22*Math.sin(2*Math.PI*(36/360)), y: 22*Math.cos(2*Math.PI*(36/360))},
      {x: -22*Math.sin(2*Math.PI*(36/360)), y: 22*Math.cos(2*Math.PI*(36/360))},
      {x: -22*Math.cos(2*Math.PI*(18/360)), y: -22*Math.sin(2*Math.PI*(18/360))}
    ],
    hexagon: [
      {x: 22*Math.sin(2*Math.PI*(30/360)), y: -22*Math.cos(2*Math.PI*(30/360))},
      {x: 22, y: 0},
      {x: 22*Math.sin(2*Math.PI*(30/360)), y: 22*Math.cos(2*Math.PI*(30/360))},
      {x: -22*Math.sin(2*Math.PI*(30/360)), y: 22*Math.cos(2*Math.PI*(30/360))},
      {x: -22, y: 0},
      {x: -22*Math.sin(2*Math.PI*(30/360)), y: -22*Math.cos(2*Math.PI*(30/360))}
    ],
    concave: [
      {x: -18, y: 54},
      {x: -18, y: 90},
      {x: -90, y: 90},
      {x: -90, y: -90},
      {x: 90, y: -90},
      {x: 90, y: 90},
      {x: 18, y: 90},
      {x: 18, y: 54},
      {x: 54, y: 54},
      {x: 54, y: -54},
      {x: -54, y: -54},
      {x: -54, y: 54}
    ],
    box: [
      {x: 0, y: 54},
      {x: 0, y: 90},
      {x: -90, y: 90},
      {x: -90, y: -90},
      {x: 90, y: -90},
      {x: 90, y: 90},
      {x: 0, y: 90},
      {x: 0, y: 54},
      {x: 54, y: 54},
      {x: 54, y: -54},
      {x: -54, y: -54},
      {x: -54, y: 54}
    ]
};

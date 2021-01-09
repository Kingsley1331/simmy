import {
  forEachShape,
  PolylineInterface,
  CloneInterface,
  reshapeInterface,
  resizeInterface,
  rotateInterface
} from "../shapes/shapes";
import Scene from "./scene";
import ShapesController from "../shapes/ShapesController";
import {
  drawShape,
  drawSquare,
  drawPolyline,
  drawDot,
  drawCircle,
  drawLine,
  screenWriter
} from "./display/drawing/drawings";
import { displayShapeInfo, displaySceneInfo } from "./display/info-overlay";

// export const canvas = document.getE/lementById("canvas");

export const draw = canvas => {
  const {
    backgroundColour,
    mousePos,
    selected,
    settings: { display }
  } = Scene;

  const {
    vertices: polyLineVertices,
    isCursorOnFirstPoint,
    isCursorOnLastPoint
  } = PolylineInterface();

  var context = canvas.getContext("2d");
  /** TODO: store buffer canvas globally in Scene to make it less expensive **/
  const bufferCanvas = document.createElement("canvas");
  const bufferCtx = bufferCanvas.getContext("2d");
  let width = (bufferCtx.canvas.width = context.canvas.width);
  let height = (bufferCtx.canvas.height = context.canvas.height);
  bufferCtx.fillStyle = backgroundColour;
  bufferCtx.fillRect(0, 0, width, height);

  forEachShape(i => {
    var onShape = ShapesController.getProperty(i, "onShape");
    var shapeId = ShapesController.getProperty(i, "id");
    if (onShape) {
      var shadowColor = (shadowColor = "rgba( 9, 9, 9, 0.3)");
      var shadowOffsetX = (shadowOffsetX = 10);
      var shadowOffsetY = (shadowOffsetY = 10);
      var shadowBlur = (shadowBlur = 10);
    }

    var fillColour = ShapesController.getProperty(i, "fillColour");
    var strokeStyle = ShapesController.getProperty(i, "strokeStyle");
    var lineWidth = ShapesController.getProperty(i, "linewidth");
    var centreOfMass = ShapesController.getCentreOfMass(i);
    var vertices = ShapesController.getProperty(i, "vertices");

    var config = {
      shadowColor: shadowColor,
      shadowOffsetX: shadowOffsetX,
      shadowOffsetY: shadowOffsetY,
      shadowBlur: shadowBlur,
      fillStyle: fillColour,
      strokeStyle: strokeStyle,
      lineWidth: lineWidth
    };

    drawShape(bufferCtx, vertices, centreOfMass, config, points => {
      if (Scene.selected === "reshape") {
        const { getVertexIndex, getSelectedShapeId } = reshapeInterface();
        const selectedShapeId = getSelectedShapeId();
        if (selectedShapeId && selectedShapeId === shapeId) {
          const numOfVertices = points.length;
          for (let v = 0; v < numOfVertices; v++) {
            let dotSize = 2;
            const x = points[v].x + centreOfMass.x;
            const y = points[v].y + centreOfMass.y;
            const vertex = getVertexIndex();
            if (vertex === v) {
              dotSize = 4;
            }
            drawDot(bufferCtx, dotSize, { x, y }, "black");
            screenWriter(bufferCtx, v, {
              x: x + 4,
              y: y - 4
            });
          }
        }
      }
    });

    // centre: {x: 0.5, y: 3}
    // maxX: 18.5
    // maxY: 303
    // minX: -17.5
    // minY: -297
    // radius: 300.53951487283666
    /*
     vertices:  [
    {x: -47.54237891737948, y: -49.97079772079772}
    {x: 47.56327271213587, y: -49.97079772079772}
    {x: 47.56327271213587, y: 40.48005199794965}
    {x: -47.54237891737948, y: 40.48005199794965}
    ]
*/

    if (Scene.selected === "resize") {
      const {
        getSelectedShapeIndex,
        getSelectedSideLength,
        getResizeBoundingRect
      } = resizeInterface();
      if (getSelectedShapeIndex() === i) {
        const boundingRect = ShapesController.getProperty(i, "boundingRect");
        // const { vertices: rectVertices } = boundingRect;

        const rectVertices = getResizeBoundingRect(boundingRect.vertices);
        const sideLength = getSelectedSideLength();
        // console.log("boundingRect", boundingRect);
        drawShape(bufferCtx, rectVertices, centreOfMass, {
          lineWidth: 0.5,
          fillStyle: "transparent",
          setLineDash: [3, 3]
        });

        /**In clockwise direction */
        // top left
        drawSquare(
          bufferCtx,
          {
            x: rectVertices[0].x + centreOfMass.x,
            y: rectVertices[0].y + centreOfMass.y
          },
          sideLength,
          {
            lineWidth: 0.5,
            fillStyle: "white"
          }
        );
        // top middle
        drawSquare(
          bufferCtx,
          {
            x: (rectVertices[0].x + rectVertices[1].x) / 2 + centreOfMass.x,
            y: (rectVertices[0].y + rectVertices[1].y) / 2 + centreOfMass.y
          },
          sideLength,
          {
            lineWidth: 0.5,
            fillStyle: "white"
          }
        );

        // top right
        drawSquare(
          bufferCtx,
          {
            x: rectVertices[1].x + centreOfMass.x,
            y: rectVertices[1].y + centreOfMass.y
          },
          sideLength,
          {
            lineWidth: 0.5,
            fillStyle: "white"
          }
        );
        // right middle

        drawSquare(
          bufferCtx,
          {
            x: (rectVertices[1].x + rectVertices[2].x) / 2 + centreOfMass.x,
            y: (rectVertices[1].y + rectVertices[2].y) / 2 + centreOfMass.y
          },
          sideLength,
          {
            lineWidth: 0.5,
            fillStyle: "white"
          }
        );
        // right bottom
        drawSquare(
          bufferCtx,
          {
            x: rectVertices[2].x + centreOfMass.x,
            y: rectVertices[2].y + centreOfMass.y
          },
          sideLength,
          {
            lineWidth: 0.5,
            fillStyle: "white"
          }
        );
        // bottom middle
        drawSquare(
          bufferCtx,
          {
            x: (rectVertices[2].x + rectVertices[3].x) / 2 + centreOfMass.x,
            y: (rectVertices[2].y + rectVertices[3].y) / 2 + centreOfMass.y
          },
          sideLength,
          {
            lineWidth: 0.5,
            fillStyle: "white"
          }
        );
        // bottom left
        drawSquare(
          bufferCtx,
          {
            x: rectVertices[3].x + centreOfMass.x,
            y: rectVertices[3].y + centreOfMass.y
          },
          sideLength,
          {
            lineWidth: 0.5,
            fillStyle: "white"
          }
        );
        // left middle
        drawSquare(
          bufferCtx,
          {
            x: (rectVertices[3].x + rectVertices[0].x) / 2 + centreOfMass.x,
            y: (rectVertices[3].y + rectVertices[0].y) / 2 + centreOfMass.y
          },
          sideLength,
          {
            lineWidth: 0.5,
            fillStyle: "white"
          }
        );
      }
    }
    if (Scene.selected === "rotate") {
      const {
        getSelectedShapeIndex,
        getHandleRadius,
        getOnhandle,
        getLever
        // getHandleCentre,
      } = rotateInterface();

      const { radius: mainRadius } = ShapesController.getProperty(
        i,
        "boundingRect"
      );

      if (getSelectedShapeIndex() === i) {
        const handleRadius = getHandleRadius();
        const { start, end } = getLever();
        // const handleCentre = getHandleCentre();
        const handleColour = getOnhandle() ? "lightgreen" : "white";
        const leverStart = {
          x: centreOfMass.x + start.x,
          y: centreOfMass.y + start.y
        };

        const leverEnd = {
          x: centreOfMass.x + end.x,
          y: centreOfMass.y + end.y
        };

        const handleCentre = { x: leverEnd.x, y: leverEnd.y };

        drawCircle(bufferCtx, mainRadius, centreOfMass, {
          lineWidth: 0.5,
          setLineDash: [3, 3]
        });

        drawLine(bufferCtx, leverStart, leverEnd, { lineWidth: 0.4 });
        // drawLine(
        //   bufferCtx,
        //   { x: centreOfMass.x, y: centreOfMass.y - mainRadius },
        //   { x: centreOfMass.x, y: centreOfMass.y - mainRadius - leverLength },
        //   { lineWidth: 0.4 }
        // );
        drawDot(bufferCtx, 10, leverStart, "black");
        drawCircle(bufferCtx, handleRadius, handleCentre, {
          lineWidth: 0.5,
          fillStyle: handleColour
        });
      }
    }
    if (display) {
      displayShapeInfo(i, bufferCtx, centreOfMass, vertices);
    }
  });

  const numOfPolyLineVertices = polyLineVertices.length;
  if (selected === "polyline" || selected === "draw") {
    drawDot(bufferCtx, 2, mousePos, "black");
    drawPolyline(
      bufferCtx,
      [...polyLineVertices],
      {
        strokeStyle: "black",
        lineWidth: 1,
        globalAlpha: 0.3,
        fillStyle: "blue"
      },
      true
    );
  }
  if (selected === "polyline") {
    const firstPoint = polyLineVertices[0] || [];
    const lastPoint = polyLineVertices[numOfPolyLineVertices - 1] || [];
    const firstPointColour = isCursorOnFirstPoint ? "red" : "blue";
    const lastPointColour = isCursorOnLastPoint
      ? "green"
      : numOfPolyLineVertices > 1
      ? "black"
      : "blue";

    const firstPointDotSize = isCursorOnFirstPoint ? 5 : 4;
    const lastPointDotSize = isCursorOnLastPoint ? 5 : 2;

    for (let v = 0; v < numOfPolyLineVertices; v++) {
      const point = polyLineVertices[v];
      const shouldDisplayPoint = !(
        (v === numOfPolyLineVertices - 1 && isCursorOnLastPoint) ||
        v === 0
      );
      if (shouldDisplayPoint) {
        drawDot(bufferCtx, 2, point, "black");
      }
    }

    drawDot(bufferCtx, 2, mousePos, "black");

    drawLine(bufferCtx, lastPoint, mousePos, {
      lineWidth: 1,
      globalAlpha: 0.5,
      setLineDash: [5, 5]
    });
    drawDot(bufferCtx, firstPointDotSize, firstPoint, firstPointColour);
    drawDot(bufferCtx, lastPointDotSize, lastPoint, lastPointColour);
  }

  if (selected === "clone") {
    const { getClonedShapeVertices } = CloneInterface();
    const clonedVertices = getClonedShapeVertices();

    if (clonedVertices.length) {
      drawShape(bufferCtx, clonedVertices, mousePos, {
        strokeStyle: "black",
        lineWidth: 1,
        globalAlpha: 0.3,
        fillStyle: "blue"
      });
    }
  }

  displaySceneInfo(bufferCtx);
  Scene.context.buffer = bufferCtx;
  context.drawImage(bufferCanvas, 0, 0, width, height);
};

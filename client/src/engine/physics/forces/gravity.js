import ShapesController from "../../shapes/ShapesController";
import Scene from "../../scenes/scene";

const G_FACTOR = 10000;

const applyGravity = index => {
  const { gravity } = Scene;
  const velocity = ShapesController.getProperty(index, "velocity", true);
  const isShapeFixed = ShapesController.getProperty(index, "isShapeFixed");
  if (!isShapeFixed) {
    ShapesController.setProperty(
      index,
      "velocity",
      {
        x: velocity.x + gravity.x / G_FACTOR,
        y: velocity.y + gravity.y / G_FACTOR
      },
      true
    );
  }
};

export default applyGravity;

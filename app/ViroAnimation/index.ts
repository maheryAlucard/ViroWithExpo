import { ViroAnimations } from "../ViroComponentsImporter";

export const createRotationAnimation = () =>
  ViroAnimations.registerAnimations({
    rotate: {
      duration: 2500,
      properties: {
        rotateY: "+=90",
      },
    },
  });

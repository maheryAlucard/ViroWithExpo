import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { _screen } from "../Constant/constants";
import { _materialNames } from "../Constant/materialName";
import { creteMaterial } from "../Materials";
import { createRotationAnimation } from "../ViroAnimation";
import {
  ViroARScene,
  ViroBox,
  ViroText,
  ViroTrackingReason,
  ViroTrackingState,
  ViroTrackingStateConstants,
} from "../ViroComponentsImporter";

export const MainViroScreen = () => {
  const [text, setText] = useState("Initializing AR...");

  function onInitialized(state: ViroTrackingState, reason: ViroTrackingReason) {
    console.log("guncelleme >>> ", state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText("Hello World!");
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      setText("Tracking...");
    }
  }

  creteMaterial(
    _materialNames.wood,
    require("../../assets/Texture/texture-seamless-wood-5.jpg")
  );
  createRotationAnimation()

  return (
    <ViroARScene
      style={styles.sceneContainer}
      onTrackingUpdated={onInitialized}
    >
      <ViroBox
        height={2}
        length={2}
        width={2}
        scale={[0.2, 0.2, 0.2]}
        position={[0, 0, -1]}
        materials={[_materialNames.wood]}
        animation={{
            name: "rotate",
            loop: true,
            run: true
        }}
      />
    </ViroARScene>
  );
};

const styles = StyleSheet.create({
  sceneContainer: {
    flex: 1,
    width: _screen.width,
  },
});

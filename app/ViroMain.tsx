import React from "react";
import { StyleSheet } from "react-native";
import { MainViroScreen } from "./Components/ViroScene";
import { ScreenContainer } from "./Components/SceenContainer";
import { ViroARSceneNavigator } from "./ViroComponentsImporter";

export default function ViroMain() {
  return (
    <ScreenContainer showBottomNav showHeader>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: MainViroScreen,
        }}
        style={styles.sceneNavigator}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  sceneNavigator: {
    flex: 1,
  },
});

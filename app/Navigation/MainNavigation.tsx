import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStacks } from "./MainStacks";

export const MainNavigation = () => {
  return <NavigationContainer>
      <MainStacks />
  </NavigationContainer>;
};

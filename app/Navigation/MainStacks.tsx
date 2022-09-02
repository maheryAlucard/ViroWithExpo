import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { _SCREEN_PATH } from "../Constant/screenPaths";
import { HomeScreen } from "../Screen/HomeScreen";
import ViroMain from "../ViroMain";

const Stack = createNativeStackNavigator();

export const MainStacks = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name={_SCREEN_PATH.home} component={HomeScreen} />
      <Stack.Screen name={_SCREEN_PATH.arCamera} component={ViroMain} />
    </Stack.Navigator>
  );
};

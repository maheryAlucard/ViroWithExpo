import { NativeBaseProvider, StatusBar } from "native-base";
import { MainNavigation } from "../Navigation/MainNavigation";

export const AppProvider = () => {
  return (
    <NativeBaseProvider>
        <StatusBar backgroundColor="#091947" />
      <MainNavigation />
    </NativeBaseProvider>
  );
};

import { useNavigation } from "@react-navigation/native";
import { Button, Center, Text, VStack } from "native-base";
import { ScreenContainer } from "../Components/SceenContainer";
import { _SCREEN_PATH } from "../Constant/screenPaths";

export const HomeScreen = () => {
  const navigation = useNavigation();
  const goToARCam = () => navigation.navigate(_SCREEN_PATH.arCamera as never);
  return (
    <ScreenContainer>
      <Center flex={1}>
        <Text>Home page</Text>
      </Center>
      <VStack p="8">
        <Button onPress={goToARCam}>AR Camera</Button>
      </VStack>
    </ScreenContainer>
  );
};

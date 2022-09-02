import { HStack, Icon, IconButton, VStack } from "native-base";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface IScreenContainer {
  children?: JSX.Element | React.ReactNode;
  showBottomNav?: boolean;
  showHeader?: boolean;
}
export const ScreenContainer = ({
  children,
  showBottomNav,
  showHeader,
}: IScreenContainer) => {
    const navigation = useNavigation();
    const goBack = () => navigation.goBack();
  return (
    <VStack flex={1}>
      {showHeader && (
        <HStack p={2} w="100%" bg="white" alignItems="center">
          <IconButton
            onPress={goBack}
            rounded="full"
            variant="ghost"
            color="primary.500"
            p={1}
            icon={<Icon size="lg" as={<Entypo name="chevron-small-left" />} />}
          />
        </HStack>
      )}
      <VStack flex={1}>{children}</VStack>
      {showBottomNav && <HStack h="16" w="100%" bg="white"></HStack>}
    </VStack>
  );
};

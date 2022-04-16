import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { getAccess, accessAlreadyGranted } from "./src/utils/fs";
import TabNavigator from "./src/navigation/TabNavigator";

export default function App() {
  React.useEffect(() => {
    if (!accessAlreadyGranted()) {
      getAccess();
    }
  }, []);
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

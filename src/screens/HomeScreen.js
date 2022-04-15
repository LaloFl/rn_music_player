import { SafeAreaView, Text, Button, View } from "react-native";
import React from "react";

import { path } from "../utils/getFiles.js";

export default function HomeScreen() {
  const [count, setCount] = React.useState(0);
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Button
        title="Add"
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Text>{count}</Text>
      <Text>{path}</Text>
    </SafeAreaView>
  );
}

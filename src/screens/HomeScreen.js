import { SafeAreaView, Text, Button, View } from "react-native";
import React from "react";

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
      {/* {path.map((item, index) => {
        <Text>{item}</Text>;
      })} */}
    </SafeAreaView>
  );
}

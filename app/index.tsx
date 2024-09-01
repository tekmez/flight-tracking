import { Button, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView>
      <Text>index</Text>
      <Button title="Press me" onPress={() => router.push("/Flights")} />
    </SafeAreaView>
  );
};

export default Home;

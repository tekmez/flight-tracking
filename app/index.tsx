import { Text, View } from "react-native";
import React, { useRef } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import TButton from "@/components/ui/Button";

const Home = () => {
  const animation = useRef<LottieView>(null);
  return (
    <SafeAreaView className="items-center justify-center flex-1">
      <View className="items-center">
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 600,
            height: 250,
          }}
          source={require("../assets/animations/airplane.json")}
        />
        <Text className="font-sfProBold text-4xl">Welcome Traveler</Text>
        <Text className="font-sfPro text-2xl text-gray-600">
          Plan your flights and avoid confusion
        </Text>
      </View>
      <TButton
        title="Go to Flights"
        onPress={() => router.navigate("/Flights")}
        classNames="bg-orange-600 mt-4"
      />
    </SafeAreaView>
  );
};

export default Home;

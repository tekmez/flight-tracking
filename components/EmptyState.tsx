import { Text, View } from "react-native";
import React from "react";
import LightPlaneIcon from "@/assets/icons/LightPlaneIcon";
import TButton from "./ui/Button";

const EmptyState = () => {
  return (
    <>
      <View className="border border-gray-200 rounded-[14px] p-[14px] mb-4">
        <LightPlaneIcon />
      </View>
      <View className="items-center justify-center mx-4 mb-6">
        <Text className="font-sfProBold text-[22px] leading-[28px] text-gray-900 mb-2">
          No Flights Added Yet
        </Text>
        <Text className="font-sfPro text-[17px] leading-[22px] text-gray-600 text-center">
          Let's get started on your jet lag plan! Add your upcoming flights to
          begin your journey.
        </Text>
      </View>
      <TButton
        title="Add Flight"
        onPress={() => console.log(22)}
        classNames="bg-orange-600"
      />
    </>
  );
};

export default EmptyState;

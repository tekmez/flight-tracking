import { View, Text } from "react-native";
import React from "react";
import ThyIcon from "@/assets/icons/ThyIcon";
import Badge from "../Badge";

const CardHeader = () => {
  return (
    <View className="flex-row justify-between items-center mb-4">
      <View className="flex-row items-center gap-2">
        <ThyIcon />
        <Text className="font-sfProMedium text-[13px] leading-[18px] text-center text-gray-500 my-[3px]">
          TK 0001 • Turkish Airlines
        </Text>
      </View>
      <Badge />
    </View>
  );
};

export default CardHeader;

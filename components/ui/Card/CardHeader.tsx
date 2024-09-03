import { View, Text } from "react-native";
import React from "react";
import ThyIcon from "@/assets/icons/ThyIcon";
import Badge from "../Badge";

type CardHeaderProps = {
  airline: string;
  duration: string;
  flightNumber: string;
};

const CardHeader = ({ airline, duration, flightNumber }: CardHeaderProps) => {
  return (
    <View className="flex-row justify-between items-center mb-4">
      <View className="flex-row items-center gap-2">
        <ThyIcon />
        <Text className="font-sfProMedium text-[13px] leading-[18px] text-center text-gray-500 my-[3px]">
          {flightNumber} • {airline}
        </Text>
      </View>
      <Badge duration={duration} />
    </View>
  );
};

export default CardHeader;

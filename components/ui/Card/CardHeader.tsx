import { View, Text } from "react-native";
import React from "react";
import Badge from "../Badge";
import Airline from "../AirlineIcon";

type CardHeaderProps = {
  airline: string;
  duration: string;
  flightNumber: string;
};

const CardHeader = ({ airline, duration, flightNumber }: CardHeaderProps) => {
  const iconName = airline.split(" ")[0] as
    | "Turkish"
    | "Ryanair"
    | "Emirates"
    | "Lufthansa";
  return (
    <View className="flex-row justify-between items-center mb-4">
      <View className="flex-row items-center">
        <Airline name={iconName} />
        <Text className="font-sfProMedium text-[13px] leading-[18px] text-center text-gray-500 my-[3px] ml-2">
          {flightNumber} • {airline}
        </Text>
      </View>
      <Badge duration={duration} />
    </View>
  );
};

export default CardHeader;

import { View, Text } from "react-native";
import React from "react";
import UpArrowIcon from "@/assets/icons/UpArrowIcon";
import PlaneRoadIcon from "@/assets/icons/PlaneRoadIcon";
import UpDownIcon from "@/assets/icons/UpDownIcon";

type CardContentProps = {
  takeOffDate: string;
  departureCity: string;
  departureTime: string;
  landingDate: string;
  arrivalCity: string;
  arrivalTime: string;
};

const CardContent = ({
  takeOffDate,
  departureCity,
  departureTime,
  landingDate,
  arrivalCity,
  arrivalTime,
}: CardContentProps) => {
  return (
    <View className="flex-row items-center">
      <View className="ml-[3px]">
        <View className="flex-row items-center mb-2">
          <UpArrowIcon className="mr-1" />
          <Text className="font-sfPro text-[13px] leading-[22px] text-center text-gray-500">
            {takeOffDate}
          </Text>
        </View>
        <Text className="font-sfProBold text-[20px] leading-[25px] text-gray-900 mb-2">
          {departureCity}
        </Text>
        <Text className="font-sfProBold text-[13px] leading-[18px] text-gray-700">
          {departureTime}
        </Text>
      </View>
      <PlaneRoadIcon className="mx-auto" />
      <View className="mr-[3px] items-end">
        <View className="flex-row items-center mb-2">
          <UpDownIcon className="mr-1" />
          <Text className="font-sfPro text-[13px] leading-[22px] text-center text-gray-500">
            {landingDate}
          </Text>
        </View>
        <Text className="font-sfProBold text-[20px] leading-[25px] text-gray-900 mb-2">
          {arrivalCity}
        </Text>
        <Text className="font-sfProBold text-[13px] leading-[18px] text-gray-700">
          {arrivalTime}
        </Text>
      </View>
    </View>
  );
};

export default CardContent;

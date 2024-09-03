import { View, Text } from "react-native";
import React from "react";

type BadgeProps = {
  duration: string;
};

const Badge = ({ duration }: BadgeProps) => {
  return (
    <View className="py-1 px-[10px] border-[0.5px] rounded-[7px] border-orange-200 bg-orange-50">
      <Text className="font-sfProMedium text-[12px] leading-4 text-orange-700 text-center">
        {duration}
      </Text>
    </View>
  );
};

export default Badge;

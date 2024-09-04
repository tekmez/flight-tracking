import { Text, TouchableOpacity } from "react-native";
import React from "react";

type TButtonProps = {
  title: string;
  onPress: () => void;
  classNames?: string;
  textClassNames?: string;
};

const TButton = ({
  title,
  onPress,
  classNames,
  textClassNames,
}: TButtonProps) => {
  return (
    <TouchableOpacity
      className={`rounded-[14px] px-[20px] py-[14px]  ${classNames}`}
      onPress={onPress}
    >
      <Text
        className={`font-sfPro text-white text-[17px] leading-[22px] ${textClassNames}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TButton;

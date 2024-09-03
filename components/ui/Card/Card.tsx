import { View } from "react-native";
import { Circle, ClipPath, Defs, Rect, Svg } from "react-native-svg";

type CardProps = {
  children: React.ReactNode;
};
export default function Card({ children }: CardProps) {
  return (
    <Svg height="151" width="100%">
      <Defs>
        <ClipPath id="clip">
          <Rect x="0" y="0" width="100%" height="151" rx="14" ry="14" />
          <Circle cx="0" cy="75.5" r="14" />
          <Circle cx="100%" cy="75.5" r="14" />
        </ClipPath>
      </Defs>
      <Rect
        x="0"
        y="0"
        width="100%"
        height="151"
        fill="white"
        clipPath="url(#clip)"
        rx={14}
        ry={14}
        stroke={"#E5E7EB"}
        strokeWidth={1}
      />
      <View className="p-4">{children}</View>
    </Svg>
  );
}

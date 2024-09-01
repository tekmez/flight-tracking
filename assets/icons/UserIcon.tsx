import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const UserIcon = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Path
      stroke="#6B7280"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.083}
      d="M18.75 20.833a6.25 6.25 0 0 0-12.5 0"
    />
    <Path
      stroke="#6B7280"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.083}
      d="M12.5 14.583a4.167 4.167 0 1 0 0-8.333 4.167 4.167 0 0 0 0 8.333Z"
    />
    <Path
      stroke="#6B7280"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.083}
      d="M12.5 22.917c5.753 0 10.417-4.664 10.417-10.417S18.253 2.083 12.5 2.083 2.083 6.747 2.083 12.5 6.747 22.917 12.5 22.917Z"
    />
  </Svg>
);
export default UserIcon;

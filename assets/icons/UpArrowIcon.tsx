import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const UpArrowIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <G
      stroke="#6B7280"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      clipPath="url(#a)"
    >
      <Path d="M15.893 15.893A8.333 8.333 0 1 0 4.107 4.107a8.333 8.333 0 0 0 11.785 11.786ZM7.643 12.357l4.714-4.714" />
      <Path d="M12.357 12.357V7.643H7.643" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default UpArrowIcon;

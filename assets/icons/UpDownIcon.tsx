import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const UpDownIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <G
      stroke="#6B7280"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      clipPath="url(#a)"
    >
      <Path d="M4.107 15.893A8.334 8.334 0 1 0 15.893 4.107 8.334 8.334 0 0 0 4.107 15.893ZM7.643 7.643l4.714 4.714" />
      <Path d="M7.643 12.357h4.714V7.643" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default UpDownIcon;

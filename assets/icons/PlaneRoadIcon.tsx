import * as React from "react";
import Svg, { SvgProps, Path, G, Defs, ClipPath } from "react-native-svg";
const PlaneRoadIcon = (props: SvgProps) => (
  <Svg width={106} height={35} fill="none" {...props}>
    <Path
      stroke="#E5E7EB"
      strokeDasharray="4 4"
      strokeLinecap="round"
      d="M.5 17.029h104.182"
    />
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        stroke="#9CA3AF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m51.51 26.692 4.526-7.07h4.95c2.12 0 3.888-1.061 4.242-2.122-.354-1.06-2.121-2.121-4.243-2.121h-4.95L51.51 8.308c-.283-.425-.707-.566-1.131-.425l-.566.142c-.495.212-.778.636-.707 1.131l1.273 6.223-3.536.707-2.121-2.121h-1.414l.707 3.535-.707 3.535h1.414l2.121-2.12 3.536.706-1.273 6.223c-.07.495.212.92.707 1.131l.495.212c.495.071.92-.07 1.202-.495Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M52.5.53 69.47 17.5 52.5 34.47 35.53 17.5z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default PlaneRoadIcon;

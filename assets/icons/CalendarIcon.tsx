import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const CalendarIcon = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Path
      stroke="#111827"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.083}
      d="M3.125 10.417h18.75V6.25a2.083 2.083 0 0 0-2.083-2.083H5.208A2.083 2.083 0 0 0 3.125 6.25v14.583a2.083 2.083 0 0 0 2.083 2.084H12.5M8.333 2.083V6.25M16.667 2.083V6.25"
    />
    <Path
      stroke="#111827"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.083}
      d="M22.177 15.313a2.531 2.531 0 0 0-2.76-.542 2.479 2.479 0 0 0-.834.552l-.354.354-.364-.354a2.531 2.531 0 0 0-3.584 0c-.99.98-1.042 2.635.208 3.896l3.74 3.698 3.75-3.698c1.25-1.26 1.188-2.917.198-3.896v-.01Z"
    />
  </Svg>
);
export default CalendarIcon;

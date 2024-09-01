import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const PlaneIcon = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Path
      stroke="#111827"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.083}
      d="m18.542 20-1.875-8.542 3.645-3.646c1.563-1.562 2.084-3.645 1.563-4.687-1.042-.52-3.125 0-4.688 1.563l-3.645 3.645L5 6.458c-.52-.104-.938.104-1.146.521l-.312.521c-.209.52-.104 1.042.312 1.354L9.375 12.5l-2.083 3.125H4.167l-1.042 1.042L6.25 18.75l2.083 3.125 1.042-1.042v-3.125l3.125-2.083 3.646 5.52c.312.418.833.522 1.354.313l.52-.208c.418-.313.626-.73.522-1.25Z"
    />
  </Svg>
);
export default PlaneIcon;

import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const LightPlaneIcon = (props: SvgProps) => (
  <Svg width={29} height={29} fill="none" {...props}>
    <Path
      stroke="#374151"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.333}
      d="m21.267 22.9-2.1-9.567L23.25 9.25C25 7.5 25.583 5.167 25 4c-1.167-.583-3.5 0-5.25 1.75l-4.083 4.083-9.567-2.1c-.583-.116-1.05.117-1.283.584l-.35.583c-.234.583-.117 1.167.35 1.517L11 14.5 8.667 18h-3.5L4 19.167 7.5 21.5 9.833 25 11 23.833v-3.5L14.5 18l4.083 6.183c.35.467.934.584 1.517.35l.583-.233c.467-.35.7-.817.584-1.4Z"
    />
  </Svg>
);
export default LightPlaneIcon;

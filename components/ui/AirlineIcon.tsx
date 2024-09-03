import React from "react";
import Turkish from "@/assets/icons/Turkish";
import Ryanair from "@/assets/icons/Ryanair";
import Emirates from "@/assets/icons/Emirates";
import Lufthansa from "@/assets/icons/Lufthansa";
const icons = {
  Turkish: Turkish,
  Ryanair: Ryanair,
  Emirates: Emirates,
  Lufthansa: Lufthansa,
};

type IconProps = {
  name: keyof typeof icons;
};
const Airline: React.FC<IconProps> = ({ name }) => {
  const AirlineIcon = icons[name];

  return <AirlineIcon />;
};

export default Airline;

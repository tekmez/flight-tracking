import React from "react";
import Card from "./ui/Card/Card";
import CardHeader from "./ui/Card/CardHeader";
import CardContent from "./ui/Card/CardContent";
import { Flight } from "@/types/FlightType";

const TicketCard = (data: Flight) => {
  return (
    <Card>
      <CardHeader
        airline={data.airline}
        duration={data.duration}
        flightNumber={data.flightNumber}
      />
      <CardContent
        departureCity={data.departureCity}
        arrivalCity={data.arrivalCity}
        departureTime={data.departureTime}
        arrivalTime={data.arrivalTime}
        takeOffDate={data.takeOffDate}
        landingDate={data.landingDate}
      />
    </Card>
  );
};

export default TicketCard;

import { Text, View } from "react-native";
import React from "react";
import Card from "./Card";

const TicketCard = () => {
  return (
    <Card>
      <View className="p-4">
        <Text className="text-lg font-bold">Ticket Card</Text>
      </View>
    </Card>
  );
};

export default TicketCard;

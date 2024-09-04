import { View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Flight } from "@/types/FlightType";
import TicketCard from "./TicketCard";

type TicketListProps = {
  flights: Flight[];
  handleOpenModal: (flight: Flight) => void;
  handleAddFlight: () => void;
  EmptyState: React.FC<{ onPress: () => void }>;
};

const TicketList = ({
  flights,
  handleOpenModal,
  handleAddFlight,
  EmptyState,
}: TicketListProps) => {
  return (
    <FlatList
      data={flights}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleOpenModal(item)}>
          <TicketCard {...item} />
        </TouchableOpacity>
      )}
      keyExtractor={(item, idx) => `${item.flightNumber}-${idx}`}
      ItemSeparatorComponent={() => <View className="h-4" />}
      ListEmptyComponent={
        <View className="items-center justify-center flex-1">
          <EmptyState onPress={handleAddFlight} />
        </View>
      }
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default TicketList;

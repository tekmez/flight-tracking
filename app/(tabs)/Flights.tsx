import {
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { StatusBar as NativeBar } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import EmptyState from "@/components/EmptyState";
import TicketCard from "@/components/TicketCard";
import { useState } from "react";
import { Flight } from "@/types/FlightType";
import TButton from "@/components/ui/Button";
import Modal from "@/components/Modal";
import TicketList from "@/components/TicketList";
import {
  airlines,
  cities,
  dates,
  durations,
  times,
} from "@/constants/AirlineConstants";

const Flights = () => {
  const [flights, setFlights] = useState<Flight[] | []>([]);
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);

  const getRandomElement = (array: string[]) =>
    array[Math.floor(Math.random() * array.length)];

  const generateRandomFlight = () => {
    const airline = getRandomElement(airlines);
    const departureCity = getRandomElement(cities);
    const arrivalCity = getRandomElement(
      cities.filter((city) => city !== departureCity)
    );
    const takeOffDate = getRandomElement(dates);
    const landingDate = getRandomElement(
      dates.filter((date) => date !== takeOffDate)
    );
    const flightNumber = `${airline.split(" ")[0].charAt(0)}${airline
      .split(" ")[0]
      .charAt(3)
      .toUpperCase()} ${Math.floor(Math.random() * 10000)}`;
    return {
      flightNumber,
      airline,
      departureCity,
      arrivalCity,
      departureTime: getRandomElement(times),
      arrivalTime: getRandomElement(times),
      duration: getRandomElement(durations),
      takeOffDate,
      landingDate,
    };
  };

  const handleAddFlight = () => {
    setFlights([...flights, generateRandomFlight()]);
  };

  const handleOpenModal = (flight: Flight) => {
    setSelectedFlight(flight);
  };

  const handleCloseModal = () => {
    setSelectedFlight(null);
  };
  const handleRemoveFlight = (flight: Flight) => {
    setFlights(flights.filter((f) => f.flightNumber !== flight.flightNumber));
    setSelectedFlight(null);
  };
  return (
    <SafeAreaView
      className="flex-1 bg-white"
      style={{
        paddingTop: Platform.OS === "android" ? NativeBar.currentHeight : 0,
      }}
    >
      <StatusBar style="dark" />
      <View className="flex-row items-baseline justify-between py-1 px-4">
        <Text className="font-sfProBold text-[34px] leading-[41px] text-gray-900">
          Flights
        </Text>
        <TouchableOpacity onPress={handleAddFlight}>
          <Feather
            name="plus"
            size={24}
            color="#111827"
            testID="add-flight-button"
          />
        </TouchableOpacity>
      </View>
      <View className="mt-3 flex-1 px-4">
        <TicketList
          flights={flights}
          handleOpenModal={handleOpenModal}
          handleAddFlight={handleAddFlight}
          EmptyState={EmptyState}
          testID="ticket-list"
        />
      </View>
      <Modal visible={selectedFlight !== null} onClose={handleCloseModal}>
        {selectedFlight && <TicketCard {...selectedFlight} />}
        <TButton
          onPress={() => handleRemoveFlight(selectedFlight as Flight)}
          title="Remove Flight"
          classNames="mt-4 bg-[#FEE2E2] w-full"
          textClassNames="text-red-900 font-sfProMedium text-center"
        />
      </Modal>
    </SafeAreaView>
  );
};

export default Flights;

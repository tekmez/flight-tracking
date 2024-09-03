import {
  FlatList,
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

const flightNumbers = ["TK 0001", "TK 0202", "TK 0303", "TK 0404"];
const airlines = [
  "Turkish Airlines",
  "Ryanair Airlines",
  "Lufthansa Airlines",
  "Emirates Airlines",
];
const cities = ["New York", "Istanbul", "Paris", "Dubai", "Tokyo"];
const times = ["08:00 AM", "07:00 PM", "09:00 AM", "06:00 PM"];
const durations = ["2h 30m", "3h 15m", "4h 00m", "5h 45m"];
const dates = ["18 Apr 2022", "19 Apr 2022", "20 Apr 2022", "21 Apr 2022"];

const Flights = () => {
  const [flights, setFlights] = useState<Flight[] | []>([]);

  const getRandomElement = (array: string[]) =>
    array[Math.floor(Math.random() * array.length)];

  const generateRandomFlight = () => {
    const departureCity = getRandomElement(cities);
    const arrivalCity = getRandomElement(
      cities.filter((city) => city !== departureCity)
    );
    const takeOffDate = getRandomElement(dates);
    const landingDate = getRandomElement(
      dates.filter((date) => date !== takeOffDate)
    );

    return {
      flightNumber: getRandomElement(flightNumbers),
      airline: getRandomElement(airlines),
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
  return (
    <SafeAreaView
      className="flex-1"
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
          <Feather name="plus" size={24} color="#111827" />
        </TouchableOpacity>
      </View>
      <View className="mt-3 flex-1 px-4">
        <FlatList
          data={flights}
          renderItem={({ item }) => <TicketCard {...item} />}
          keyExtractor={(item, idx) => `${item.flightNumber}-${idx}`}
          ItemSeparatorComponent={() => <View className="h-4" />}
          ListEmptyComponent={
            <View className="items-center justify-center flex-1">
              <EmptyState />
            </View>
          }
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Flights;

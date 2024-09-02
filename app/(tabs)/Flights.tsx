import { Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import EmptyState from "@/components/EmptyState";
import TicketCard from "@/components/TicketCard";
const Flights = () => {
  return (
    <SafeAreaView className="px-4 flex-1">
      <StatusBar style="dark" />
      <View className="flex-row items-baseline justify-between py-1">
        <Text className="font-sfProBold text-[34px] leading-[41px] text-gray-900">
          Flights
        </Text>
        <TouchableOpacity>
          <Feather name="plus" size={24} color="#111827" />
        </TouchableOpacity>
      </View>
      <View className="items-center justify-center flex-1">
        {/* <EmptyState /> */}
        <TicketCard />
      </View>
    </SafeAreaView>
  );
};

export default Flights;

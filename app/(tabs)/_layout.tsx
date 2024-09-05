import React from "react";
import { Tabs } from "expo-router";
import PlaneIcon from "@/assets/icons/PlaneIcon";
import UserIcon from "@/assets/icons/UserIcon";
import CalendarIcon from "@/assets/icons/CalendarIcon";
import { Text } from "react-native";
const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        headerShown: false,
        tabBarLabel({ focused, ...props }) {
          return (
            <Text
              className={`font-sfProMedium text-[10px] leading-[12px] ${
                focused ? "text-gray-900" : "text-gray-500"
              }`}
            >
              {props.children}
            </Text>
          );
        },
      }}
    >
      <Tabs.Screen
        name="Plans"
        options={{
          title: "Plans",
          tabBarIcon: ({ focused }) => (
            <CalendarIcon className={`${!focused && "opacity-50"}`} />
          ),
        }}
      />
      <Tabs.Screen
        name="Flights"
        options={{
          title: "Flights",
          tabBarIcon: ({ focused }) => (
            <PlaneIcon className={`${!focused && "opacity-50"}`} />
          ),
        }}
      />
      <Tabs.Screen
        name="User"
        options={{
          title: "Me",
          tabBarIcon: ({ focused }) => (
            <UserIcon className={`${!focused && "opacity-50"}`} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

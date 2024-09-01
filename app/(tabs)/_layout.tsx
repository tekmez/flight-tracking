import React from "react";
import { Tabs } from "expo-router";
import PlaneIcon from "@/assets/icons/PlaneIcon";
import UserIcon from "@/assets/icons/UserIcon";
import CalendarIcon from "@/assets/icons/CalendarIcon";
const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Plans"
        options={{
          title: "Plans",
          tabBarLabelStyle: {
            fontFamily: "SFProRegular",
          },
          tabBarIcon: () => <CalendarIcon />,
        }}
      />
      <Tabs.Screen
        name="Flights"
        options={{
          title: "Flights",
          tabBarLabelStyle: {
            fontFamily: "SFProRegular",
          },
          tabBarIcon: () => <PlaneIcon />,
        }}
      />
      <Tabs.Screen
        name="User"
        options={{
          title: "User",
          tabBarLabelStyle: {
            fontFamily: "SFProRegular",
          },
          tabBarIcon: () => <UserIcon />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

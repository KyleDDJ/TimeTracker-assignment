import { router, Tabs } from "expo-router";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import { COLORS } from "@/constants/Colors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: COLORS.gray400,
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          marginHorizontal: 16,
          borderRadius: 20,
          backgroundColor: COLORS.green,
          height: 70,
          elevation: 5,
          shadowColor: COLORS.black,
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 8,
        },

        tabBarItemStyle: {
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          marginTop: 5,
          fontSize: 12,
        },

        headerStyle: {
          backgroundColor: COLORS.green,
        },
        headerTintColor: COLORS.white,
        headerTitle: "TimeTracker",
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: "bold",
          color: COLORS.white,
        },
        headerRight: () => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 15,
            }}
          >
            <TouchableOpacity style={{ marginRight: 15 }}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color={COLORS.white}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
              <Image
                source={require("@/assets/images/joji.jpg")}
                style={{ width: 32, height: 32, borderRadius: 16 }}
              />
            </TouchableOpacity>
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="track"
        options={{
          title: "Tracks",
          headerShown: true,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name="play" size={focused ? 28 : 24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Tasks",
          headerShown: true,
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              size={focused ? 28 : 24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: "Analytics",
          headerTitle: "Analytics",
          headerShown: true,
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome6
              name="bar-chart"
              size={focused ? 28 : 24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="analytics"
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "white",
          height: 70,
          position: "absolute",
        },
        tabBarItemStyle: {
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          marginTop: 5,
          fontSize: 12,
        },
        headerTitle: "TimeTracker",
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: "bold",
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
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity>
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
          title: "Track",
          headerShown: true,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name="play" size={focused ? 28 : 24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Task",
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
import { Tabs } from "expo-router";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

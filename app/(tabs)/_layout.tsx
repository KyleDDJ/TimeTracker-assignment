export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="track"
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
              <AntDesign name="bells" size={24} color="black" />
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
          title: "Track",
          headerShown: true,
          tabBarIcon: ({ focused, color }) => (
            <AntDesign
              name="caretright"
              size={focused ? 28 : 24}
              color={color}
            />
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
            <MaterialCommunityIcons
              name="google-analytics"
              size={focused ? 28 : 24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router, Tabs } from "expo-router";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

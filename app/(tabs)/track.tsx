const Track = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
        className="px-6 py-8"
      >
        <View className="px-1">
          <View className="bg-gray-50 rounded-2xl px-5 py-5 items-center justify-center">
            <View className="bg-gray-300 rounded-xl px-10 py-10 mt-3 mb-4">
              <Entypo name="code" size={50} color="white" />
            </View>

            <View className="justify-center items-center mb-5">
              <Text className="font-bold text-xl mb-3">
                API Integration Setup
              </Text>
              <View className="flex-row gap-2">
                <Text className="text-gray-600">Sprint 2025-01</Text>
                <Text className="font-semibold">•</Text>
                <Text className="text-gray-600">Frontend Development</Text>
              </View>
            </View>
            <Progress.Bar
              progress={0.7}
              width={300}
              color="black"
              unfilledColor="#e6e7e9ff"
              borderColor="#e6e7e9ff"
              borderWidth={1}
            />
            <View className="justify-center mt-4 items-center">
              <Text className="font-bold text-3xl">02:34:15</Text>
            </View>
            <View className="flex-row justify-center items-center gap-8 mt-5 mb-3">
              <View className="w-14 h-14 rounded-full border border-gray-400 items-center justify-center">
                <Entypo
                  name="controller-fast-backward"
                  size={23}
                  color="gray"
                />
              </View>

              <View className="w-20 h-20 rounded-full bg-black items-center justify-center">
                <AntDesign name="pause" size={35} color="white" />
              </View>

              <View className="w-14 h-14 rounded-full border border-gray-400 items-center justify-center">
                <Entypo name="controller-fast-forward" size={23} color="gray" />
              </View>
            </View>
          </View>

          <View className=" mt-4 ">
            <View className="flex-row justify-between">
              <Text className="text-lg font-bold">Up Next</Text>
              <View className="flex-row items-center gap-2 justify-center px-2 text-center">
                <Ionicons name="shuffle" size={20} color="grey" />
                <Text className="text-gray-600 font-bold">Shuffle</Text>
              </View>
            </View>
          </View>
          <View className="mt-3">
            <MiniTaskCard
              title="Mobile UI Testing"
              subtitle="QA"
              estimated="4h estimated"
              leftIcon={
                <MaterialIcons name="phone-iphone" size={22} color="white" />
              }
              rightIcon={
                <Ionicons name="play-circle-sharp" size={35} color="black" />
              }
            />
            <MiniTaskCard
              title="Analytics Dashboard"
              subtitle="Frontend"
              estimated="2h estimated"
              leftIcon={<Octicons name="graph" size={22} color="white" />}
              rightIcon={
                <Ionicons name="play-circle-outline" size={35} color="gray" />
              }
            />
            <MiniTaskCard
              title="User Authentication"
              subtitle="Backend"
              estimated="4h estimated"
              leftIcon={<FontAwesome6 name="users" size={20} color="white" />}
              rightIcon={
                <Ionicons name="play-circle-outline" size={35} color="gray" />
              }
            />
            <MiniTaskCard
              title="Analytics Dashboard"
              subtitle="Frontend"
              estimated="6h estimated"
              leftIcon={<Octicons name="graph" size={22} color="white" />}
              rightIcon={
                <Ionicons name="play-circle-outline" size={35} color="gray" />
              }
            />
            <MiniTaskCard
              title="User Authentication"
              subtitle="Backend"
              estimated="4h estimated"
              leftIcon={<Octicons name="graph" size={22} color="white" />}
              rightIcon={
                <Ionicons name="play-circle-outline" size={35} color="gray" />
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Track;
import * as Progress from "react-native-progress";

import MiniTaskCard from "@/components/MiniTask";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

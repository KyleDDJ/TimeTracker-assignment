const analytics = () => {
  const [activeTab, setActiveTab] = useState("Gantt");

  const tabs = ["Gantt", "Timeline"];
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-6 py-8">
        <View className="px-1">
          <View className="bg-gray-50 rounded-2xl px-5 py-5 items-center justify-center">
            <View className="flex-row justify-between p-5 w-full mb-2">
              <Text className="font-bold text-3xl">7h 42m</Text>
              <Text className="font-bold text-3xl">4</Text>
              <Text className="font-bold text-3xl">96%</Text>
            </View>

            <View className="flex-row justify-between w-full">
              <Text className="text-gray-600">Total Tracked</Text>
              <Text className="text-gray-600">Task Worked</Text>
              <Text className="text-gray-600">Effieciency</Text>
            </View>
          </View>

          <View className="mt-5">
            <StatusTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabs={tabs.map(t => ({ name: t }))}
            />
          </View>

          <View className=" mt-4 ">
            <View className="flex-row justify-between">
              <Text className="text-lg font-bold">Task Breakdown</Text>
            </View>
          </View>

          <View className="mt-3">
            <MiniTaskCard
              title="API Integration Setup"
              subtitle="Frontend Development"
              rightEstimate="2h 15m"
              percentage="29%"
              leftIcon={
                <Entypo name="controller-record" size={24} color="black" />
              }
              showIconBackground={false}
            />
            <MiniTaskCard
              title="Database Migratiom"
              subtitle="Backend"
              rightEstimate="3h 30m"
              percentage="45%"
              leftIcon={
                <Entypo name="controller-record" size={24} color="grey" />
              }
              showIconBackground={false}
            />
            <MiniTaskCard
              title="Mobile UI Testing"
              subtitle="QA"
              rightEstimate="1h 30m"
              percentage="19%"
              leftIcon={
                <Entypo name="controller-record" size={24} color="lightgrey" />
              }
              showIconBackground={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default analytics;
import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

import MiniTaskCard from "@/components/MiniTask";
import StatusTabs from "@/components/StatusTabs";
import Entypo from "@expo/vector-icons/Entypo";

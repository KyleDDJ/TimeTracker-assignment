const analytics = () => {
  const [activeTab, setActiveTab] = useState("Timeline");
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}
        className="px-6 py-3"
      >
        <View className="px-1">
          <View className="mb-1 flex-row items-center justify-between p-4">
            <Text className="font-bold text-xl">Today's Tracking</Text>

            <View className="flex-row items-center">
              <TouchableOpacity>
                <EvilIcons name="chevron-left" size={27} color="black" />
              </TouchableOpacity>
              <Text className="mx-2 pt-2">Jan 15, 2025</Text>
              <TouchableOpacity>
                <EvilIcons name="chevron-right" size={27} color="black" />
              </TouchableOpacity>
            </View>
          </View>
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
              tabs={[
                {
                  name: "Gantt",
                  icon: (
                    <FontAwesome6 name="chart-gantt" size={18} color="black" />
                  ),
                },
                {
                  name: "Timeline",
                  icon: (
                    <FontAwesome6 name="timeline" size={18} color="black" />
                  ),
                },
              ]}
            />
          </View>

          <View className="mt-4">
            {activeTab === "Gantt" && (
              <Text className="text-lg text-center font-bold">
                Gantt Content
              </Text>
            )}
            {activeTab === "Timeline" && (
              <Text className="text-lg text-center font-bold">
                Timeline Content
              </Text>
            )}
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
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import MiniTaskCard from "@/components/MiniTask";
import StatusTabs from "@/components/StatusTabs";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

{
  /* Gantt Chartt Harcoded
          <View className="mt-2 mb-5">
                <View className="bg-gray-50 rounded-xl p-4">
                  <View className="relative flex-row">
                    <View className="w-28 mt-12">
                      {[
                        { task: "API Integration", duration: "2h 15m" },
                        { task: "Database Migration", duration: "3h 30m" },
                        { task: "Mobile Testing", duration: "1h 30m" },
                        { task: "Break", duration: "27m" },
                      ].map((item, index) => (
                        <View
                          key={index}
                          style={{ height: 60 }}
                          className="mb-4"
                        >
                          <Text className="text-gray-800 text-xs font-bold">
                            {item.task}
                          </Text>
                          <Text className="text-gray-500 text-xs">
                            {item.duration}
                          </Text>
                        </View>
                      ))}
                    </View>

                    <View className="flex-1 relative">
                      <View className="flex-row justify-between mb-2">
                        {["9 AM", "12 PM", "3 PM", "6 PM"].map((time, idx) => (
                          <Text key={idx} className="text-gray-500 text-xs">
                            {time}
                          </Text>
                        ))}
                      </View>

                      <View className="border-t border-gray-300 mb-4" />
                      {[
                        {
                          task: "API Integration",
                          start: 9,
                          end: 11.25,
                          time: "9:00 - 11:15",
                        },
                        {
                          task: "Database Migration",
                          start: 12.5,
                          end: 16,
                          time: "12:30 - 4:00",
                        },
                        {
                          task: "Mobile Testing",
                          start: 16.5,
                          end: 18,
                          time: "4:30 - 6:00",
                        },
                        {
                          task: "Break",
                          start: 11.25,
                          end: 11.7,
                          time: "11:15 - 11:42",
                        },
                      ].map((item, idx) => (
                        <View
                          key={idx}
                          style={{
                            position: "absolute",
                            top: idx * 64,
                            left: ((item.start - 9) / 9) * 100 + "%",
                            width: ((item.end - item.start) / 9) * 100 + "%",
                            height: 28,
                            borderRadius: 6,
                            backgroundColor: "#374151",
                            justifyContent: "center",
                            paddingHorizontal: 6,
                          }}
                          className="mt-10"
                        >
                          <Text
                            className="text-white text-xs font-semibold"
                            numberOfLines={1}
                          >
                            {item.time}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                </View>
              </View> */
}

{
  /* Timeline hardcoded
          <View className="mt-2 mb-5">
            <View className="bg-gray-50 rounded-xl p-4">
              <View className="relative">
                {[
                  "9 AM",
                  "10 AM",
                  "11 AM",
                  "12 PM",
                  "1 PM",
                  "2 PM",
                  "3 PM",
                  "4 PM",
                  "5 PM",
                  "6 PM",
                ].map((time, index) => (
                  <View
                    key={index}
                    style={{ height: 100 }}
                    className="flex-row items-start"
                  >
                    <Text className="text-gray-500 text-xs w-10">{time}</Text>
                    <View className="flex-1 border-t border-gray-200" />
                  </View>
                ))}

                {[
                  {
                    task: "API Integration",
                    start: 9,
                    end: 11.25,
                    color: "#111827",
                    duration: "2h 15m",
                    time: "9:00 - 11:15",
                  },
                  {
                    task: "break (27m)",
                    start: 11.25,
                    end: 11.6,
                    color: "#c0c0c0ff",
                  },
                  {
                    task: "Database Migration",
                    start: 12.5,
                    end: 16,
                    color: "#374151",
                    duration: "3h 30m",
                    time: "12:30 - 4:00",
                  },
                  {
                    task: "break (27m)",
                    start: 16,
                    end: 16.3,
                    color: "#c0c0c0ff",
                  },
                  {
                    task: "Mobile Testing",
                    start: 16.2,
                    end: 18,
                    color: "#4B5563",
                    duration: "1h 30m",
                    time: "4:30 - 6:00",
                  },
                ].map((item, index) => (
                  <View
                    key={index}
                    style={{
                      position: "absolute",
                      top: (item.start - 9) * 100,
                      height: (item.end - item.start) * 100,
                      left: 50,
                      right: 0,
                      backgroundColor: item.color,
                      borderRadius: 10,
                      padding: 8,
                    }}
                  >
                    <Text className="text-white font-semibold text-sm">
                      {item.task}
                    </Text>
                    <Text className="text-gray-200 text-xs">{item.time}</Text>
                    <Text className="text-gray-300 text-xs">
                      {item.duration}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View> */
}

import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

import EventCard from "@/components/EventCard";
import MiniTaskCard from "@/components/MiniTaskCard";
import StatusTabs from "@/components/StatusTabs";
import TimelineChart from "@/components/TimelineChart";
import TrackingHeader from "@/components/TrackingHeader";

import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import { ANALYTICS_ITEMS } from "@/constants/AnalyticsItems";

const AnalyticsScreen: React.FC = () => {
  const [active_tab, setActiveTab] = useState("Timeline");
  const [date] = useState(new Date());

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}
        className="px-6 py-3"
      >
        <View className="px-1">
          <TrackingHeader
            date="Jan 15, 2025"
            totalTracked="7h 42m"
            tasksWorked={4}
            efficiency="96%"
            onPrevDate={() => console.log("Previous date")}
            onNextDate={() => console.log("Next date")}
          />

          <View className="mt-5">
            <StatusTabs
              activeTab={active_tab}
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
            <TimelineChart
              items={ANALYTICS_ITEMS}
              EventCard={EventCard}
              date={date}
            />
          </View>

          <View className="mt-4">
            <View className="flex-row justify-between">
              <Text className="text-lg font-bold">Task Breakdown</Text>
            </View>
          </View>

          <View className="mt-5">
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
              title="Database Migration"
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

export default AnalyticsScreen;

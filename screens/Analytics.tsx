import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

import AnalyticsTaskCard from "@/components/AnalyticsTaskCard";
import EventCard from "@/components/EventCard";
import StatusTabs from "@/components/StatusTabs";
import TimelineChart from "@/components/TimelineChart";
import TrackingHeader from "@/components/TrackingHeader";

import { COLORS } from "@/constants/Colors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import { useAnalytics } from "@/hooks/useAnalytics";

const AnalyticsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Timeline");
  const [date] = useState(new Date());

  const { items, tasks } = useAnalytics();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerClassName="flex-grow pb-28 px-5 pt-3">
        <View className="px-2">
          <TrackingHeader
            date="Jan 15, 2025"
            totalTracked="7h 42m"
            tasksWorked={tasks.length}
            efficiency="96%"
            onPrevDate={() => console.log("Previous date")}
            onNextDate={() => console.log("Next date")}
          />

          <StatusTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={[
              {
                name: "Gantt",
                icon: (
                  <FontAwesome6
                    name="chart-gantt"
                    size={18}
                    color={COLORS.black}
                  />
                ),
              },
              {
                name: "Timeline",
                icon: (
                  <FontAwesome6
                    name="timeline"
                    size={18}
                    color={COLORS.black}
                  />
                ),
              },
            ]}
          />

          {activeTab === "Timeline" && (
            <View className="mt-1">
              <TimelineChart items={items} EventCard={EventCard} date={date} />
            </View>
          )}
          <View className="mt-6 flex-row justify-between">
            <Text className="text-lg font-bold">Task Breakdown</Text>
          </View>

          <View className="mt-5 space-y-1">
            {tasks.map(task => (
              <AnalyticsTaskCard key={task.id} task={task} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AnalyticsScreen;

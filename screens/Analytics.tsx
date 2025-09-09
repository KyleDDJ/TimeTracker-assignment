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

import { useTaskStore } from "@/stores/useTaskStore";

const AnalyticsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Timeline");
  const [date] = useState(new Date());

  const tasks = useTaskStore(state => state.tasks);
  const { items } = useAnalytics();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerClassName="flex-grow pb-28 px-5 pt-3">
        <View className="px-2">
          <TrackingHeader
            date="Jan 15, 2025"
            totalTracked={
              tasks.reduce((acc, t) => acc + (t.elapsed ?? 0), 0) + "m"
            }
            tasksWorked={tasks.length}
            efficiency={
              tasks.length > 0
                ? Math.round(
                    (tasks.filter(t => t.progress === "COMPLETED").length /
                      tasks.length) *
                      100
                  ) + "%"
                : "0%"
            }
            onPrevDate={() => console.log("Previous date")}
            onNextDate={() => console.log("Next date")}
          />

          <StatusTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={[
              {
                name: "Gantt",
                icon: (isActive: boolean) => (
                  <FontAwesome6
                    name="chart-gantt"
                    size={18}
                    color={isActive ? COLORS.white : COLORS.gray500}
                  />
                ),
              },
              {
                name: "Timeline",
                icon: (isActive: boolean) => (
                  <FontAwesome6
                    name="timeline"
                    size={18}
                    color={isActive ? COLORS.white : COLORS.gray500}
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

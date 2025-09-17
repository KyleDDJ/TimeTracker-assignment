import React, { useState } from "react";
import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";

import AnalyticsTaskCard from "@/components/AnalyticsTaskCard";
import EventCard from "@/components/EventCard";
import StatusTabs from "@/components/StatusTabs";
import TimelineChart from "@/components/TimelineChart";
import TrackingHeader from "@/components/TrackingHeader";

import { COLORS } from "@/constants/Colors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import { formatElapsed } from "@/helpers/utils";
import { useTaskStore } from "@/stores/useTaskStore";

import NoAnalyticTask from "@/components/NoAnalyticView";
import { mapTasksToEvents } from "@/helpers/taskToEvent";

const AnalyticsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Timeline");
  const [date, setDate] = useState(new Date());

  const onPrevDate = () => {
    setDate(
      prev => new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() - 1)
    );
  };

  const onNextDate = () => {
    setDate(
      prev => new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() + 1)
    );
  };

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const tasks = useTaskStore(state => state.tasks);
  const taskEvents = mapTasksToEvents(tasks);

  const totalTrackedSeconds = tasks.reduce(
    (acc, t) => acc + (t.elapsed ?? 0),
    0
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerClassName="pb-28 px-5 pt-3">
        <View className="px-2">
          <TrackingHeader
            date={formattedDate}
            totalTracked={formatElapsed(totalTrackedSeconds)}
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
            onPrevDate={onPrevDate}
            onNextDate={onNextDate}
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
              {taskEvents.length > 0 ? (
                <TimelineChart
                  items={taskEvents}
                  EventCard={EventCard}
                  date={date}
                />
              ) : (
                <NoAnalyticTask
                  message="No data to track yet"
                  subMessage="Start tracking tasks to see your timeline analytics."
                />
              )}
            </View>
          )}

          <View className="mt-6 flex-row justify-between">
            <Text className="text-lg font-bold">Task Breakdown</Text>
          </View>

          <FlatList
            data={tasks}
            keyExtractor={(task, index) => String(task.id ?? index)}
            renderItem={({ item }) => <AnalyticsTaskCard task={item} />}
            contentContainerStyle={{ marginTop: 20 }}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            scrollEnabled={false}
            ListEmptyComponent={
              <NoAnalyticTask
                subMessage="Your tracked tasks will appear here."
                showIcon={false}
              />
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AnalyticsScreen;

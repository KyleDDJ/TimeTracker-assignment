import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";

import SprintSummaryCard from "@/components/SprintSummaryCard";
import StatusTabs from "@/components/StatusTabs";
import SwipeableTask from "@/components/SwipeableTask";
import { TaskDashboardProps } from "@/entities/task.entities";
import { useTaskStore } from "@/stores/useTaskStore";

const formatDuration = (seconds: number) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h}h ${m}m ${s}s`;
};

const TaskDashboard: React.FC<TaskDashboardProps> = ({ tasks: propTasks }) => {
  const storeTasks = useTaskStore(state => state.tasks);
  const setActiveTask = useTaskStore(state => state.setActiveTask);
  const tasks = propTasks || storeTasks;

  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "In Progress", "Completed"];

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      if (activeTab === "All") return true;
      if (activeTab === "In Progress")
        return task.progress === "TO DO" || task.progress === "TRACKING NOW";
      if (activeTab === "Completed") return task.progress === "COMPLETED";
      return true;
    });
  }, [tasks, activeTab]);

  const sprintSummary = useMemo(() => {
    const tasksAssigned = filteredTasks.length;
    const tasksCompleted = filteredTasks.filter(
      t => t.progress === "COMPLETED"
    ).length;
    const secondsLogged = filteredTasks.reduce(
      (acc, t) => acc + (t.elapsed ?? 0),
      0
    );
    const progress = tasksAssigned > 0 ? tasksCompleted / tasksAssigned : 0;

    return {
      tasksAssigned,
      tasksCompleted,
      hoursLogged: formatDuration(secondsLogged),
      progress,
    };
  }, [filteredTasks]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={filteredTasks}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{
          paddingBottom: 16,
          paddingHorizontal: 16,
          marginTop: 16,
        }}
        ListHeaderComponent={
          <>
            <View className="bg-gray-100 items-center justify-center rounded-2xl mb-6">
              <SprintSummaryCard
                sprintName="Sprint 2025-01"
                daysLeft="8 days left"
                tasksAssigned={sprintSummary.tasksAssigned}
                tasksCompleted={sprintSummary.tasksCompleted}
                hoursLogged={sprintSummary.hoursLogged}
                progress={sprintSummary.progress}
              />
            </View>
            <StatusTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabs={tabs.map(t => ({ name: t }))}
            />
          </>
        }
        renderItem={({ item: task }) => (
          <SwipeableTask
            task={task}
            onPress={() => {
              setActiveTask(task);
              router.push({
                pathname: "/(tabs)/track",
                params: {
                  title: task.title,
                  sprint: "Sprint 2025-01",
                  subtitle: task.subtitle,
                },
              });
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default TaskDashboard;

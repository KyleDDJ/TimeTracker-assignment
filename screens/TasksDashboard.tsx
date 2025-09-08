import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";

import SprintSummaryCard from "@/components/SprintSummaryCard";
import StatusTabs from "@/components/StatusTabs";
import TaskCard from "@/components/TaskCard";
import { Task } from "@/entities/task.entities";

type TaskDashboardProps = {
  tasks: Task[];
};

const TaskDashboard: React.FC<TaskDashboardProps> = ({ tasks }) => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "In Progress", "Completed"];

  const filteredTasks = tasks.filter(task => {
    if (activeTab === "All") return true;
    if (activeTab === "In Progress") return task.progress === "TRACKING NOW";
    if (activeTab === "Completed") return task.progress === "COMPLETED";
    return true;
  });

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 50 }}
      className="px-4 mt-5"
    >
      <View className="bg-gray-100 items-center justify-center rounded-2xl mb-6">
        <SprintSummaryCard
          sprintName="Sprint 2025-01"
          daysLeft="8 days left"
          tasksAssigned={12}
          tasksCompleted={5}
          hoursLogged="42"
        />
      </View>

      <StatusTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs.map(t => ({ name: t }))}
      />

      {filteredTasks.map(task => (
        <TaskCard
          key={task.id}
          {...task}
          onPress={() => {
            if (task.progress === "TRACKING NOW") {
              router.push({
                pathname: "/(tabs)/track",
                params: {
                  title: task.title,
                  sprint: "Sprint 2025-01",
                  subtitle: task.subtitle,
                },
              });
            } else {
              console.log("Tapped:", task.title);
            }
          }}
        />
      ))}
    </ScrollView>
  );
};

export default TaskDashboard;

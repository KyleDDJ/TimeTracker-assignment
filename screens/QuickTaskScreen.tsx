import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";

import SprintSummaryCard from "@/components/SprintSummaryCard";
import { COLORS } from "@/constants/Colors";
import { useTaskStore } from "@/stores/useTaskStore";

const QuickTaskScreen = () => {
  const createQuickTask = useTaskStore(state => state.createQuickTask);

  return (
    <View className="flex-1 bg-white">
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
      </ScrollView>

      <TouchableOpacity
        className="absolute bottom-20 right-6 bg-black w-16 h-16 rounded-full items-center justify-center shadow-lg"
        onPress={() => {
          const newTask = createQuickTask();
          router.push({
            pathname: "/(tabs)/track",
            params: {
              title: newTask.title,
              sprint: "Ad hoc",
              subtitle: "Unplanned Work",
            },
          });
        }}
      >
        <MaterialIcons name="bolt" size={34} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  );
};

export default QuickTaskScreen;

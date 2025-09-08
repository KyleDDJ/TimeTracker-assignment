import { MaterialIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import NoTaskView from "@/components/NoTaskView";
import { COLORS } from "@/constants/Colors";
import { useTasks } from "@/hooks/useTasks";
import TaskDashboard from "@/screens/TasksDashboard";

const TaskScreen = () => {
  const { tasks } = useTasks(); // ✅ single source of truth

  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerClassName="flex-grow py-8">
        {tasks.length === 0 ? (
          <NoTaskView
            title="No Tasks Yet"
            description="Sync your FocusTracker tasks to start tracking your time and managing your sprint efficiently."
            icon={<FontAwesome5 name="tasks" size={50} color={COLORS.gray} />}
          >
            <View className="w-full items-center mt-5 px-6">
              <TouchableOpacity
                className="w-3/5 bg-black flex-row items-center justify-center py-5 rounded-2xl mb-4"
                onPress={() => {
                  // 🔹 in the real app, this should trigger syncing logic
                  // for now, just push a sample task into useTasks context/state
                  console.log("Sync FocusTracker Tasks");
                }}
              >
                <MaterialCommunityIcons
                  name="sync"
                  size={20}
                  color={COLORS.white}
                />
                <Text className="text-white text-base font-semibold ml-2">
                  Sync FocusTracker Tasks
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="w-11/12 border border-gray-300 bg-white flex-row items-center justify-center py-5 rounded-2xl mb-4"
                onPress={() => {
                  // 🔹 placeholder: create task manually
                  console.log("Create Manual Task");
                }}
              >
                <AntDesign name="plus" size={20} color={COLORS.gray} />
                <Text className="text-gray-700 text-base font-semibold ml-2">
                  Create Manual Task
                </Text>
              </TouchableOpacity>
            </View>

            <Text className="text-gray-500 text-center font-semibold text-base">
              Import from CSV
            </Text>
            <View className="px-4 mt-5">
              <View className="bg-gray-50 rounded-xl px-5 py-5 flex-row items-start">
                <AntDesign
                  name="infocirlce"
                  size={18}
                  color={COLORS.gray}
                  className="mr-2"
                />
                <View className="flex-1">
                  <Text className="font-semibold text-gray-900 mb-1">
                    Connect FocusTracker
                  </Text>
                  <Text className="text-gray-500 text-sm">
                    Link your FocusTracker account to automatically sync sprint
                    tasks and track time seamlessly across both platforms.
                  </Text>
                </View>
              </View>
            </View>
          </NoTaskView>
        ) : (
          <TaskDashboard />
        )}
      </ScrollView>

      {tasks.length > 0 && (
        <TouchableOpacity
          className="absolute bottom-20 right-6 bg-black w-16 h-16 rounded-full items-center justify-center shadow-lg"
          onPress={() =>
            router.push({
              pathname: "/(tabs)/track",
              params: {
                title: "Quick Task 001",
                sprint: "Ad hoc",
                subtitle: "Unplanned Work",
              },
            })
          }
        >
          <MaterialIcons name="bolt" size={34} color={COLORS.white} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TaskScreen;

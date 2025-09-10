import { MaterialIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import NoTaskView from "@/components/NoTaskView";
import { COLORS } from "@/constants/Colors";
import { useTasks } from "@/hooks/useTasks";
import TaskDashboard from "@/screens/TasksDashboard";
import { useTaskStore } from "@/stores/useTaskStore";
import { router } from "expo-router";

const TaskScreen = () => {
  const { tasks: TASKS } = useTasks();
  const setTasks = useTaskStore(state => state.setTasks);
  const tasks = useTaskStore(state => state.tasks);
  const [loading, setLoading] = useState(false);

  const handleSync = () => {
    setLoading(true);
    setTimeout(() => {
      setTasks(TASKS);
      setLoading(false);
    }, 2000);
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color={COLORS.green} />
        <Text className="mt-4 text-gray-500 text-base">Loading tasks...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerClassName="flex-grow py-10">
        {tasks.length === 0 ? (
          <NoTaskView
            title="No Tasks Yet"
            description="Sync your FocusTracker tasks to start tracking your time and managing your sprint efficiently."
            icon={<FontAwesome5 name="tasks" size={50} color={COLORS.white} />}
          >
            <View className="w-full items-center mt-5 px-6">
              <TouchableOpacity
                className="w-3/5 flex-row items-center justify-center py-5 rounded-2xl mb-4"
                onPress={handleSync}
                style={{ backgroundColor: COLORS.green }}
              >
                <MaterialCommunityIcons
                  name="sync"
                  size={20}
                  color={COLORS.white}
                />
                <Text
                  className="text-base font-semibold ml-2"
                  style={{ color: COLORS.white }}
                >
                  Sync FocusTracker Tasks
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="w-11/12 border border-gray-300 flex-row items-center justify-center py-5 rounded-2xl mb-4"
                style={{ backgroundColor: COLORS.green }}
                onPress={() => console.log("Create Manual Task")}
              >
                <AntDesign name="plus" size={20} color={COLORS.white} />
                <Text className="text-white text-base font-semibold ml-2">
                  Create Manual Task
                </Text>
              </TouchableOpacity>
            </View>

            <Text className="text-gray-700 text-center font-semibold text-base">
              Import from CSV
            </Text>

            <View className="bg-gray-100 rounded-xl px-5 py-5 flex-row items-start mx-5 my-3">
              <AntDesign
                name="infocirlce"
                size={18}
                color={COLORS.green}
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
          </NoTaskView>
        ) : (
          <TaskDashboard tasks={tasks} />
        )}
      </ScrollView>

      {tasks.length > 0 && (
        <TouchableOpacity
          className="absolute bottom-28 right-6 w-16 h-16 rounded-full items-center justify-center shadow-lg"
          style={{ backgroundColor: COLORS.green }}
          onPress={() => {
            const newTask = useTaskStore.getState().createQuickTask();
            useTaskStore.getState().setActiveTask({
              ...newTask,
              isQuickTask: true,
            });
            router.push("/(tabs)/track");
          }}
        >
          <MaterialIcons name="bolt" size={34} color={COLORS.white} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TaskScreen;

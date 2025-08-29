import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import NoTaskView from "@/screens/NoTaskView";
import TaskDashboard from "@/screens/TasksDashboard";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const TaskScreen = () => {
  const [is_filled, setIsFilled] = useState(false);

  const handleSyncTasks = () => {
    setIsFilled(true);
  };

  const handleCreateTask = () => {
    setIsFilled(true);
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="py-8">
        {!is_filled ? (
          <NoTaskView
            title="No Tasks Yet"
            description="Sync your FocusTracker tasks to start tracking your time and managing your sprint efficiently."
            icon={<FontAwesome5 name="tasks" size={43} color="#9CA3AF" />}
          >
            <View className="w-full max-w-md items-center justify-center self-center">
              <TouchableOpacity
                className="bg-black mt-5 w-60 flex-row justify-center py-4 rounded-xl mb-4 gap-x-2"
                onPress={handleSyncTasks}
              >
                <MaterialCommunityIcons name="sync" size={20} color="white" />
                <Text className="text-white text-base font-semibold">
                  Sync FocusTracker Tasks
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="border border-gray-300 w-80 flex-row justify-center py-4 rounded-xl mb-4 gap-x-2"
                onPress={handleCreateTask}
              >
                <AntDesign name="plus" size={20} color="gray" />
                <Text className="text-gray-500 text-base font-semibold">
                  Create Manual Task
                </Text>
              </TouchableOpacity>
            </View>

            <Text className="text-gray-500 text-center font-semibold text-base mb-8">
              Import from CSV
            </Text>
            <View className="px-4">
              <View className="bg-gray-50 rounded-xl px-5 py-5 flex-row items-start">
                <AntDesign
                  name="infocirlce"
                  size={18}
                  color="#6B7280"
                  style={{ marginRight: 10 }}
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
    </View>
  );
};
export default TaskScreen;

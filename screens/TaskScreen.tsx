import { MaterialIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useCallback, useRef, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

import NoTaskView from "@/components/NoTaskView";
import { COLORS } from "@/constants/Colors";
import { Task } from "@/entities/task.entities";
import { useTasks } from "@/hooks/useTasks";
import TaskDashboard from "@/screens/TasksDashboard";
import { useTaskStore } from "@/stores/useTaskStore";
import { router } from "expo-router";

const TaskScreen = () => {
  const { tasks: TASKS } = useTasks();
  const setTasks = useTaskStore(state => state.setTasks);
  const tasks = useTaskStore(state => state.tasks);
  const [loading, setLoading] = useState(false);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

  const handleSync = () => {
    setLoading(true);
    setTimeout(() => {
      setTasks(TASKS);
      setLoading(false);
    }, 2000);
  };

  const handleDeleteRequest = useCallback((task: Task) => {
    setTaskToDelete(task);
    bottomSheetModalRef.current?.present();
  }, []);

  const handleDeleteConfirm = useCallback(() => {
    if (taskToDelete) {
      setTasks(prev => prev.filter(t => t.id !== taskToDelete.id));
      setTaskToDelete(null);
    }
    bottomSheetModalRef.current?.dismiss();
  }, [taskToDelete, setTasks]);

  const handleDeleteCancel = useCallback(() => {
    setTaskToDelete(null);
    bottomSheetModalRef.current?.dismiss();
  }, []);

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
        <TaskDashboard tasks={tasks} onDeleteRequest={handleDeleteRequest} />
      )}

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

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={["30%"]}
        enablePanDownToClose
        backgroundStyle={{ backgroundColor: COLORS.white }}
      >
        <BottomSheetView className="flex-1 px-6 py-4">
          <View className="items-center mb-6">
            <View
              className="w-16 h-16 rounded-full items-center justify-center mb-4"
              style={{ backgroundColor: COLORS.lightred }}
            >
              <MaterialIcons name="delete" size={32} color={COLORS.jet} />
            </View>
            <Text className="text-lg font-semibold text-gray-900 text-center mb-2">
              Delete Task
            </Text>
            <Text className="text-gray-600 text-center">
              Are you sure you want to delete "{taskToDelete?.title}"? This
              action cannot be undone.
            </Text>
          </View>

          <View className="flex-row gap-3">
            <TouchableOpacity
              className="flex-1 py-3 rounded-xl border border-gray-300"
              onPress={handleDeleteCancel}
            >
              <Text className="text-center text-gray-700 font-medium">
                Continue tracking
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-1 py-3 rounded-xl"
              style={{ backgroundColor: COLORS.jet }}
              onPress={handleDeleteConfirm}
            >
              <Text className="text-center text-white font-medium">Delete</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
};

export default TaskScreen;

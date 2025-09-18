import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useCallback, useRef, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

import BreakSheet from "@/components/BreakSheet";
import ManualTaskModal from "@/components/ManualTaskModal";
import NoTaskView from "@/components/NoTaskView";
import QuickTaskButton from "@/components/QuickTaskButton";
import { COLORS } from "@/constants/Colors";
import { Task } from "@/entities/task.entities";
import { useTasks } from "@/hooks/useTasks";
import TasksDashboard from "@/screens/TasksDashboard";
import { useTaskStore } from "@/stores/useTaskStore";

/**
 * TaskScreen component for displaying, syncing, and managing user tasks.
 *
 * Triggered: App navigation to the Task screen
 *
 * Features:
 *  - Display tasks using TasksDashboard, or show NoTaskView if empty
 *  - Sync tasks from FocusTracker (simulated with useTasks hook)
 *  - Create manual tasks (stubbed for future feature)
 *  - Quick task creation via FAB options
 *  - Start breaks using a dedicated BreakSheet
 *  - Delete task confirmation with BottomSheetModal and blur overlay
 *  - Pull-to-refresh support for task list
 *
 * State & Refs:
 *  - `loading`: Boolean, handles sync operation loader
 *  - `taskToDelete`: Task | null, holds the currently selected task for deletion
 *  - `isSheetOpen`: Boolean, manages delete confirmation blur overlay
 *  - `refreshing`: Boolean, controls pull-to-refresh state
 *  - `deleteSheetRef`, `breakSheetRef`, `fabSheetRef`: BottomSheet refs for modals
 *
 * Flow:
 *  1. User lands on TaskScreen
 *     - If no tasks: Show NoTaskView with sync + manual creation options
 *     - If tasks exist: Render TaskDashboard
 *  2. User can:
 *     - Sync tasks from FocusTracker
 *     - Create manual tasks
 *     - Use FAB to: (a) Create quick task, (b) Take a break, (c) Add manual task
 *     - Swiping right delete → confirm via BottomSheet with blur overlay
 *
 * @component
 */
const TaskScreen: React.FC = () => {
  /** Tasks fetched from custom hook (simulates backend API) */
  const { tasks: TASKS } = useTasks();

  /** State setter for tasks in the global store */
  const setTasks = useTaskStore(state => state.setTasks);

  /** Current tasks in the global store */

  const tasks = useTaskStore(state => state.tasks);

  /** Loading state for sync operations */

  const [loading, setLoading] = useState(false);
  /** Task selected for deletion */
  const [task_to_delete, setTaskToDelete] = useState<Task | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  /** Refs */
  const deleteSheetRef = useRef<BottomSheetModal>(null);
  const breakSheetRef = useRef<BottomSheetModal>(null);
  const fabSheetRef = useRef<BottomSheetModal>(null);

  const [showManualModal, setShowManualModal] = useState(false);

  /** Sync tasks */
  const handleSync = () => {
    setLoading(true);
    setTimeout(() => {
      setTasks(TASKS);
      setLoading(false);
    }, 2000);
  };

  /** Delete flow */
  const handleDeleteRequest = useCallback((task: Task) => {
    setTaskToDelete(task);
    deleteSheetRef.current?.present();
  }, []);

  const handleDeleteConfirm = useCallback(() => {
    if (task_to_delete) {
      setTasks(prev => prev.filter(t => t.id !== task_to_delete.id));
      setTaskToDelete(null);
    }
    deleteSheetRef.current?.dismiss();
  }, [task_to_delete, setTasks]);

  const handleDeleteCancel = useCallback(() => {
    setTaskToDelete(null);
    deleteSheetRef.current?.dismiss();
  }, []);

  /** Refresh tasks */
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setTasks(TASKS);
      setRefreshing(false);
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
              <Text className="text-base font-semibold ml-2 text-white">
                Sync FocusTracker Tasks
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="w-11/12 flex-row items-center justify-center py-5 rounded-2xl mb-4"
              style={{ backgroundColor: COLORS.green }}
              onPress={() => {
                fabSheetRef.current?.dismiss();
                setShowManualModal(true);
              }}
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
              className="mr-3"
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
        <TasksDashboard
          tasks={tasks}
          onDeleteRequest={handleDeleteRequest}
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      )}

      {tasks.length > 0 && (
        <TouchableOpacity
          className="absolute bottom-28 right-6 w-16 h-16 rounded-full items-center justify-center shadow-lg"
          style={{ backgroundColor: COLORS.darkgreen }}
          onPress={() => fabSheetRef.current?.present()}
        >
          <AntDesign name="plus" size={34} color={COLORS.white} />
        </TouchableOpacity>
      )}

      <BottomSheetModal
        ref={fabSheetRef}
        index={0}
        snapPoints={["32%"]}
        enablePanDownToClose
        backgroundStyle={{ backgroundColor: COLORS.white }}
      >
        <BottomSheetView className="flex-1 px-6 py-6">
          <Text className="text-lg font-semibold text-gray-900 text-center mb-6">
            What do you want to do?
          </Text>

          <QuickTaskButton onDone={() => fabSheetRef.current?.dismiss()} />

          <TouchableOpacity
            className="w-full flex-row items-center py-4 rounded-xl px-4 mb-3"
            style={{ backgroundColor: COLORS.green }}
            onPress={() => {
              fabSheetRef.current?.dismiss();
              breakSheetRef.current?.present();
            }}
          >
            <MaterialCommunityIcons
              name="coffee"
              size={24}
              color={COLORS.white}
            />
            <Text className="ml-3 text-white font-semibold">Take a Break</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="w-full flex-row items-center py-4 rounded-xl px-4"
            style={{ backgroundColor: COLORS.green }}
            onPress={() => {
              fabSheetRef.current?.dismiss();
              setShowManualModal(true);
            }}
          >
            <AntDesign name="plus" size={24} color={COLORS.white} />
            <Text className="ml-3 text-white font-semibold">Manual Task</Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheetModal>

      <ManualTaskModal
        visible={showManualModal}
        onClose={() => setShowManualModal(false)}
      />

      <BottomSheetModal
        ref={breakSheetRef}
        index={0}
        snapPoints={["35%"]}
        enablePanDownToClose
        backgroundStyle={{ backgroundColor: COLORS.white }}
      >
        <BreakSheet onClose={() => breakSheetRef.current?.dismiss()} />
      </BottomSheetModal>

      <BottomSheetModal
        ref={deleteSheetRef}
        index={0}
        snapPoints={["30%"]}
        enablePanDownToClose
        backgroundStyle={{ backgroundColor: COLORS.white }}
        onChange={index => index >= 0}
      >
        <BottomSheetView className="flex-1 px-6 py-4">
          <View className="items-center mb-6">
            <View
              className="w-16 h-16 rounded-full items-center justify-center mb-4"
              style={{ backgroundColor: COLORS.lightred }}
            >
              <MaterialCommunityIcons
                name="delete-alert"
                size={32}
                color={COLORS.jet}
              />
            </View>
            <Text className="text-lg font-semibold text-gray-900 text-center mb-2">
              Delete Task
            </Text>
            <Text className="text-gray-600 text-center">
              Are you sure you want to delete "{task_to_delete?.title}"?
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

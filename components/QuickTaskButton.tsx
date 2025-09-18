import { COLORS } from "@/constants/Colors";
import { useTaskStore } from "@/stores/useTaskStore";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

export default function QuickTaskButton({ onDone }: { onDone?: () => void }) {
  const createQuickTask = useTaskStore(state => state.createQuickTask);
  const setActiveTask = useTaskStore(state => state.setActiveTask);

  const handleQuickTask = () => {
    const newTask = createQuickTask();
    setActiveTask({ ...newTask, isQuickTask: true });
    onDone?.();
    router.push("/(tabs)/track");
  };

  return (
    <TouchableOpacity
      className="w-full flex-row items-center py-4 rounded-xl mb-3 px-4"
      style={{ backgroundColor: COLORS.green }}
      onPress={handleQuickTask}
    >
      <MaterialIcons name="bolt" size={24} color={COLORS.white} />
      <Text className="ml-3 text-white font-semibold">Quick Task</Text>
    </TouchableOpacity>
  );
}

import { COLORS } from "@/constants/Colors";
import { Task } from "@/entities/task.entities";
import { useTaskStore } from "@/stores/useTaskStore";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function BreakSheet({ onClose }: { onClose?: () => void }) {
  const prependTask = useTaskStore(state => state.prependTask);
  const setActiveTask = useTaskStore(state => state.setActiveTask);

  const handleBreak = (minutes: number) => {
    const breakTask: Task = {
      id: Date.now(),
      title: `Break - ${minutes} min`,
      subtitle: "Take a short pause",
      estimated: `${minutes}m`,
      progress: "TO DO",
      isActive: false,
      isQuickTask: true,
      type: "break",
      elapsed: 0,
      icon: {
        library: "MaterialIcons",
        name: "free-breakfast",
        size: 24,
        color: COLORS.white,
      },
    };

    prependTask(breakTask);
    setActiveTask(breakTask);
    onClose?.();
    router.push("/(tabs)/track");
  };

  return (
    <BottomSheetView className="flex-1 px-6 py-4">
      <Text className="text-lg text-black font-semibold mb-4 text-center">
        Start your Break
      </Text>

      <View className="flex-row gap-3 mb-4">
        {[5, 10, 15].map(min => (
          <TouchableOpacity
            key={min}
            className="flex-1 py-3 rounded-xl items-center justify-center"
            style={{ backgroundColor: COLORS.green }}
            onPress={() => handleBreak(min)}
          >
            <Text className="font-semibold text-white">{min} min</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        className="w-full py-5 rounded-xl items-center justify-center"
        style={{ backgroundColor: COLORS.green }}
        onPress={() => handleBreak(60)}
      >
        <Text className="font-semibold text-white">Lunch Break - 1h</Text>
      </TouchableOpacity>
    </BottomSheetView>
  );
}

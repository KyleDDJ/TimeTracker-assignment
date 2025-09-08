import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

import ProgressBarTask from "@/components/ProgressBarTrack";
import TaskInfoHeader from "@/components/TaskInfoHeader";
import MiniTaskCard from "@/components/TrackTaskCard";
import { COLORS } from "@/constants/Colors";
import { useTrackTasks } from "@/hooks/useTrackTasks";

const TrackScreen: React.FC = () => {
  const { tasks } = useTrackTasks();
  const { title, sprint, subtitle } = useLocalSearchParams();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerClassName="flex-grow px-4 pt-4 pb-24">
        <View className="bg-gray-100 rounded-2xl p-5 items-center mb-5">
          <TaskInfoHeader
            title={(title as string) || "API Integration Setup"}
            sprint={(sprint as string) || "Sprint 2025-01"}
            subtitle={(subtitle as string) || "Frontend Development"}
          />

          <ProgressBarTask progress={0.3} />

          <View className="mt-4 items-center">
            <Text className="font-bold text-3xl">02:34:15</Text>
          </View>

          <View className="flex-row justify-center items-center mt-5 mb-3">
            <View className="w-14 h-14 rounded-full border border-gray-400 items-center justify-center">
              <Entypo
                name="controller-fast-backward"
                size={23}
                color={COLORS.gray}
              />
            </View>

            <View className="w-20 h-20 rounded-full bg-black items-center justify-center mx-8">
              <AntDesign name="pause" size={35} color={COLORS.white} />
            </View>

            <View className="w-14 h-14 rounded-full border border-gray-400 items-center justify-center">
              <Entypo
                name="controller-fast-forward"
                size={23}
                color={COLORS.gray}
              />
            </View>
          </View>
        </View>

        <View className="mt-1 mb-3 flex-row justify-between items-center">
          <Text className="text-lg font-bold">Up Next</Text>
        </View>

        <View className="mt-2">
          {tasks.map(task => (
            <MiniTaskCard key={task.id} task={task} isActive={task.isActive} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TrackScreen;

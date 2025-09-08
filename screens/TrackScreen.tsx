import Entypo from "@expo/vector-icons/Entypo";
import React, { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// import ProgressBarTask from "@/components/ProgressBarTrack";
import TaskInfoHeader from "@/components/TaskInfoHeader";
import MiniTaskCard from "@/components/TrackTaskCard";
import { COLORS } from "@/constants/Colors";
import { useTaskStore } from "@/stores/useTaskStore";

const TrackScreen: React.FC = () => {
  const {
    activeTask,
    tasks,
    isPlaying,
    elapsed,
    togglePlay,
    nextTask,
    prevTask,
  } = useTaskStore();

  useEffect(() => {
    let interval: number | undefined;

    if (isPlaying && activeTask) {
      interval = setInterval(() => {
        useTaskStore.setState(state => ({ elapsed: state.elapsed + 1 }));
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, activeTask]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const mins = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: 96,
        }}
      >
        <View className="bg-gray-100 rounded-2xl p-5 items-center mb-5">
          {activeTask ? (
            <>
              <TaskInfoHeader
                title={activeTask.title}
                sprint="Sprint 2025-01"
                subtitle={activeTask.subtitle}
              />

              {/* <ProgressBarTask progress={0.3} /> */}

              <View className="mt-4 items-center">
                <Text className="font-bold text-3xl">
                  {formatTime(elapsed)}
                </Text>
              </View>

              <View className="flex-row justify-center items-center mt-5 mb-3">
                <TouchableOpacity onPress={prevTask} disabled={!activeTask}>
                  <View className="w-14 h-14 rounded-full border border-gray-400 items-center justify-center">
                    <Entypo
                      name="controller-fast-backward"
                      size={23}
                      color={activeTask ? COLORS.black : COLORS.gray400}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={togglePlay} disabled={!activeTask}>
                  <View className="w-20 h-20 rounded-full bg-black items-center justify-center mx-8">
                    <Entypo
                      name={isPlaying ? "controller-paus" : "controller-play"}
                      size={35}
                      color={COLORS.white}
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={nextTask} disabled={!activeTask}>
                  <View className="w-14 h-14 rounded-full border border-gray-400 items-center justify-center">
                    <Entypo
                      name="controller-fast-forward"
                      size={23}
                      color={activeTask ? COLORS.black : COLORS.gray400}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <Text className="text-gray-500 font-semibold text-lg">
              Select a task to start tracking
            </Text>
          )}
        </View>

        <View className="mt-1 mb-3 flex-row justify-between items-center">
          <Text className="text-lg font-bold">Up Next</Text>
        </View>

        <View className="mt-2">
          {tasks
            .filter(t => t.id !== activeTask?.id)
            .map(task => (
              <MiniTaskCard
                key={task.id}
                task={task}
                isActive={task.isActive}
              />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TrackScreen;

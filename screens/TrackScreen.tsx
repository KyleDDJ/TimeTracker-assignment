import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import NoTrackView from "@/components/NoTrackView";
import TaskInfoHeader from "@/components/TaskInfoHeader";
import MiniTaskCard from "@/components/TrackTaskCard";
import { COLORS } from "@/constants/Colors";
import { useTaskStore } from "@/stores/useTaskStore";
import { AntDesign } from "@expo/vector-icons";

const TrackScreen: React.FC = () => {
  const {
    tasks,
    activeTask,
    isPlaying,
    elapsed,
    togglePlay,
    nextTask,
    prevTask,
    setActiveTask,
  } = useTaskStore();

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

  const upNextTasks = activeTask
    ? tasks.slice(tasks.findIndex(t => t.id === activeTask.id) + 1)
    : tasks;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={upNextTasks}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: 96,
        }}
        ListHeaderComponent={
          <View>
            <View className="bg-gray-100 rounded-2xl p-5 items-center mb-5">
              {activeTask ? (
                <>
                  <TaskInfoHeader task={activeTask} sprint="Sprint 2025-01" />
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
                    <TouchableOpacity
                      onPress={togglePlay}
                      disabled={!activeTask}
                    >
                      <View className="w-20 h-20 rounded-full bg-black items-center justify-center mx-8">
                        <AntDesign
                          name={isPlaying ? "pause" : "caretright"}
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
                <NoTrackView />
              )}
            </View>

            <View className="mt-1 mb-3 flex-row justify-between items-center">
              <Text className="text-lg font-bold">Up Next</Text>
            </View>
          </View>
        }
        ListEmptyComponent={
          <Text className="text-gray-500 text-center">No upcoming tasks</Text>
        }
        renderItem={({ item }) => (
          <MiniTaskCard
            task={item}
            isActive={activeTask?.id === item.id}
            onPress={() => setActiveTask(item)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default TrackScreen;

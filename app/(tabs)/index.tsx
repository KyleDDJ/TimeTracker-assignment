const Track = () => {
  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-5">
        <View className="flex-1 pt-2">
          <EmptyState
            title="No Tasks Yet"
            description="Sync your FocusTracker tasks to start tracking your time and managing your sprint efficiently."
            icon={<FontAwesome5 name="tasks" size={48} color="#9CA3AF" />}
          />
          <TouchableOpacity className="bg-black mt-5 w-80 items-center justify-center self-center py-4 rounded-xl mb-4 flex-row items-center justify-center">
            <MaterialCommunityIcons name="sync" size={20} color="white" />
            <Text className="text-white text-base font-semibold ml-2">
              Sync FocusTracker Tasks
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="border border-gray-300 w-full py-4 rounded-xl mb-4 flex-row items-center justify-center">
            <AntDesign name="plus" size={20} color="black" />
            <Text className="text-black text-base font-semibold ml-2">
              Create Manual Task
            </Text>
          </TouchableOpacity>
          <Text className="text-gray-400 text-center text-base mb-8">
            Import from CSV
          </Text>
          <View className="bg-gray-50 rounded-xl p-4 flex-row items-start w-full">
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
      </ScrollView>
    </View>
  );
};

export default Track;

import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import EmptyState from "@/components/EmptyState";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

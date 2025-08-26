const track = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-6 py-8">
        <View className="flex-1">
          <Text className="font-semibold text-gray-900 mb-1">kyle1</Text>
          <Text className="text-gray-500 text-sm">kyle2</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default track;
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

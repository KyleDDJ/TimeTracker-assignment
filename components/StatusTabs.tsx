import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Tab = {
  name: string;
  icon?: React.ReactNode;
};

type StatusTabsProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: Tab[];
};

const StatusTabs: React.FC<StatusTabsProps> = ({
  activeTab,
  setActiveTab,
  tabs,
}) => {
  return (
    <View className="bg-gray-100 rounded-2xl p-1 mb-4">
      <View className="flex-row w-full">
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab.name}
            onPress={() => setActiveTab(tab.name)}
            className={`flex-1 py-3 items-center rounded-xl ${
              activeTab === tab.name ? "bg-white" : "bg-gray-100"
            }`}
          >
            <View className="flex-row items-center justify-center gap-2">
              {tab.icon && <View>{tab.icon}</View>}
              <Text
                className={`font-semibold ${
                  activeTab === tab.name ? "text-black" : "text-gray-600"
                }`}
              >
                {tab.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default StatusTabs;

import { COLORS } from "@/constants/Colors";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Tab = {
  name: string;
  icon?: (isActive: boolean) => React.ReactNode;
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
}) => (
  <View
    className="rounded-2xl p-1 mb-5"
    style={{ backgroundColor: COLORS.darkgreen }}
  >
    <View className="flex-row w-full">
      {tabs.map(tab => {
        const isActive = activeTab === tab.name;
        return (
          <TouchableOpacity
            key={tab.name}
            onPress={() => setActiveTab(tab.name)}
            style={{
              flex: 1,
              paddingVertical: 12,
              alignItems: "center",
              borderRadius: 12,
              backgroundColor: isActive ? COLORS.green : COLORS.darkgreen,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {tab.icon && <>{tab.icon(isActive)}</>}
              <Text
                style={{
                  marginLeft: tab.icon ? 6 : 0,
                  fontWeight: "600",
                  color: isActive ? COLORS.white : COLORS.gray500,
                }}
              >
                {tab.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  </View>
);

export default StatusTabs;

import MiniTaskCard from "@/components/MiniTaskCard";
import ProgressBarTask from "@/components/ProgressBarTrack";
import TaskInfoHeader from "@/components/TaskInfoHeader";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

import { COLORS } from "@/constants/Colors";
import { TRACK_TASKS } from "@/constants/TrackTask";

const TrackScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 100,
          paddingHorizontal: 16,
          paddingTop: 16,
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.gray100,
            borderRadius: 20,
            padding: 20,
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <TaskInfoHeader
            title="API Integration Setup"
            sprint="Sprint 2025-01"
            subtitle="Frontend Development"
          />

          <ProgressBarTask progress={0.3} />

          <View style={{ marginTop: 16, alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 28 }}>02:34:15</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              marginBottom: 12,
              gap: 32,
            }}
          >
            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                borderWidth: 1,
                borderColor: COLORS.gray,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Entypo
                name="controller-fast-backward"
                size={23}
                color={COLORS.gray}
              />
            </View>

            <View
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                backgroundColor: COLORS.black,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="pause" size={35} color={COLORS.white} />
            </View>

            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                borderWidth: 1,
                borderColor: COLORS.gray,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Entypo
                name="controller-fast-forward"
                size={23}
                color={COLORS.gray}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 16,
            marginBottom: 12,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Up Next</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Ionicons name="shuffle" size={20} color={COLORS.gray} />
            <Text style={{ fontWeight: "bold", color: COLORS.gray }}>
              Shuffle
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 8 }}>
          {TRACK_TASKS.map((task, index) => (
            <MiniTaskCard key={index} {...task} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TrackScreen;

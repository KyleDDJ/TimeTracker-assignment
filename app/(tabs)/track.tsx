import ProgressBar from "@/components/Progress";
import TaskInfoHeader from "@/components/TaskInfoHeader";
import MiniTaskCard from "@/screens/MiniTaskCard";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import React from "react";
import { Dimensions, SafeAreaView, ScrollView, Text, View } from "react-native";

const Track: React.FC = () => {
  const screenWidth = Dimensions.get("window").width;

  const tasks = [
    {
      title: "Mobile UI Testing",
      subtitle: "QA",
      estimated: "4h estimated",
      leftIcon: <MaterialIcons name="phone-iphone" size={22} color="white" />,
      rightIcon: <Ionicons name="play-circle-sharp" size={35} color="black" />,
    },
    {
      title: "Analytics Dashboard",
      subtitle: "Frontend",
      estimated: "2h estimated",
      leftIcon: <Octicons name="graph" size={22} color="white" />,
      rightIcon: <Ionicons name="play-circle-outline" size={35} color="gray" />,
    },
    {
      title: "User Authentication",
      subtitle: "Backend",
      estimated: "4h estimated",
      leftIcon: <FontAwesome6 name="users" size={20} color="white" />,
      rightIcon: <Ionicons name="play-circle-outline" size={35} color="gray" />,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
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
            backgroundColor: "#F3F4F6",
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

          <ProgressBar
            progress={0.3}
            width={screenWidth * 0.8}
            color="black"
            unfilledColor="lightgrey"
          />

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
                borderColor: "gray",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Entypo name="controller-fast-backward" size={23} color="gray" />
            </View>

            <View
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                backgroundColor: "black",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="pause" size={35} color="white" />
            </View>

            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                borderWidth: 1,
                borderColor: "gray",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Entypo name="controller-fast-forward" size={23} color="gray" />
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
            <Ionicons name="shuffle" size={20} color="grey" />
            <Text style={{ fontWeight: "bold", color: "gray" }}>Shuffle</Text>
          </View>
        </View>

        <View style={{ marginTop: 8 }}>
          {tasks.map((task, index) => (
            <MiniTaskCard key={index} {...task} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Track;

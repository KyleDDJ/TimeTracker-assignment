import { Octicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "@/constants/Colors";

type AnalyticsTask = {
  id: number;
  title: string;
  subtitle: string;
  estimated: string;
  percentage?: string;
  type: string;
};

type Props = {
  task: AnalyticsTask;
};

const AnalyticsTaskCard = ({ task }: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.leftIcon}>
        <Octicons name="dot-fill" size={30} color={COLORS.gray400} />
      </View>

      <View style={styles.content}>
        <Text style={styles.metric}>{task.title}</Text>
        <Text style={styles.value}>{task.subtitle}</Text>
      </View>

      <View style={styles.rightColumn}>
        <Text style={styles.estimate}>{task.estimated}</Text>
        {task.percentage && (
          <Text style={styles.percentage}>{task.percentage}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.gray200,
  },
  leftIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  metric: {
    fontSize: 16,
    fontWeight: "500",
    color: COLORS.black,
  },
  value: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.gray400,
  },
  rightColumn: {
    alignItems: "flex-end",
  },
  estimate: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.black,
  },
  percentage: {
    fontSize: 12,
    color: COLORS.gray600,
    marginTop: 4,
  },
});

export default AnalyticsTaskCard;

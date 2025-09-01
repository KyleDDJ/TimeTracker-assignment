import { COLORS } from "@/constants/Colors";
import { TrackTask } from "@/constants/TrackTask";
import { getLeftIcon, getRightIcon } from "@/helpers/TrackTaskIcons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type MiniTaskCardProps = {
  task: TrackTask;
  isActive?: boolean;
  showIconBackground?: boolean;
  onPress?: () => void;
};

const MiniTaskCard: React.FC<MiniTaskCardProps> = ({
  task,
  isActive = false,
  showIconBackground = true,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <View
        style={[
          styles.leftIconContainer,
          showIconBackground && styles.iconBackground,
        ]}
      >
        {getLeftIcon(task)}
      </View>

      <View style={styles.content}>
        <View style={styles.topRow}>
          <Text style={styles.title}>{task.title}</Text>
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.subtitle}>
            {task.subtitle} {task.estimated ? `• ${task.estimated}` : ""}
          </Text>
        </View>
      </View>

      <View style={styles.rightIcon}>{getRightIcon(task, isActive)}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.gray300,
  },
  leftIconContainer: {
    marginRight: 12,
    padding: 12,
    borderRadius: 12,
  },
  iconBackground: {
    backgroundColor: COLORS.gray300,
  },
  content: {
    flex: 1,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "semibold",
    color: COLORS.black,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.gray400,
  },
  rightIcon: {
    marginLeft: 12,
  },
});

export default MiniTaskCard;

import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type MiniTaskCardProps = {
  title?: string;
  subtitle?: string;
  estimated?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showIconBackground?: boolean;
  rightEstimate?: string;
  percentage?: string;
  onPress?: (event: GestureResponderEvent) => void;
};

const MiniTaskCard: React.FC<MiniTaskCardProps> = ({
  title,
  subtitle,
  estimated,
  leftIcon,
  rightIcon,
  onPress,
  showIconBackground = true,
  rightEstimate,
  percentage,
}) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      {leftIcon && (
        <View
          style={[
            styles.leftIconContainer,
            showIconBackground && styles.iconBackground,
          ]}
        >
          {leftIcon}
        </View>
      )}

      <View style={styles.content}>
        <View style={styles.topRow}>
          <Text style={styles.title}>{title}</Text>
          {rightEstimate && (
            <Text style={styles.rightEstimate}>{rightEstimate}</Text>
          )}
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.subtitle}>
            {subtitle} {estimated ? `• ${estimated}` : ""}
          </Text>
          {percentage && <Text style={styles.percentage}>{percentage}</Text>}
        </View>
      </View>

      {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  leftIconContainer: {
    marginRight: 12,
    padding: 12,
    borderRadius: 12,
  },
  iconBackground: {
    backgroundColor: "#D1D5DB",
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
    fontWeight: "bold",
    color: "#000",
  },
  rightEstimate: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6B7280",
  },
  percentage: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6B7280",
  },
  rightIcon: {
    marginLeft: 12,
  },
});

export default MiniTaskCard;

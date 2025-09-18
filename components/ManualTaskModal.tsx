import { COLORS } from "@/constants/Colors";
import { Task } from "@/entities/task.entities";
import { useTaskStore } from "@/stores/useTaskStore";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type ManualTaskModalProps = {
  visible: boolean;
  onClose: () => void;
};

const ManualTaskModal: React.FC<ManualTaskModalProps> = ({
  visible,
  onClose,
}) => {
  const setTasks = useTaskStore(state => state.setTasks);
  const [title, setTitle] = useState("");
  const [sub_title, setSubtitle] = useState("");
  const [estimated, setEstimated] = useState("");
  const [priority, setPriority] = useState<"Low" | "Medium" | "High">("Low");

  const handleCreateTask = () => {
    if (!title.trim()) return alert("Title cannot be empty");

    const newTask: Task = {
      id: Date.now(),
      title,
      subtitle: sub_title,
      estimated,
      progress: "TO DO",
      icon: {
        library: "AntDesign",
        name: "clockcircleo",
        size: 24,
        color: COLORS.green,
      },
      type: "mobile",
    };

    setTasks(prev => [newTask, ...prev]);

    setTitle("");
    setSubtitle("");
    setEstimated("");
    setPriority("Low");

    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View
          style={{
            width: "85%",
            backgroundColor: "white",
            borderRadius: 16,
            padding: 20,
          }}
        >
          <ScrollView keyboardShouldPersistTaps="handled">
            <Text className="text-lg font-semibold mb-4 text-center">
              Create a new task
            </Text>

            <TextInput
              value={title}
              placeholder="Task Title"
              onChangeText={setTitle}
              className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
            />

            <TextInput
              value={sub_title}
              placeholder="Task Subtitle"
              onChangeText={setSubtitle}
              className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
            />

            <View className="mb-6">
              <Text className="mb-2 font-semibold text-black">
                Estimated Duration (hours)
              </Text>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 5 }}
              >
                {Array.from({ length: 24 }, (_, i) => i + 1).map(hour => (
                  <TouchableOpacity
                    key={hour}
                    onPress={() => setEstimated(hour.toString())}
                    className="px-4 py-2 mr-2 rounded-xl items-center justify-center"
                    style={{
                      backgroundColor:
                        estimated === hour.toString()
                          ? COLORS.green
                          : COLORS.gray400,
                    }}
                  >
                    <Text
                      style={{
                        color:
                          estimated === hour.toString()
                            ? COLORS.white
                            : COLORS.gray200,
                        fontWeight: "600",
                      }}
                    >
                      {hour}h
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            <View>
              <Text className="mb-2 font-semibold text-black">Priority</Text>
            </View>
            <View className="flex-row mb-6">
              {["Low", "Medium", "High"].map(pr => (
                <TouchableOpacity
                  key={pr}
                  onPress={() => setPriority(pr as "Low" | "Medium" | "High")}
                  className="flex-1 py-3 mr-2 rounded-xl items-center justify-center"
                  style={{
                    backgroundColor:
                      priority === pr ? COLORS.green : COLORS.gray400,
                  }}
                >
                  <Text style={{ color: COLORS.gray200, fontWeight: "600" }}>
                    {pr}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity
              className="w-full py-5 rounded-xl items-center justify-center mb-3"
              style={{ backgroundColor: COLORS.green }}
              onPress={handleCreateTask}
            >
              <Text className="font-semibold text-white">Add Task</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="w-full py-5 rounded-xl items-center justify-center"
              style={{ backgroundColor: COLORS.darkgreen }}
              onPress={onClose}
            >
              <Text className="font-semibold text-white">Cancel</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ManualTaskModal;

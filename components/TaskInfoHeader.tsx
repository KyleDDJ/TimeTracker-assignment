import { COLORS } from "@/constants/Colors";
import { Task } from "@/entities/task.entities";
import { DynamicIcon } from "@/helpers/trackTaskIcons";
import React from "react";
import { Text, View } from "react-native";

type TaskInfoHeaderProps = {
  task: Task;
  sprint: string;
};

const TaskInfoHeader: React.FC<TaskInfoHeaderProps> = ({ task, sprint }) => {
  return (
    <>
      <View className="bg-gray-300 rounded-xl px-10 py-10 mt-3 mb-4">
        {task.icon ? (
          <DynamicIcon
            library={task.icon.library}
            name={task.icon.name}
            size={50}
            color={task.icon.color}
          />
        ) : (
          <DynamicIcon
            library="Entypo"
            name="dot-single"
            size={50}
            color={COLORS.white}
          />
        )}
      </View>

      <View className="justify-center items-center">
        <Text className="font-bold text-2xl mb-3">{task.title}</Text>
        <View className="flex-row gap-2 items-center">
          <Text className="text-gray-600 text-xl">{sprint}</Text>
          <Text className="font-semibold text-3xl">•</Text>
          <Text className="text-gray-600 text-xl">{task.subtitle}</Text>
        </View>
      </View>
    </>
  );
};

export default TaskInfoHeader;

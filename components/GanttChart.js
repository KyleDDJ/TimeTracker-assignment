import { Text, View } from "react-native";

const GanttChart = () => {
  const tasks = [
    {
      id: 1,
      task: "API Integration",
      duration: "2h 15m",
      start: 9,
      end: 11.25,
    },
    {
      id: 2,
      task: "Database Migration",
      duration: "3h 30m",
      start: 12.5,
      end: 16,
    },
    { id: 3, task: "Mobile Testing", duration: "1h 30m", start: 16.5, end: 18 },
    { id: 4, task: "Break", duration: "27m", start: 11.25, end: 11.7 },
  ];

  const times = ["9 AM", "12 PM", "3 PM", "6 PM"];

  return (
    <View className="bg-gray-50 rounded-xl p-4">
      <View className="relative flex-row">
        <View className="w-28 mt-12">
          {tasks.map(task => (
            <View key={task.id} style={{ height: 60 }} className="mb-1">
              <Text className="text-gray-800 text-xs font-bold">
                {task.task}
              </Text>
              <Text className="text-gray-500 text-xs">{task.duration}</Text>
            </View>
          ))}
        </View>

        <View className="flex-1 relative">
          <View className="flex-row justify-between mb-2">
            {times.map((time, idx) => (
              <Text key={idx} className="text-gray-500 text-xs">
                {time}
              </Text>
            ))}
          </View>

          <View className="border-t border-gray-300 mb-1" />

          {tasks.map((task, idx) => (
            <View
              key={task.id}
              style={{
                position: "absolute",
                top: idx * 64,
                left: ((task.start - 9) / 9) * 100 + "%",
                width: ((task.end - task.start) / 9) * 100 + "%",
                height: 28,
                borderRadius: 6,
                backgroundColor: "#374151",
                justifyContent: "center",
                paddingHorizontal: 6,
              }}
              className="mt-10"
            >
              <Text
                className="text-white text-xs font-semibold"
                numberOfLines={1}
              >
                {`${task.start}:00 - ${task.end}:00`}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default GanttChart;

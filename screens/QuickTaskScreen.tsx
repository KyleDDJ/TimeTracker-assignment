// import { router } from "expo-router";
// import React from "react";
// import { TouchableOpacity, View } from "react-native";

// import { useTaskStore } from "@/stores/useTaskStore";

// const QuickTaskScreen = () => {
//   const createQuickTask = useTaskStore(state => state.createQuickTask);

//   return (
//     <View className="flex-1 bg-white">
//       <TouchableOpacity
//         className="absolute bottom-20 right-6 bg-black w-16 h-16 rounded-full items-center justify-center shadow-lg"
//         onPress={() => {
//           const newTask = createQuickTask();
//           router.push({
//             pathname: "/(tabs)/track",
//             params: {
//               title: newTask.title,
//               sprint: "Ad hoc",
//               subtitle: "Unplanned Work",
//             },
//           });
//         }}
//       >
//         {/* <MaterialIcons name="bolt" size={34} color={COLORS.white} /> */}
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default QuickTaskScreen;

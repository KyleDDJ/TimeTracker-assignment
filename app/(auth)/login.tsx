const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        className="px-6 py-8"
      >
        <View className="items-center pt-10 mb-6">
          <View className="w-20 h-20 bg-black rounded-2xl items-center justify-center mb-4">
            <AntDesign name="clockcircle" size={28} color="white" />
          </View>
          <Text className="text-2xl font-bold text-gray-900">TimeTracker</Text>
          <Text className="text-gray-500 mt-1 text-center">
            Track your sprint tasks efficiently
          </Text>
        </View>
        <View className="items-center pt-5 mb-6">
          <Text className="text-2xl font-bold text-gray-900">Welcome back</Text>
          <Text className="text-l text-gray-500 mt-1 text-center">
            Sign in to continue tracking your task
          </Text>
        </View>
        <TouchableOpacity className="border border-gray-300 rounded-xl py-3 px-4 mb-4">
          <View className="flex-row items-center gap-5 justify-center space-x-2">
            <AntDesign name="google" size={24} color="black" />
            <Text className="text-gray-700 font-bold text-base">
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>
        <View className="flex-row items-center mb-4">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-2 text-gray-400">or</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>
        <CustomInput
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <CustomInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <CustomButton
          title="Sign In"
          onPress={() => console.log("Sign In Pressed")}
        />

        {/* Sign Up Link */}
        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-500">Don’t have an account? </Text>
          <TouchableOpacity>
            <Text className="text-black font-semibold">Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

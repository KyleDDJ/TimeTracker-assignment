const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember_me, setRememberMe] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        className="px-6 py-8"
      >
        <LogoHeader
          iconName="clockcircle"
          title="TimeTracker"
          subtitle="Track your sprint tasks efficiently"
        />

        <ScreenHeader
          title="Welcome back"
          subtitle="Sign in to continue tracking your task"
        />

        <SocialButton
          iconName="google"
          text="Continue with Google"
          onPress={() => console.log("Google login")}
        />

        <Divider text="or" />

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

        <View className="flex-row items-center justify-between mt-3 mb-5">
          <Checkbox
            label="Remember me"
            checked={remember_me}
            onToggle={() => setRememberMe(!remember_me)}
          />
          <TouchableOpacity>
            <Text className="text-black font-semibold">Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <CustomButton title="Sign In" onPress={() => router.push("/")} />

        <FooterLink
          text="Don’t have an account?"
          linkText="Sign up"
          onPress={() => console.log("Navigate to Sign Up")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
import Checkbox from "@/components/CheckBox";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import Divider from "@/components/Divider";
import FooterLink from "@/components/FooterLink";
import LogoHeader from "@/components/LogoHeader";
import ScreenHeader from "@/components/ScreenHeader";
import SocialButton from "@/components/SocialButton";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

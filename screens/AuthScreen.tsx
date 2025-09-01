import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import CheckBox from "@/components/CheckBox";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import Divider from "@/components/Divider";
import FooterLink from "@/components/FooterLink";
import LogoHeader from "@/components/LogoHeader";
import ScreenHeader from "@/components/ScreenHeader";
import SocialButton from "@/components/SocialButton";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember_me, setRememberMe] = useState(false);

  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let valid = true;
    let newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = () => {
    if (!validate()) return;

    setLoading(true);
    setErrors({});

    setTimeout(() => {
      setLoading(false);
      Alert.alert("Login Success", `Welcome ${email}!`);
      router.push("/");
    }, 1500);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
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
            subtitle="Sign in to continue tracking your tasks"
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
            error={errors.email}
          />
          <CustomInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            error={errors.password}
          />

          <View className="flex-row items-center justify-between mt-4 mb-6 mx-6">
            <CheckBox
              label="Remember me"
              checked={remember_me}
              onToggle={() => setRememberMe(!remember_me)}
            />
            <TouchableOpacity>
              <Text className="text-gray-600 font-semibold underline">
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>

          <CustomButton
            title="Sign In"
            onPress={handleLogin}
            loading={loading}
            disabled={loading}
          />

          <FooterLink
            text="Don’t have an account?"
            linkText="Sign up"
            onPress={() => console.log("Navigate to Sign Up")}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AuthScreen;

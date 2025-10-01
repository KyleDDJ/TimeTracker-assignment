import CheckBox from "@/components/CheckBox";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import Divider from "@/components/Divider";
import FooterLink from "@/components/FooterLink";
import LogoHeader from "@/components/LogoHeader";
import ScreenHeader from "@/components/ScreenHeader";
import SocialButton from "@/components/SocialButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LoginFormData, LoginSchema } from "@/validation/login.schema";

/**
 * Authentication screen component for login functionality.
 *
 * Triggered: App navigation to Auth screen
 *
 * Features:
 *  - Email/password login with validation via Zod schema
 *  - Social login (Google) placeholder
 *  - Remember me checkbox functionality
 *  - Forgot password placeholder
 *  - Refresh app button to clear tasks and reload root screen
 *
 * @component
 */
const AuthScreen: React.FC = () => {
  /** State for "Remember me" checkbox */
  const [rememberMe, setRememberMe] = useState(false);

  /** Loading state for login request */
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  /**
   * React Hook Form controller
   * @property {object} control - Controls form inputs
   * @property {Function} handleSubmit - Handles form submission
   * @property {object} errors - Form validation errors
   * @property {boolean} isValid - Boolean indicating if form is valid
   * @property {Function} reset - Resets form values
   */
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
    defaultValues: { email: "", password: "" },
  });

  /**
   * Handles form submission for login
   * @param {LoginFormData} data - Form input data (email, password)
   * @returns {Promise<void>}
   */
  const onSubmit = async (data: LoginFormData) => {
    try {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        // Alert.alert("Login Success", `Welcome ${data.email}!`);

        // Reset password, retain email if "Remember me" is checked
        reset({ email: rememberMe ? data.email : "", password: "" });

        // Navigate to home/root screen
        router.push("/");
      }, 1500);
    } catch (error) {
      setLoading(false);
      Alert.alert(
        "Login Error",
        error instanceof Error ? error.message : "Login failed"
      );
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
            keyboardShouldPersistTaps="handled"
            className="px-6 py-8"
          >
            {/* Header Logo and App Title */}
            <LogoHeader
              icon_name="clock-circle"
              title="TimeTracker"
              subtitle="Track your sprint tasks efficiently"
            />

            {/* Screen Header */}
            <ScreenHeader
              title="Welcome back"
              subtitle="Sign in to continue tracking your tasks"
            />

            {/* Social login button */}
            <SocialButton
              icon_name="google"
              text="Continue with Google"
              on_press={() => router.push("/(tabs)")}
            />

            <Divider text="or" />

            {/* Email input field */}
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomInput
                  label="Email"
                  placeholder="Enter your email"
                  value={value}
                  on_change_text={onChange}
                  onBlur={onBlur}
                  keyboard_type="email-address"
                  error={errors.email?.message}
                  accessibility_label="Email input"
                />
              )}
            />

            {/* Password input field */}
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomInput
                  label="Password"
                  placeholder="Enter your password"
                  value={value}
                  on_change_text={onChange}
                  onBlur={onBlur}
                  secure_text_entry={!showPassword}
                  error={errors.password?.message}
                  accessibility_label="Password input"
                />
              )}
            />

            {/* Remember Me & Forgot Password */}
            <View className="flex-row items-center justify-between mt-4 mb-6 mx-6">
              <CheckBox
                label="Remember me"
                checked={rememberMe}
                on_toggle={() => setRememberMe(!rememberMe)}
              />
              <TouchableOpacity
                accessible
                accessibilityLabel="Forgot password"
                onPress={() => console.log("Forgot password pressed")}
              >
                <Text className="text-gray-600 font-semibold underline">
                  Forgot password?
                </Text>
              </TouchableOpacity>
            </View>

            {/* Sign In Button */}
            <CustomButton
              title="Sign In"
              on_press={handleSubmit(onSubmit)}
              disabled={!isValid || loading}
              loading={loading}
              accessibility_label="Sign in to account"
            />

            {/* Footer link to Sign Up */}
            <FooterLink
              text="Don’t have an account?"
              linkText="Sign up"
              onPress={() => router.push("/register")}
            />
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AuthScreen;

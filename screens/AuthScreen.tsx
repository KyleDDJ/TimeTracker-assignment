import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { z as Zod } from "zod";

import CheckBox from "@/components/CheckBox";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import Divider from "@/components/Divider";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import FooterLink from "@/components/FooterLink";
import LogoHeader from "@/components/LogoHeader";
import ScreenHeader from "@/components/ScreenHeader";
import SocialButton from "@/components/SocialButton";

/*
 * DOCU: AuthScreen Component
 * Handles user login including email/password input, social login options,
 * validation, loading state, and error handling.
 *
 * State:
 * @state email - User email
 * @state password - User password
 * @state remember_me - Persist login choice
 * @state errors - Validation errors for inputs
 * @state loading - API/loading state
 *
 */
const LoginSchema = Zod.object({
  email: Zod.string().min(1, "Email is required").email("Enter a valid email"),
  password: Zod.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = Zod.infer<typeof LoginSchema>;

const AuthScreen: React.FC = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const onSubmit = async (data: LoginFormData) => {
    try {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        Alert.alert("Login Success", `Welcome ${data.email}!`);
        reset({ email: rememberMe ? data.email : "", password: "" });
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
    <ErrorBoundary>
      <SafeAreaView className="flex-1 bg-white">
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <ScrollView
              contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
              keyboardShouldPersistTaps="handled"
              className="px-6 py-8"
            >
              <LogoHeader
                icon_name="clockcircle"
                title="TimeTracker"
                subtitle="Track your sprint tasks efficiently"
              />
              <ScreenHeader
                title="Welcome back"
                subtitle="Sign in to continue tracking your tasks"
              />

              <SocialButton
                icon_name="google"
                text="Continue with Google"
                on_press={() => console.log("Google login")}
              />

              <Divider text="or" />

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
                    secure_text_entry
                    error={errors.password?.message}
                    accessibility_label="Password input"
                  />
                )}
              />

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

              <CustomButton
                title="Sign In"
                on_press={handleSubmit(onSubmit)}
                disabled={!isValid || loading}
                loading={loading}
                accessibility_label="Sign in to account"
              />

              <FooterLink
                text="Don’t have an account?"
                linkText="Sign up"
                onPress={() => console.log("Navigate to Sign Up")}
              />
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ErrorBoundary>
  );
};

export default AuthScreen;

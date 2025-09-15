/*
 * DOCU: RegisterScreen Component
 * Handles user registration including full name, email, password,
 * and confirm password inputs with validation, loading state, and error handling.
 *
 * State:
 * @state name - User's full name
 * @state email - User's email address
 * @state password - User's chosen password
 * @state confirmPassword - User's confirmation of password
 * @state errors - Validation errors for inputs
 * @state loading - API/loading state
 *
 * Navigation:
 * - On success: Navigates to login screen
 * - Social signup: Placeholder for Google authentication
 */
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
  TouchableWithoutFeedback,
} from "react-native";

import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import Divider from "@/components/Divider";
import FooterLink from "@/components/FooterLink";
import LogoHeader from "@/components/LogoHeader";
import ScreenHeader from "@/components/ScreenHeader";
import SocialButton from "@/components/SocialButton";

import { RegisterFormData, RegisterSchema } from "@/validation/register.schema";

const RegisterScreen: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
    mode: "onChange",
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        Alert.alert("Registration Success", `Welcome ${data.name}!`);
        reset();
        router.replace("/(auth)/login");
      }, 1500);
    } catch (error) {
      setLoading(false);
      Alert.alert(
        "Registration Error",
        error instanceof Error ? error.message : "Sign up failed"
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
            <LogoHeader
              icon_name="adduser"
              title="Create Account"
              subtitle="Sign up to start tracking your tasks"
            />

            <ScreenHeader
              title="Welcome!"
              subtitle="Fill in your details to get started"
            />

            <SocialButton
              icon_name="google"
              text="Continue with Google"
              on_press={() => router.push("/(tabs)")}
            />

            <Divider text="or" />

            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomInput
                  label="Full Name"
                  placeholder="Enter your name"
                  value={value}
                  on_change_text={onChange}
                  onBlur={onBlur}
                  error={errors.name?.message}
                />
              )}
            />

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
                />
              )}
            />

            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomInput
                  label="Confirm Password"
                  placeholder="Re-enter your password"
                  value={value}
                  on_change_text={onChange}
                  onBlur={onBlur}
                  secure_text_entry
                  error={errors.confirmPassword?.message}
                />
              )}
            />

            <CustomButton
              title="Sign Up"
              on_press={handleSubmit(onSubmit)}
              disabled={!isValid || loading}
              loading={loading}
            />

            <FooterLink
              text="Already have an account?"
              linkText="Sign in"
              onPress={() => router.replace("/(auth)/login")}
            />
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

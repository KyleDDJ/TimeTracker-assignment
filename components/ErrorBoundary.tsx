import React, { Component, ReactNode } from "react";
import { Text, View } from "react-native";

type ErrorBoundaryProps = { children: ReactNode };
type ErrorBoundaryState = { hasError: boolean };

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <View className="flex-1 items-center justify-center bg-white">
          <Text className="text-red-500 text-lg font-bold">
            Something went wrong.
          </Text>
        </View>
      );
    }
    return this.props.children;
  }
}

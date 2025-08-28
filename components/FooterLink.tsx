type FooterLinkProps = {
  text: string;
  linkText: string;
  onPress: () => void;
};

const FooterLink = ({ text, linkText, onPress }: FooterLinkProps) => {
  return (
    <View className="flex-row justify-center mt-5">
      <Text className="text-gray-500">{text} </Text>
      <TouchableOpacity onPress={onPress}>
        <Text className="text-black font-semibold">{linkText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterLink;
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

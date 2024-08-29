import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "./BackButton";

const Header = ({ title, onPressBack }) => {
  return (
    <View className="w-full  flex flex-row  items-center">
      <BackButton onPress={onPressBack} />
      <View
        className="flex items-center flex-row w-[60%] justify-center"
        style={{ gap: 12 }}
      >
        <Text className="font-bold text-2xl">{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});

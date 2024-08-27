import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { BackIcons } from "./allBtn";

const BackButton = ({ onPress }) => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Pressable
          onPress={onPress}
          style={{
            backgroundColor: "#EBEBEB",
            margin: 15,
            padding: 10,
            borderRadius: 10,
          }}
        >
          <BackIcons color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({});

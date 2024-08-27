import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ScreenWrapper = ({ children, bg }) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 5 : 30;
  console.log(paddingTop);

  return (
    <View
      style={{
        paddingTop: paddingTop,
        flex: 1,
        backgroundColor: bg,
      }}
      // className="bg-gradient-to-b from-[#f5f7fa] to-[#c3cfe2]"
    >
      {children}
    </View>
  );
};

export default ScreenWrapper;

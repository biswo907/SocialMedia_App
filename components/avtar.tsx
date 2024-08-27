import React from "react";
import { Image, Pressable, View } from "react-native";

const Avtar = ({ url, style, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      className="h-10 rounded-full w-10 bg-violet-700"
      style={{ ...style }}
    >
      <Image
        className="h-full w-full rounded-full object-contain"
        source={{
          uri: "https://cdn.pixabay.com/photo/2024/07/08/17/54/model-8881740_1280.jpg",
        }}
      ></Image>
    </Pressable>
  );
};

export default Avtar;

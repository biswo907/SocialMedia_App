import { getImageSrc } from "@/helpers/imageService";
import React from "react";
import { Image, Pressable, View } from "react-native";

const Avtar = ({ url, style, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      className="h-10 rounded-full w-10"
      style={{ ...style }}
    >
      <Image
        className="h-full w-full rounded-full object-contain"
        source={getImageSrc(
          "https://cdn.pixabay.com/photo/2023/12/19/11/16/indian-bride-8457513_960_720.jpg"
        )}
      />
    </Pressable>
  );
};

export default Avtar;

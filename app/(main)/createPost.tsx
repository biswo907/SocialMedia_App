import Avtar from "@/components/avtar";
import Header from "@/components/header";
import RichTextEditor from "@/components/richTextEditor";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useNavigation, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
  Alert,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import * as ImagePicker from "expo-image-picker";
import CustomButton from "@/components/Button";
import { Video, ResizeMode } from "expo-av";

const CreatePost = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const bodyRef = useRef();
  const edittoRef = useRef();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState("");

  const onPick = async (isImage) => {
    let mediaConfig = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    };
    if (!isImage) {
      mediaConfig = {
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
      };
    }
    let result = await ImagePicker.launchImageLibraryAsync(mediaConfig);
    if (!result.canceled) {
      setFile(result.assets[0]);
    }
  };

  const onSubmit = () => {
    if (!bodyRef.current || !file) {
      Alert.alert("Post", "Please add a image or a title");
      return;
    }
    navigation.goBack();
  };

  const getFileUri = (file) => {
    if (!file) return null;
    if (isLocalFile(file)) {
      return file.uri;
    }
  };
  const isLocalFile = (file) => {
    if (!file) return null;
    if (typeof file == "object") return true;
    return false;
  };
  const getFileType = (file) => {
    if (!file) return null;
    if (isLocalFile(file)) {
      return file.type;
    }
    // check image or video for remote file
    // if (file.includes('postImage')) {
    //   return 'image';
    // }
    // return 'video';
  };

  console.log("File", file?.uri);

  return (
    <ScreenWrapper>
      <ScrollView>
        <Header title={"Create Post"} onPressBack={handleBack} />
        <View className="px-5 mb-10">
          <View className="flex flex-row gap-4 items-center">
            <View>
              <Avtar />
            </View>
            <View>
              <Text className="font-semibold text-lg text-zinc-800">
                itzbiswo
              </Text>
              <Text className="font-normal text-xs ">Public</Text>
            </View>
          </View>

          <View className="my-5">
            <RichTextEditor
              edittoRef={edittoRef}
              onChange={(body) => (bodyRef.current = body)}
            />
          </View>
          {file && (
            <View className="border-2 w-full h-60 rounded-xl border-gray-200 flex flex-row justify-between items-center  my-5">
              {getFileType(file) === "video" ? (
                <Video
                  className="h-full w-full rounded-xl"
                  source={{ uri: getFileUri(file) }}
                  useNativeControls
                  resizeMode="cover"
                  isLooping
                />
              ) : (
                <Image
                  source={{ uri: getFileUri(file) }}
                  resizeMode="cover"
                  className="h-full w-full rounded-xl"
                />
              )}

              <Pressable
                onPress={() => setFile(null)}
                className="absolute top-0 right-0"
              >
                <View className="p-2 bg-rose-200 rounded-full ">
                  <FontAwesome6 name="delete-left" size={24} color="red" />
                </View>
              </Pressable>
            </View>
          )}

          <View className="border-2 rounded-xl border-gray-200 flex flex-row justify-between items-center p-4 my-5">
            <Text>Add to your post</Text>
            <View className="flex flex-row gap-5 items-center">
              <TouchableOpacity onPress={() => onPick(true)}>
                <FontAwesome6 name="images" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onPick(false)}>
                <Feather name="video" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <CustomButton
            title="Post"
            loading={loading}
            hasShadow={false}
            onPress={onSubmit}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default CreatePost;

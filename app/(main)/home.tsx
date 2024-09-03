import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { NotificationIcon, PlusIcon } from "@/components/allBtn";
import Avtar from "@/components/avtar";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <View className="w-full py-2 px-5 flex flex-row justify-between items-center ">
        <View>
          <Text className="font-bold text-3xl">LinkUp</Text>
        </View>
        <View className="flex items-center flex-row" style={{ gap: 12 }}>
          <NotificationIcon size={28} />

          <TouchableOpacity onPress={() => router.push("/createPost")}>
            <PlusIcon size={25} />
          </TouchableOpacity>
          <Avtar onPress={() => router.push("/profile")} />
        </View>
      </View>

      <ScrollView>
        <View className="bg-blue-700 m-16 p-20">
          <Text>Home</Text>
        </View>
        <View className="bg-blue-700 m-16 p-20">
          <Text>Home</Text>
        </View>
        <View className="bg-blue-700 m-16 p-20">
          <Text>Home</Text>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});

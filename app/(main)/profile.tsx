import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import Header from "@/components/header";
import { useNavigation, useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { DemoApi } from "@/api/api";
import { LogoutIcon } from "@/components/allBtn";
import CustomButton from "@/components/Button";
import App from "@/components/animation";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const { data, error, isPending } = useQuery({
    queryKey: ["members"],
    staleTime: 100000,
    queryFn: () => DemoApi(),
  });

  console.log("datsa", data?.results[0]?.email);

  const handleLogout = () => {
    console.log("Logout");
    router.replace("/welcome");
    AsyncStorage.clear();
  };
  const handleBack = () => {
    navigation.goBack();
  };
  const handleEditProfile = () => {
    router.push("/editProfile");
  };

  return (
    <ScreenWrapper>
      <ProfileHeader handleLogout={handleLogout} handleBack={handleBack} />

      <ScrollView>
        <View className="px-5">
          <View>
            <View className="flex w-full  items-center justify-center my-3">
              <View className="h-20 w-20 bg-gray-200 rounded-full" />
              <Text className="py-3 font-semibold text-xl">User Name</Text>
            </View>
            <View className="bg-blue-100 my-3 px-3 rounded-lg">
              <UserDetails label={"Name"} value={"Biswo"} />
              <UserDetails label={"Email"} value={"biswajit@gmail.com"} />
              <UserDetails label={"Mobile"} value={"0123456789"} />
              <UserDetails label={"Gender"} value={"Male"} />
            </View>
            <CustomButton title={"Edit Profile"} onPress={handleEditProfile} />
          </View>
          <View
            style={{
              paddingBottom: 70,
              display: "flex",
              flexDirection: "row",
              gap: 4,
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <View className="h-28 w-28 bg-blue-900" />
            <View className="h-28 w-28 bg-blue-900" />
            <View className="h-28 w-28 bg-blue-900" />
            <View className="h-28 w-28 bg-blue-900" />
            <View className="h-28 w-28 bg-blue-900" />
            <View className="h-28 w-28 bg-blue-900" />
            <View className="h-28 w-28 bg-blue-900" />
            <View className="h-28 w-28 bg-blue-900" />
            <View className="h-28 w-28 bg-blue-900" />
            <View className="h-28 w-28 bg-blue-900" />
            <View className="h-28 w-28 bg-blue-900" />
            <View className="h-28 w-28 bg-blue-900" />
            <View className="h-28 w-28 bg-blue-900" />
            <View className="h-28 w-28 bg-blue-900" />
            <View className="h-28 w-28 bg-blue-900" />
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const ProfileHeader = ({ handleLogout, handleBack }) => (
  <View>
    <Header title="Profile" onPressBack={handleBack} />
    <Pressable
      onPress={handleLogout}
      className="absolute right-0  h-full items-center flex justify-center px-4"
    >
      <LogoutIcon color="red" />
    </Pressable>
  </View>
);

const UserDetails = ({ label, value }) => (
  <View className="flex flex-row gap-2 py-6 border-b border-gray-300">
    <Text>{label} : </Text>
    <Text>{value}</Text>
  </View>
);

export default Profile;

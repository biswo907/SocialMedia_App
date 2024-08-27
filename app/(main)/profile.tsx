import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import Header from "@/components/header";
import { useNavigation } from "expo-router";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <View className="px-3">
        <Header title="Profile" onPressBack={() => navigation.goBack()} />
      </View>
    </ScreenWrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({});

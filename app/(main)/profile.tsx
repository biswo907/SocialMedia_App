import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import Header from "@/components/header";
import { useNavigation } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { DemoApi } from "@/api/api";

const Profile = () => {
  const navigation = useNavigation();

  const { data, error, isPending } = useQuery({
    queryKey: ["members"],
    staleTime: 100000,
    queryFn: () => DemoApi(),
  });

  console.log("datsa", data?.results[0]?.email);

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

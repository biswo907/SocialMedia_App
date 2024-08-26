import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <Text>Index</Text>
      <Button title="Welcome" onPress={() => router.push("welcome")}></Button>
    </ScreenWrapper>
  );
};

export default index;

const styles = StyleSheet.create({});

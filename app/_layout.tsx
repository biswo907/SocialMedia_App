import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { AuthProvider, useAuth } from "@/context/authContext";

const RootLayout = () => {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
};

const MainLayout = () => {
  const { isLogin } = useAuth();
  console.log("IsLogin", isLogin);
  const router = useRouter();

  useEffect(() => {
    //isLogin
    if (true) {
      router.replace("/home");
    } else {
      router.replace("/welcome");
    }
  }, []);

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default RootLayout;

const styles = StyleSheet.create({});

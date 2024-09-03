import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { AuthProvider, useAuth } from "@/context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RootLayout = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MainLayout />
      </AuthProvider>
    </QueryClientProvider>
  );
};

const MainLayout = () => {
  const { isLogin } = useAuth();
  console.log("IsLogin", isLogin);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const value = await AsyncStorage.getItem("isLogin");
      if (value !== null) {
        router.replace("/home");
      } else {
        router.replace("/welcome");
      }
    };
    getData();
  }, []);

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default RootLayout;

const styles = StyleSheet.create({});

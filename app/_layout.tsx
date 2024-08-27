import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { AuthProvider, useAuth } from "@/context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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

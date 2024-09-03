import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import BackButton from "@/components/BackButton";
import { Link, useRouter } from "expo-router";
import CustomButton from "@/components/Button";
import { supabase } from "@/lib/supabase";
import CustomInputwithIcon from "@/components/inputBox";
import { EmailIcon, PasswordIcon, UserIcon } from "@/components/allBtn";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Hay User !!", "Please Fill All Details");
      return;
    }
    if (email === "biswo@gmail.com" && password === "Biswo@404") {
      AsyncStorage.setItem("isLogin", "true");
      router.replace("/home");
    } else {
      Alert.alert("Login Error !!", "Opps you have enter invalid credentials");
    }
  };

  return (
    <ScreenWrapper>
      {/* bg={"#c3cfe2"} */}
      <BackButton onPress={() => router.push("welcome")} />
      <View style={{ padding: 20 }}>
        <Text className="font-bold text-3xl">Hay,</Text>
        <Text className="font-bold text-3xl">Welcome Back</Text>

        <Text className=" text-l text-gray-500 mt-16">
          Please Login to Continue
        </Text>

        <CustomInputwithIcon
          icon={<EmailIcon size={36} />}
          style={{ marginTop: 20 }}
          placeholder={"Enter Your Email"}
          value={email}
          onChangeText={(val) => setEmail(val)}
        />
        <CustomInputwithIcon
          icon={<PasswordIcon size={36} />}
          style={{ marginTop: 20 }}
          placeholder={"Enter Your Password"}
          value={password}
          onChangeText={(val) => setPassword(val)}
        />
        <CustomButton
          title="Login"
          buttonStyle={{ marginTop: 20 }}
          onPress={handleLogin}
        />
        <View className="flex flex-row gap-2  items-center justify-center mt-5">
          <Text>Dont't have an account?</Text>
          <Link href={"/signUp"}>
            <Text className="text-indigo-500 font-bold">Signup</Text>
          </Link>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

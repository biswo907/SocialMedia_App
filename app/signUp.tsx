import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import BackButton from "@/components/BackButton";
import { Link, useRouter } from "expo-router";
import CustomButton from "@/components/Button";
import { supabase } from "@/lib/supabase";
import CustomInputwithIcon from "@/components/inputBox";
import { EmailIcon, PasswordIcon, UserIcon } from "@/components/allBtn";

const SignUpScreen = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ScreenWrapper>
      <BackButton onPress={() => router.push("welcome")} />
      <View style={{ padding: 20 }}>
        <Text className="font-bold text-3xl">Let's</Text>
        <Text className="font-bold text-3xl">Get Started</Text>

        <Text className=" text-l text-gray-500 mt-16">
          Please fill the data to create account
        </Text>

        <CustomInputwithIcon
          icon={<UserIcon size={22} />}
          style={{ marginTop: 20 }}
          placeholder={"Enter Your Name"}
        />
        <CustomInputwithIcon
          icon={<EmailIcon size={36} />}
          style={{ marginTop: 20 }}
          placeholder={"Enter Your Email"}
        />
        <CustomInputwithIcon
          icon={<PasswordIcon size={36} />}
          style={{ marginTop: 20 }}
          placeholder={"Enter Your Password"}
        />
        <CustomButton title="Signup" buttonStyle={{ marginTop: 20 }} />
        <View className="flex flex-row gap-2  items-center justify-center mt-5">
          <Text>Already have an account?</Text>
          <Link href={"/login"}>
            <Text className="text-indigo-500 font-bold">Login</Text>
          </Link>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});

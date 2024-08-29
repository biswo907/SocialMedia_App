import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import Header from "@/components/header";
import CustomButton from "@/components/Button";
import { useNavigation, useRouter } from "expo-router";
import CustomInputwithIcon from "@/components/inputBox";
import { EmailIcon, PhoneIcon, UserIcon } from "@/components/allBtn";

const EditProfile = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const handleBack = () => {
    navigation.goBack();
  };
  const handleEditProfile = () => {};

  return (
    <ScreenWrapper>
      <Header title={"Edit Profile"} onPressBack={handleBack} />
      <View className="px-5">
        <View>
          <View className="flex w-full  items-center justify-center my-3">
            <View className="h-20 w-20 bg-gray-200 rounded-full" />
            <Text className="py-3 font-semibold text-xl">User Name</Text>
          </View>
          <View className="my-3 px-3 rounded-lg">
            <CustomInputwithIcon
              icon={<UserIcon />}
              style={{ marginTop: 20 }}
              placeholder={"Enter Your Name"}
              value={"User Name"}
            />
            <CustomInputwithIcon
              icon={<EmailIcon />}
              style={{ marginTop: 20 }}
              placeholder={"Enter Your Name"}
              value={"User Email"}
            />
            <CustomInputwithIcon
              icon={<PhoneIcon />}
              style={{ marginTop: 20 }}
              placeholder={"Enter Your Name"}
              value={"User Phone"}
            />
          </View>
          <CustomButton title={"Confirm"} onPress={handleEditProfile} />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default EditProfile;

const EditField = ({ label, value }) => (
  <View className="flex flex-row gap-2 py-6 border-b border-gray-300">
    <Text>{label} : </Text>
    <Text>{value}</Text>
  </View>
);

import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "@/helpers/common";
import { theme } from "@/Constants/theme";
import { useRouter } from "expo-router";
import CustomButton from "@/components/Button";

const WelcomeScreen = () => {
  const router = useRouter();

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.welcomeImage}
          source={require("../assets/images/welcome.png")}
        />
        {/* titel */}
        <View style={{ gap: 20, marginVertical: hp(5) }}>
          <Text style={styles.title}> Punchline !!</Text>
          <Text style={styles.punchline}>
            This is a Punchline This is a Punchline This is a Punchline{" "}
          </Text>
        </View>

        <View style={styles.footer}>
          <CustomButton
            label={1}
            buttonStyle={{ marginHorizontal: wp(3) }}
            title={"Sign up"}
            onPress={() => router.push("signUp")}
          />
        </View>

        {/* <Text onPress={() => router.push("login")}>Login</Text> */}
      </View>
    </ScreenWrapper>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: wp(4),
  },
  welcomeImage: {
    height: hp(30),
    width: wp(100),
    alignSelf: "center",
    marginTop: hp(15),
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign: "center",
    fontWeight: theme.fonts.extraBold,
  },
  punchline: {
    textAlign: "center",
    paddingHorizontal: wp(10),
    fontSize: hp(1.7),
    color: theme.colors.text,
  },
  footer: {
    gap: 30,
    width: "100%",
  },
});

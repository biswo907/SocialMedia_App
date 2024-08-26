import { theme } from "@/Constants/theme";
import { hp } from "@/helpers/common";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextStyle,
  ViewStyle,
} from "react-native";
import Loading from "./Loading";

interface CustomButtonProps {
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle; // Style for the text inside the button
  title?: string; // Title or text to display inside the button
  onPress: () => void;
  loading?: boolean; // Whether the button shows a loading state
  hasShadow?: boolean;
  label?: string | number;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  buttonStyle,
  textStyle,
  title,
  onPress,
  loading = false,
  hasShadow = false,
  label,
}) => {
  const shadowStyle = {
    shadowColor: theme.colors.dark,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  };

  if (loading) {
    return (
      <View style={[styles.button, buttonStyle, { backgroundColor: "white" }]}>
        <Loading />
      </View>
    );
  }

  console.log("---", title);
  console.log("---label", label);

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, buttonStyle, hasShadow && shadowStyle]}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    height: hp(6.6),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.radius.xl,
  },
  text: {
    fontSize: hp(2.5),
    color: "white",
    // fontWeight: theme.fonts.bold,
  },
});

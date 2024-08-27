import { TextInput, View } from "react-native";

const CustomInputwithIcon = ({
  value,
  onChangeText,
  error,
  icon,
  style,
  placeholder,
}) => {
  console.log("userIcon", icon);

  return (
    <View
      className="bg-white bg-opacity-50 flex flex-row items-center border border-gray-300 rounded-xl"
      style={{ ...style }}
    >
      <View className=" flex items-center justify-center w-[15%]">{icon}</View>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        className=" w-[85%] py-4 font-semibold"
      />
    </View>
  );
};

export default CustomInputwithIcon;

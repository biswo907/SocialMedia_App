import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

const hp = (percentage: number): number => {
  return (percentage * deviceHeight) / 100;
};

const wp = (percentage: number): number => {
  return (percentage * deviceWidth) / 100;
};

export { deviceWidth, deviceHeight, hp, wp };

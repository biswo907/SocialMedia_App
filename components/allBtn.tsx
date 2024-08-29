import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

export const BackIcons = ({ color = "black", size = 21 }) => (
  <Ionicons name="chevron-back" size={size} color={color} />
);
export const EmailIcon = ({ color = "black", size = 18 }) => (
  <Fontisto name="email" size={size} color="black" />
);
export const PasswordIcon = ({ color = "black", size = 21 }) => (
  <EvilIcons name="lock" size={size} color="black" />
);
export const UserIcon = ({ color = "black", size = 18 }) => (
  <FontAwesome6 name="circle-user" size={size} color="black" />
);
export const NotificationIcon = ({ color = "black", size = 21 }) => (
  <Ionicons name="notifications-outline" size={size} color={color} />
);
export const PlusIcon = ({ color = "black", size = 21 }) => (
  <AntDesign name="pluscircleo" size={size} color={color} />
);
export const LogoutIcon = ({ color = "black", size = 21 }) => (
  <AntDesign name="logout" size={size} color={color} />
);
export const PhoneIcon = ({ color = "black", size = 18 }) => (
  <Feather name="phone" size={size} color={color} />
);

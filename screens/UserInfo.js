import { Text, View } from "react-native";
import UserHeader from "../components/UserHeader";
import UserInfoButton from "../components/UserInfoButton";
import LogoutBtn from "../components/LogoutBtn";
import Logo from "../components/Logo";

const UserInfo = () => {
  return (
    <View>
      <Logo />
      <LogoutBtn />
      <UserHeader />
      <UserInfoButton />
    </View>
  );
};

export default UserInfo;

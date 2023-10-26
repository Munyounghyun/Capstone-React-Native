import { Text, View } from "react-native";
import UserHeader from "../components/UserHeader";
import UserInfoButton from "../components/UserInfoButton";
import LogoutBtn from "../components/LogoutBtn";

const UserInfo = () => {
  return (
    <View>
      <LogoutBtn />
      <UserHeader />
      <UserInfoButton />
    </View>
  );
};

export default UserInfo;

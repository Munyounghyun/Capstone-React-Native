import { Alert, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { UserContext } from "../store/user-context";

const LogoutBtn = () => {
  const navigation = useNavigation();
  const userCtx = useContext(UserContext);
  const logout = () => {
    Alert.alert(
      "로그아웃",
      "로그아웃 하시겠습니까?",
      [
        { text: "취소", style: "cancel" },
        { text: "확인", onPress: logoutRequest },
      ],
      { cancelable: false }
    );
  };
  const logoutRequest = () => {
    userCtx.logoutUser({
      id: userCtx.user.id,
    });
    navigation.reset({
      index: 0,
      routes: [{ name: "로그인" }],
    });
  };
  return (
    <View
      style={{
        position: "absolute",
        top: 70,
        right: 30,
      }}
    >
      <Button onPress={logout}>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </Button>
    </View>
  );
};

export default LogoutBtn;

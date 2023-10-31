import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { Button } from "react-native-paper";
import LoginInput from "../components/Auth/LoginInput";
import Logo from "../components/Logo";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigate = useNavigation();
  const goChangePwd = () => {
    navigate.navigate("비밀번호 변경");
  };
  const goFindId = () => {
    navigate.navigate("아이디 찾기");
  };
  return (
    <View style={styles.loginWrap}>
      <Logo />
      <View>
        <LoginInput />
      </View>
      <View style={styles.findWrap}>
        <View style={styles.findInnerBox}>
          <Button
            textColor={GlobalStyles.color.gray500}
            title="아이디 찾기"
            labelStyle={{ fontSize: 14 }}
            onPress={goFindId}
          >
            아이디 찾기
          </Button>
          <Text>|</Text>
          <Button
            textColor={GlobalStyles.color.gray500}
            labelStyle={{ fontSize: 14 }}
            onPress={goChangePwd}
          >
            비밀번호 변경
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginWrap: {
    alignItems: "center",
    marginTop: 60,
  },
  findWrap: {
    marginTop: 10,
    width: 300,
  },
  findInnerBox: {
    fontSize: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

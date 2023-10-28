import { Alert, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../store/user-context";
import { loginRequest } from "../../util/http";
import { Button } from "react-native-paper";

const LoginInput = () => {
  const userCtx = useContext(UserContext);

  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const changeId = (e) => {
    setId(e);
  };
  const chagePwd = (e) => {
    setPwd(e);
  };

  const navigation = useNavigation();
  const goSignup = () => {
    navigation.navigate("회원가입");
  };

  const loginCheck = async () => {
    try {
      const responsData = await loginRequest({ id, pwd });
      if (responsData.success == true) {
        userCtx.loginUser({
          id: id,
          userName: responsData.name,
          email: responsData.email,
        });
        navigation.navigate("HiFive");
      } else {
        Alert.alert("로그인 실패", "아이디 또는 비밀번호가 잘못되었습니다.");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={GlobalStyles.inputView}>
      <TextInput
        style={GlobalStyles.inputStyle}
        placeholder={"ID"}
        value={id}
        onChangeText={changeId}
      />
      <TextInput
        style={GlobalStyles.inputStyle}
        placeholder={"Password"}
        secureTextEntry={true}
        value={pwd}
        onChangeText={chagePwd}
      />
      <View
        style={GlobalStyles.buttonBackground}
        backgroundColor={GlobalStyles.color.primary500}
      >
        <Button textColor="white" onPress={loginCheck}>
          <Text style={{ fontSize: 16, lineHeight: 16 }}>로그인</Text>
        </Button>
      </View>
      <View style={GlobalStyles.buttonBackground} backgroundColor={"gray"}>
        <Button textColor="white" onPress={goSignup}>
          <Text style={{ fontSize: 16, lineHeight: 16 }}>회원가입</Text>
        </Button>
      </View>
    </View>
  );
};

export default LoginInput;

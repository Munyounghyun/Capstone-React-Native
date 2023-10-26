import { Button, StyleSheet, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../store/user-context";

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

  const loginCheck = () => {
    userCtx.loginUser({ id: id, userName: "test", email: pwd });
    navigation.navigate("HiFive");
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
        <Button title={"로그인"} color={"white"} onPress={loginCheck} />
      </View>
      <View style={GlobalStyles.buttonBackground} backgroundColor={"gray"}>
        <Button title={"회원가입"} color={"white"} onPress={goSignup} />
      </View>
    </View>
  );
};

export default LoginInput;

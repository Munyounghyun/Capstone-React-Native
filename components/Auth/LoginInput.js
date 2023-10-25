import { Button, StyleSheet, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useState } from "react";

const LoginInput = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const changeId = (e) => {
    setId(e);
  };
  const chagePwd = (e) => {
    setPwd(e);
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
        <Button title={"로그인"} color={"white"} />
      </View>
      <View style={GlobalStyles.buttonBackground} backgroundColor={"gray"}>
        <Button title={"회원가입"} color={"white"} />
      </View>
    </View>
  );
};

export default LoginInput;

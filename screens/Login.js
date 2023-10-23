import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Input from "../components/Input";

const Login = () => {
  return (
    <View style={styles.loginWrap}>
      <View>
        <Input text={"id"} />
        <Input text={"pwd"} />
      </View>
      <View>
        <Button title="로그인" />
        <Button title="회원가입" />
      </View>
      <View>
        <Button title="아이디 찾기" />
        <Text>|</Text>
        <Button title="비밀번호 찾기" />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginWrap: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
});

import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import { GlobalStyles } from "../constants/styles";
import { Button } from "react-native-paper";

const Login = () => {
  return (
    <View style={styles.loginWrap}>
      <View>
        <Input text={"id"} />
        <Input text={"pwd"} secure={"secure"} />
      </View>
      <View>
        <PrimaryButton text={"Login"} color={GlobalStyles.color.primary500} />
        <PrimaryButton text={"Sign up"} color={"gray"} />
      </View>
      <View style={styles.findWrap}>
        <View style={styles.findInnerBox}>
          <Button
            textColor={GlobalStyles.color.gray500}
            title="아이디 찾기"
            labelStyle={{ fontSize: 14 }}
          >
            아이디 찾기
          </Button>
          <Text>|</Text>
          <Button
            textColor={GlobalStyles.color.gray500}
            labelStyle={{ fontSize: 14 }}
          >
            비밀번호 찾기
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

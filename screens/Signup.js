import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import Input from "../components/Auth/LoginInput";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { GlobalStyles } from "../constants/styles";
import { Button } from "react-native-paper";

const Signup = () => {
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [repwd, setRepwd] = useState("");
  const [date, setDate] = useState(new Date());
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const onIdChange = (e) => {
    setId(e);
  };
  const onPwdChange = (e) => {
    setPwd(e);
  };
  const onRePwdChange = (e) => {};

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    console.log(currentDate);
  };

  const onEmailChange = (e) => {
    setEmail(e);
  };
  const onCodeChange = (e) => {
    setCode(e);
  };
  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 25 }}>
      <View style={{ width: 300 }}>
        <View style={GlobalStyles.inputView}>
          <TextInput
            style={GlobalStyles.inputStyle}
            placeholder={"ID"}
            value={id}
            onChangeText={onIdChange}
          />
          <TextInput
            style={GlobalStyles.inputStyle}
            placeholder={"Password"}
            secureTextEntry={true}
            value={pwd}
            onChangeText={onPwdChange}
          />
          <TextInput
            style={GlobalStyles.inputStyle}
            placeholder={"RePassword"}
            secureTextEntry={true}
            value={repwd}
            onChangeText={onRePwdChange}
          />
          <View style={styles.birthdayWrap}>
            <Text>BirthDay : </Text>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              display="calendar"
              onChange={onDateChange}
            />
          </View>
          <View>
            <View style={styles.inputWrap}>
              <TextInput
                placeholder={"Email"}
                style={{ width: 180, fontSize: 18 }}
                value={email}
                onChangeText={onEmailChange}
              />
              <View
                style={styles.buttonStyle}
                backgroundColor={GlobalStyles.color.primary500}
              >
                <Button textColor="white">{"메시지 보내기"}</Button>
              </View>
            </View>
            <View style={styles.inputWrap}>
              <TextInput
                placeholder={"Code"}
                style={{ width: 180, fontSize: 18 }}
                value={code}
                onChangeText={onCodeChange}
              />
              <View style={styles.buttonStyle} backgroundColor={"gray"}>
                <Button textColor="white">{"확인"}</Button>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <View
              style={GlobalStyles.buttonBackground}
              backgroundColor={GlobalStyles.color.primary500}
            >
              <Button textColor={"white"}>회원가입</Button>
            </View>
            <View
              style={GlobalStyles.buttonBackground}
              backgroundColor={"#d22e2a"}
            >
              <Button textColor={"white"}>취소</Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  birthdayWrap: {
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    marginTop: 20,
  },
  inputWrap: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    padding: 5,
  },
  buttonStyle: {
    borderRadius: 10,
    shadowColor: "rgb(50, 50, 50)",
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
});

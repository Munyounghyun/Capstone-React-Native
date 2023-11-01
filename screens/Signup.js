import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import { GlobalStyles } from "../constants/styles";
import { Button } from "react-native-paper";
import Logo from "../components/Logo";
import { emailCheck, sendEmail, singup } from "../util/http";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [repwd, setRepwd] = useState("");
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [certificataion, setCertification] = useState(false);

  const navigation = useNavigation();

  const onNameChange = (e) => {
    setUserName(e);
  };
  const onIdChange = (e) => {
    setId(e);
  };
  const onPwdChange = (e) => {
    setPwd(e);
  };
  const onRePwdChange = (e) => {
    setRepwd(e);
  };

  const onBirthChange = (e) => {
    setBirth(e);
  };

  const onEmailChange = (e) => {
    setEmail(e);
  };
  const onCodeChange = (e) => {
    setCode(e);
  };

  const setClear = () => {
    setUserName("");
    setCode("");
    setPwd("");
    setRepwd("");
    setBirth("");
    setEmail("");
    setCode("");
    setCertification(false);
  };

  //인증번호 전송
  const sendEmailCode = async () => {
    const responseData = await sendEmail({ email });

    sendEmail({ email });
    if (responseData.success === true && email !== "") {
      Alert.alert("인증번호 전송", "해당 이메일로 인증 번호를 전송하였습니다.");
    } else {
      Alert.alert("인증번호 전송 실패", "인증번호 전송이 실패하였습니다.");
    }
  };

  //인증번호 체크
  const checkCode = async () => {
    // const responsData = await loginRequest({ id, pwd });
    const responseData = await emailCheck({ email, auth_number: code });
    if (responseData.success === true) {
      Alert.alert("인증 성공", "인증 성공하였습니다.");
      setCertification(true);
    } else {
      Alert.alert("인증 실패", "인증번호가 잘못되었습니다.");
    }
  };

  //회원가입 버튼 클릭
  const onSignup = async () => {
    if (!userName.trim()) {
      Alert.alert("경고", "이름을 입력해주세요.");
    } else if (!id.trim()) {
      // ID 값이 비어있거나 공백만 있을 경우
      Alert.alert("경고", "ID를 입력해주세요.");
    } else if (!pwd.trim()) {
      Alert.alert("경고", "비밀번호를 입력해주세요.");
    } else if (pwd !== repwd) {
      Alert.alert("경고", "비밀번호가 다릅니다.");
    } else if (!birth.trim()) {
      Alert.alert("경고", "생년월일을 입력해주세요.");
    } else if (certificataion == false) {
      Alert.alert("경고", "이메일 인증을 해주세요.");
    } else {
      const responsData = await singup({
        id: id,
        pwd: pwd,
        name: userName,
        email: email,
        birth: birth,
        certification: certificataion,
      });
      if (responsData.success == true) {
        Alert.alert("성공", "회원가입 성공!");
        navigation.navigate("로그인");
        setClear();
      } else {
        Alert.alert(
          "실패",
          "회원가입 실패, 사용중인 아이디가 있습니다. 다른 아이디를 입력해주세요"
        );
      }
    }
  };

  const goLogin = () => {
    navigation.navigate("로그인");
    setClear();
  };
  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 25 }}>
      <Logo />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={{ width: 300 }}>
          <View style={GlobalStyles.inputView}>
            <TextInput
              style={GlobalStyles.inputStyle}
              placeholder={"Name"}
              value={userName}
              onChangeText={onNameChange}
            />
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
            <TextInput
              style={GlobalStyles.inputStyle}
              placeholder={"BirthDay ex)yyyymmdd, 991018"}
              secureTextEntry={true}
              value={birth}
              onChangeText={onBirthChange}
            />
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
                  <Button textColor="white" onPress={sendEmailCode}>
                    {"메시지 보내기"}
                  </Button>
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
                  <Button textColor="white" onPress={checkCode}>
                    {"확인"}
                  </Button>
                </View>
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <View
                style={GlobalStyles.buttonBackground}
                backgroundColor={GlobalStyles.color.primary500}
              >
                <Button textColor={"white"} onPress={onSignup}>
                  회원가입
                </Button>
              </View>
              <View
                style={GlobalStyles.buttonBackground}
                backgroundColor={"#ff595e"}
              >
                <Button textColor={"white"} onPress={goLogin}>
                  취소
                </Button>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
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
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 8,
      },
    }),
  },
});

import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { changePwd, emailCheck, sendEmail } from "../util/http";
import { useState } from "react";
import { GlobalStyles } from "../constants/styles";
import { Button } from "react-native-paper";
import Logo from "../components/Logo";
import BackBtn from "../components/BackBtn";
import { useNavigation } from "@react-navigation/native";

const ChangePwd = () => {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [certification, setCertification] = useState(false);
  const [pwd, setPwd] = useState("");
  const [rePwd, setRePwd] = useState("");

  const navigation = useNavigation();

  const onIdChange = (e) => {
    setUserId(e);
  };

  const onEmailChange = (e) => {
    setEmail(e);
  };
  const onCodeChange = (e) => {
    setCode(e);
  };
  const onPwdChange = (e) => {
    setPwd(e);
  };
  const onRePwdChange = (e) => {
    setRePwd(e);
  };

  const clearSet = () => {
    setUserId("");
    setEmail("");
    setCode("");
    setPwd("");
    setRePwd("");
    setCertification(false);
  };

  //인증번호 전송
  const sendEmailCode = () => {
    sendEmail({ email });
    Alert.alert("인증번호 전송", "해당 이메일로 인증 번호를 전송하였습니다.");
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

  const onChangePwd = async () => {
    if (!userId.trim()) {
      Alert.alert("경고", "ID를 입력해주세요.");
    } else if (!pwd.trim()) {
      // ID 값이 비어있거나 공백만 있을 경우
      Alert.alert("경고", "비밀번호를 입력해주세요.");
    } else if (!rePwd.trim() && pwd != rePwd) {
      // ID 값이 비어있거나 공백만 있을 경우
      Alert.alert("경고", "비밀번호가 다릅니다. 확인해주세요");
    } else {
      const responsData = await changePwd({
        id: userId,
        pwd: pwd,
        certification: certification,
      });
      if (responsData.success == true) {
        Alert.alert("성공", "비밀번호 변경 성공!");
        navigation.navigate("로그인");
        clearSet();
      } else {
        Alert.alert("실패", "비밀번호 변경 실패!");
      }
    }
  };

  const goLogin = () => {
    navigation.navigate("로그인");
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        marginTop: 25,
      }}
    >
      <Logo />
      <BackBtn />
      <ScrollView>
        <View style={styles.changePwdWrap}>
          <View style={{ marginLeft: 5 }}>
            <Text style={styles.inputStyle}>비밀번호 변경</Text>
          </View>
          <View>
            <View style={styles.inputWrap}>
              <TextInput
                placeholder={"ID"}
                style={{ width: 300, fontSize: 18 }}
                value={userId}
                onChangeText={onIdChange}
              />
            </View>
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
          {certification && (
            <View>
              <View style={styles.inputWrap}>
                <TextInput
                  placeholder={"새 비밀번호 입력"}
                  secureTextEntry={true}
                  value={pwd}
                  style={styles.inputStyle}
                  onChangeText={onPwdChange}
                />
              </View>
              <View style={styles.inputWrap}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder={"비밀번호 재입력"}
                  value={rePwd}
                  onChangeText={onRePwdChange}
                />
              </View>

              <View style={styles.buttonWrap}>
                <View style={styles.buttonThrowColor}>
                  <Button textColor="white" onPress={onChangePwd}>
                    비밀번호 변경
                  </Button>
                </View>
                <View
                  style={styles.buttonVerifyColor}
                  backgroundColor={"#d22e2a"}
                >
                  <Button textColor="white" onPress={goLogin}>
                    취소
                  </Button>
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangePwd;

const styles = StyleSheet.create({
  changePwdWrap: {
    width: 300,
    marginTop: 50,
  },
  buttonWrap: {
    margin: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonThrowColor: {
    width: 140,
    padding: 5,
    margin: 5,
    backgroundColor: GlobalStyles.color.primary500,
    borderRadius: 25,
    shadowColor: "rgb(50, 50, 50)",
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  buttonVerifyColor: {
    width: 140,
    margin: 5,
    padding: 5,
    backgroundColor: "gray",
    borderRadius: 25,
    shadowColor: "rgb(50, 50, 50)",
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  findPwdInfoWrap: {
    width: "100%",
    margin: "auto",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  findPwdInfoInnerWrap: {
    borderWidth: 1,
    padding: 10,
    borderColor: "#ccc",
    borderRadius: 20,
    marginTop: 15,
  },
  findPwdWrap: {
    margin: 10,
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
  inputStyle: {
    width: 300,
    fontSize: 18,
    height: 40,
  },
  buttonStyle: {
    borderRadius: 10,
  },
});

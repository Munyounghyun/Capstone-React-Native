import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { emailCheck, findId, sendEmail } from "../util/http";
import { useState } from "react";
import { GlobalStyles } from "../constants/styles";
import { Button } from "react-native-paper";
import Logo from "../components/Logo";
import BackBtn from "../components/BackBtn";
import { useNavigation } from "@react-navigation/native";

const FindId = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [certification, setCertification] = useState(false);

  const navigation = useNavigation();

  const onNameChange = (e) => {
    setUserName(e);
  };
  const onEmailChange = (e) => {
    setEmail(e);
  };
  const onCodeChange = (e) => {
    setCode(e);
  };

  const clearSet = () => {
    setUserName("");
    setEmail("");
    setCode("");
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

  const onFindId = async () => {
    if (!userName.trim()) {
      Alert.alert("경고", "이름을 입력해주세요.");
    } else if (certification == false) {
      Alert.alert("경고", "이메일 인증을 해주세요");
    } else {
      const responsData = await findId({
        name: userName,
        email: email,
        certification: certification,
      });
      console.log(responsData);
      if (responsData.success == true) {
        Alert.alert("아이디 찾기", "아이디 : " + responsData.id);
        navigation.navigate("로그인");
        clearSet();
      } else {
        Alert.alert("실패", "아이디 찾기 실패!");
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
            <Text style={styles.subTitleStyle}>아이디 찾기</Text>
          </View>
          <View>
            <View style={styles.inputWrap}>
              <TextInput
                placeholder={"이름"}
                style={{ width: 300, fontSize: 18 }}
                value={userName}
                onChangeText={onNameChange}
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
          <View style={styles.buttonWrap}>
            <View style={styles.buttonThrowColor}>
              <Button textColor="white" onPress={onFindId}>
                아이디 찾기
              </Button>
            </View>
            <View style={styles.buttonVerifyColor} backgroundColor={"#d22e2a"}>
              <Button textColor="white" onPress={goLogin}>
                취소
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FindId;

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
  subTitleStyle: {
    width: 300,
    fontSize: 20,
    height: 40,
    fontWeight: "bold",
  },
  buttonStyle: {
    borderRadius: 10,
  },
});

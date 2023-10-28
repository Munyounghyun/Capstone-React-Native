import {
  StyleSheet,
  TextInput,
  Text,
  View,
  ScrollView,
  Alert,
} from "react-native";
import { GlobalStyles } from "../constants/styles";
import { Button } from "react-native-paper";
import { useContext, useState } from "react";
import LogoutBtn from "../components/LogoutBtn";
import Logo from "../components/Logo";
import { UserContext } from "../store/user-context";
import { cardRegist, emailCheck, sendEmail } from "../util/http";
import { useNavigation } from "@react-navigation/native";

const CardRegist = () => {
  const userCtx = useContext(UserContext);
  const navigation = useNavigation();
  //인증번호
  const [code, setCode] = useState("");
  //카드번호
  const [cardNum, setCardNum] = useState("");
  //생년월일
  const [birth, setBirth] = useState("");
  //유효기간
  const [exp, setExp] = useState();
  //카드 비밀번호
  const [pwdDigit, setPwdDigit] = useState("");

  //인증 여부
  const [certification, setCertification] = useState(false);

  const onCodeChange = (e) => {
    setCode(e);
  };
  const onCardNumChange = (e) => {
    setCardNum(e);
  };
  const onBirthChange = (e) => {
    setBirth(e);
  };
  const onExpChange = (e) => {
    setExp(e);
  };
  const onPwdDigitChange = (e) => {
    setPwdDigit(e);
  };

  //인증번호 전송
  const sendEmailCode = () => {
    sendEmail({ email: userCtx.user.email });
    Alert.alert("인증번호 전송", "이메일로 인증 번호를 전송하였습니다.");
  };

  //인증번호 체크
  const checkCode = async () => {
    // const responsData = await loginRequest({ id, pwd });
    const responseData = await emailCheck({
      email: userCtx.user.email,
      auth_number: code,
    });
    if (responseData.success === true) {
      Alert.alert("인증 성공", "인증 성공하였습니다.");
      setCertification(true);
    } else {
      Alert.alert("인증 실패", "인증번호가 잘못되었습니다.");
    }
  };

  //카드 등록
  const cardRegistRequest = async () => {
    if (!cardNum.trim()) {
      Alert.alert("경고", "카드 번호를 입력해주세요.");
    } else if (!birth.trim()) {
      Alert.alert("경고", "생년월일을 입력해주세요.");
    } else if (!exp.trim()) {
      Alert.alert("경고", "카드 유표기간을 입력해주세요.");
    } else if (!pwdDigit.trim()) {
      Alert.alert("경고", "카드 비밀번호 앞 두자리를 입력해주세요.");
    } else {
      const responseData = await cardRegist({
        card_number: cardNum,
        expiry: exp,
        birth: birth,
        pwd_2digit: pwdDigit,
        id: userCtx.user.id,
        certification: certification,
      });
      console.log(responseData);
      if (responseData.success === true) {
        Alert.alert("카드 등록 성공", "카드가 등록되었습니다.");
        setCertification(false);
        setCardNum("");
        setBirth("");
        setCode("");
        setExp("");
        setPwdDigit("");
        navigation.navigate("카드 리스트");
      } else {
        Alert.alert("카드 등록 실패", "카드 정보를 다시 입력해주세요");
      }
    }
  };

  const goUserInfo = () => {
    navigation.navigate("사용자 정보");
  };
  return (
    <View>
      <ScrollView>
        <Logo />
        <LogoutBtn />
        <View style={styles.cardRegistWrap}>
          <View style={{ marginLeft: 65 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>카드 등록</Text>
          </View>
          <View style={GlobalStyles.inputView}>
            <TextInput
              style={GlobalStyles.inputStyle}
              placeholder={"이메일 인증번호 입력"}
              value={code}
              onChangeText={onCodeChange}
            />
          </View>
          <View style={styles.buttonWrap}>
            <View style={styles.buttonThrowColor}>
              <Button textColor="white" onPress={sendEmailCode}>
                인증번호 전송
              </Button>
            </View>
            <View style={styles.buttonVerifyColor}>
              <Button textColor="white" onPress={checkCode}>
                인증
              </Button>
            </View>
          </View>
          {certification && (
            <>
              <Text
                style={{
                  marginLeft: 65,
                  marginTop: 20,
                  marginBottom: -20,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                카드 정보 입력
              </Text>
              <View style={styles.cardInfoWrap}>
                <View style={styles.cardInfoInnerWrap}>
                  <View style={GlobalStyles.inputView}>
                    <TextInput
                      style={GlobalStyles.smallInputStyle}
                      placeholder={"카드 번호 입력"}
                      secureTextEntry={true}
                      value={cardNum}
                      onChangeText={onCardNumChange}
                    />
                  </View>
                  <View style={GlobalStyles.inputView}>
                    <TextInput
                      style={GlobalStyles.smallInputStyle}
                      placeholder={"생년월일 입력 ex)001010"}
                      value={birth}
                      onChangeText={onBirthChange}
                    />
                  </View>
                  <View style={GlobalStyles.inputView}>
                    <TextInput
                      style={GlobalStyles.smallInputStyle}
                      placeholder={"유효기간 입력 ex)202301"}
                      value={exp}
                      onChangeText={onExpChange}
                    />
                  </View>
                  <View style={GlobalStyles.inputView}>
                    <TextInput
                      style={GlobalStyles.smallInputStyle}
                      placeholder={"카드 비밀번호 앞 2자리"}
                      secureTextEntry={true}
                      value={pwdDigit}
                      onChangeText={onPwdDigitChange}
                    />
                  </View>

                  <View style={styles.buttonWrap}>
                    <View style={styles.buttonThrowColor}>
                      <Button textColor="white" onPress={cardRegistRequest}>
                        카드 등록
                      </Button>
                    </View>
                    <View
                      style={styles.buttonVerifyColor}
                      backgroundColor={"#d22e2a"}
                    >
                      <Button textColor="white" onPress={goUserInfo}>
                        취소
                      </Button>
                    </View>
                  </View>
                </View>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default CardRegist;

const styles = StyleSheet.create({
  cardRegistWrap: {
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
  cardInfoWrap: {
    width: "100%",
    margin: "auto",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  cardInfoInnerWrap: {
    borderWidth: 1,
    padding: 10,
    borderColor: "#ccc",
    borderRadius: 20,
    marginTop: 15,
  },
  cardWrap: {
    margin: 10,
  },
});

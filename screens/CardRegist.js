import { StyleSheet, TextInput, Text, View, ScrollView } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { Button } from "react-native-paper";
import { useState } from "react";
import LogoutBtn from "../components/LogoutBtn";
import Logo from "../components/Logo";

const CardRegist = () => {
  //인증번호
  const [code, setCode] = useState("");
  //카드번호
  const [cardNum, setCardNum] = useState("");
  //카드이름
  const [cardName, setCardName] = useState("");
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
  const onCardNameChange = (e) => {
    setCardName(e);
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
  return (
    <View>
      <ScrollView>
        <Logo />
        <LogoutBtn />
        <View style={styles.cardRegistWrap}>
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
              <Button textColor="white">인증번호 전송</Button>
            </View>
            <View style={styles.buttonVerifyColor}>
              <Button textColor="white">인증</Button>
            </View>
          </View>
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
                  placeholder={"카드 이름 입력"}
                  value={cardName}
                  onChangeText={onCardNameChange}
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
                  placeholder={"유효기간 입력 ex)12/10"}
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
                  <Button textColor="white">카드 등록</Button>
                </View>
                <View
                  style={styles.buttonVerifyColor}
                  backgroundColor={"#d22e2a"}
                >
                  <Button textColor="white">취소</Button>
                </View>
              </View>
            </View>
          </View>
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

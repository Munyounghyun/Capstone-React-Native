import { Alert, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { GlobalStyles } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { UserContext } from "../store/user-context";
import { deleteUser } from "../util/http";
const UserInfoButton = () => {
  const userCtx = useContext(UserContext);
  const navigation = useNavigation();

  const goExpenseList = () => {
    navigation.navigate("이용내역");
  };
  const goCardList = () => {
    navigation.navigate("카드 리스트");
  };
  const goCardRegist = () => {
    navigation.navigate("카드 등록");
  };

  const goChangePwd = () => {
    navigation.navigate("비밀번호 변경");
  };

  const confirmDelete = () => {
    Alert.prompt(
      "회원 탈퇴",
      "비밀번호를 입력하세요",
      [
        {
          text: "취소",
          style: "cancel",
        },
        {
          text: "확인",
          onPress: (password) => handleDelete(password),
        },
      ],
      "secure-text"
    );
  };

  const handleDelete = async (password) => {
    try {
      const responsData = await deleteUser({
        id: userCtx.user.id,
        pwd: password,
      });
      if (responsData.success == true) {
        Alert.alert("회원탈퇴 성공", "회원탈퇴 되었습니다.");
        navigation.navigate("로그인");
      } else {
        Alert.alert("회원탈퇴 실패", "비밀번호가 잘못되었습니다.");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <Button
        onPress={goExpenseList}
        style={styles.buttonStyle}
        textColor="white"
      >
        이번달 내역 확인
      </Button>
      <Button onPress={goCardList} style={styles.buttonStyle} textColor="white">
        카드 리스트
      </Button>
      <Button
        onPress={goCardRegist}
        style={styles.buttonStyle}
        textColor="white"
      >
        카드 등록
      </Button>
      <Button style={styles.changeBtn} textColor="white" onPress={goChangePwd}>
        비밀번호 변경
      </Button>
      <Button
        style={styles.redButton}
        textColor="white"
        onPress={confirmDelete}
      >
        회원 탈퇴
      </Button>
    </View>
  );
};

export default UserInfoButton;

const styles = StyleSheet.create({
  buttonStyle: {
    margin: 10,
    width: 340,
    height: 50,
    backgroundColor: GlobalStyles.color.primary700,
    justifyContent: "center",
    fontSize: 18,
    color: "white",
    shadowColor: "rgb(50, 50, 50)",
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  changeBtn: {
    margin: 10,
    width: 340,
    height: 50,
    justifyContent: "center",
    fontSize: 18,
    color: "white",
    backgroundColor: "#75885c",
    shadowColor: "rgb(50, 50, 50)",
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  redButton: {
    margin: 10,
    width: 340,
    height: 50,
    justifyContent: "center",
    fontSize: 18,
    color: "white",
    backgroundColor: "#d22e2a",
    shadowColor: "rgb(50, 50, 50)",
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
});

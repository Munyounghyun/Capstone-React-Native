import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { GlobalStyles } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";
const UserInfoButton = () => {
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
      <Button style={styles.redButton} textColor="white">
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

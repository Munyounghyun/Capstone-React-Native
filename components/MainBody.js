import { Image, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useContext } from "react";
import { UserContext } from "../store/user-context";

const MainBody = () => {
  const userCtx = useContext(UserContext);

  return (
    <View style={styles.bodyWrap}>
      <Text style={styles.bodyFontStyle}>{userCtx.user.userName}</Text>
      <Text style={styles.bodyFontStyle}>
        {new Date().getFullYear()}년 {new Date().getMonth() + 1}월 사용내역
      </Text>
      <Text style={styles.bodyFontStyle}>총 0원</Text>
    </View>
  );
};

export default MainBody;

const styles = StyleSheet.create({
  bodyWrap: {
    flexDirection: "column",
    alignItems: "flex-end",
    margin: 50,
    marginBottom: 30,
    padding: 35,
    borderRadius: 35,
    borderColor: "#ccc",
    backgroundColor: GlobalStyles.color.gray500,
    shadowColor: "rgb(50, 50, 50)",
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  bodyFontStyle: {
    color: "white",
    fontSize: 20,
    margin: 7,
  },
});

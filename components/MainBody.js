import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useContext } from "react";
import { UserContext } from "../store/user-context";
import LinearGradient from "react-native-linear-gradient";

const MainBody = ({ total }) => {
  const userCtx = useContext(UserContext);

  return (
    <View style={styles.bodyWrap}>
      <Text style={styles.bodyFontStyle}>{userCtx.user.userName} 님</Text>
      <Text style={styles.bodyFontStyle}>
        {new Date().getFullYear()}년 {new Date().getMonth() + 1}월 사용내역
      </Text>
      <Text style={styles.bodyFontStyle}>총 {total}원</Text>
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
    backgroundColor: "#5e60ce",
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
  bodyFontStyle: {
    color: "white",
    fontSize: 20,
    margin: 7,
  },
});

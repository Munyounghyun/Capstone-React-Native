import { Image, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

const ExpenseItem = () => {
  return (
    <View style={styles.bodyWrap}>
      <Text style={styles.bodyFontStyle}>2023/10/01</Text>
      <Text style={styles.bodyFontStyle}>0원</Text>
    </View>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  bodyWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 15,
    padding: 20,
    borderRadius: 35,
    borderColor: "#ccc",
    backgroundColor: GlobalStyles.color.primary700,
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
    fontSize: 14,
  },
});

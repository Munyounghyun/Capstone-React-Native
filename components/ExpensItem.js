import { Image, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

const ExpenseItem = ({ expenseData }) => {
  return (
    <View style={styles.bodyWrap}>
      <Text style={styles.bodyFontStyle}>{expenseData.date.slice(0, 10)}</Text>
      <Text style={styles.bodyFontStyle}>{expenseData.card_name}</Text>
      <Text style={styles.bodyFontStyle}>{expenseData.fee}원</Text>
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

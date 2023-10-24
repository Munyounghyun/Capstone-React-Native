import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

function ExpenseHeader() {
  const currentMonth = new Date().getMonth() + 1; // getMonth()는 0부터 시작해서 11까지의 숫자를 반환합니다.
  return (
    <View style={styles.headerWrap}>
      <View style={styles.headerStyle}>
        <View>
          <Button textColor="black">{"◀"}</Button>
        </View>
        <Text style={styles.headTextStyle}>{currentMonth}월</Text>
        <View>
          <Button textColor="black">{"▶"}</Button>
        </View>
      </View>
    </View>
  );
}

export default ExpenseHeader;

const styles = StyleSheet.create({
  headerWrap: {
    marginTop: 40,
    marginBottom: 20,
    flexDirection: "row",
  },
  headerStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  headTextStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});

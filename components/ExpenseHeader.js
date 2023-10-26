import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

function ExpenseHeader() {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const onPrevMonth = () => {
    if (month > 1) {
      setMonth(month - 1);
    } else {
      setMonth(12);
      setYear(year - 1); // 1월에서 이전 달로 넘어갈 때 년도 감소
    }
  };
  const onNextMonth = () => {
    if (month < 12) {
      setMonth(month + 1);
    } else {
      setMonth(1);
      setYear(year + 1); // 12월에서 다음 달로 넘어갈 때 년도 증가
    }
  };
  return (
    <View style={styles.headerWrap}>
      <View style={styles.headerStyle}>
        <View>
          <Button textColor="black" onPress={onPrevMonth}>
            {"◀"}
          </Button>
        </View>
        <Text style={styles.headTextStyle}>
          {year}년 {month}월
        </Text>
        <View>
          <Button textColor="black" onPress={onNextMonth}>
            {"▶"}
          </Button>
        </View>
      </View>
    </View>
  );
}

export default ExpenseHeader;

const styles = StyleSheet.create({
  headerWrap: {
    marginTop: 30,
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

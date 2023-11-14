import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ExpenseItem from "../components/ExpensItem";
import LogoutBtn from "../components/LogoutBtn";
import Logo from "../components/Logo";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../store/user-context";
import { Button } from "react-native-paper";
import { expenseList } from "../util/http";

const ExpenseList = () => {
  const userCtx = useContext(UserContext);

  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [expenseData, setExpenseData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

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
  const fetchData = async () => {
    try {
      const responseData = await expenseList({
        id: userCtx.user.id,
        year: year,
        month: month,
      });
      if (responseData.success == true) {
        //데이터 불러오기는 성공 수정 필요!!!
        setExpenseData(responseData.data);
        setTotal(responseData.total);
      }
      setLoading(true);
    } catch (e) {
      console.log(e);
      setLoading(true);
    }
  };

  useEffect(() => {
    setLoading(false);
    fetchData();
  }, [month]);

  return (
    <ScrollView alwaysBounceVertical={false}>
      <Logo />
      <LogoutBtn />
      <View style={styles.headerWrap}>
        <View style={styles.headerStyle}>
          <View>
            <Button textColor="black" onPress={() => onPrevMonth()}>
              {"◀"}
            </Button>
          </View>
          <Text style={styles.headTextStyle}>
            {year}년 {month}월
          </Text>
          <View>
            <Button textColor="black" onPress={() => onNextMonth()}>
              {"▶"}
            </Button>
          </View>
        </View>
      </View>
      {loading == false ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={{ padding: 10 }}>
          {expenseData.length == 0 ? (
            <View>
              <Text
                style={{ textAlign: "center", fontSize: 16, fontWeight: "700" }}
              >
                결제 내역이 없습니다.
              </Text>
            </View>
          ) : (
            <>
              <Text
                style={{
                  textAlign: "right",
                  marginRight: 35,
                  fontWeight: "700",
                  fontSize: 16,
                  marginBottom: 10,
                }}
              >
                총 : {total}원
              </Text>
              {expenseData.map((item, index) => (
                <ExpenseItem key={index} expenseData={item} />
              ))}
            </>
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default ExpenseList;

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

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import MainBody from "../components/MainBody";
import ExpenseItem from "../components/ExpensItem";
import LogoutBtn from "../components/LogoutBtn";
import Logo from "../components/Logo";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../store/user-context";
import { expenseList } from "../util/http";

const Main = () => {
  const userCtx = useContext(UserContext);
  const [expenseData, setExpenseData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await expenseList({
          id: userCtx.user.id,
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
        });
        if (responseData.success == true) {
          //데이터 불러오기는 성공 수정 필요!!!
          setExpenseData(responseData.data);
          setTotal(responseData.total);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <ScrollView>
        <Logo />
        <LogoutBtn />
        <MainBody total={total} />
        <Text
          style={{
            marginLeft: 65,
            marginBottom: 5,
            marginTop: 15,
            fontWeight: "bold",
            fontSize: 19,
          }}
        >
          최근 결제 내역
        </Text>
        <View style={styles.expenseItemStyle}>
          {Array.isArray(expenseData) && expenseData.length !== 0 ? (
            expenseData
              .slice(0, 10)
              .map((item, index) => (
                <ExpenseItem key={index} expenseData={item} />
              ))
          ) : (
            <View style={{ alignItems: "center", margin: 50 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                최근 결제내역 없습니다.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  expenseItemStyle: {
    margin: 50,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 35,
    borderColor: "#bcbcbc",
  },
});

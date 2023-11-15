import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import MainBody from "../components/MainBody";
import ExpenseItem from "../components/ExpensItem";
import LogoutBtn from "../components/LogoutBtn";
import Logo from "../components/Logo";
import { useCallback, useContext, useState } from "react";
import { UserContext } from "../store/user-context";
import { expenseList } from "../util/http";
import { useFocusEffect } from "@react-navigation/native";

const Main = () => {
  const userCtx = useContext(UserContext);
  const [expenseData, setExpenseData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

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
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      fetchData();
    }, [])
  );

  return (
    <View>
      <ScrollView style={{ height: "100%" }} alwaysBounceVertical={false}>
        <Logo />
        <LogoutBtn />
        {loading == true ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
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
                [...expenseData] // 배열의 복사본을 생성
                  .reverse() // 복사본을 뒤집음
                  .slice(0, 10) // 뒤집힌 배열의 첫 10개 요소를 선택
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
          </>
        )}
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

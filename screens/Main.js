import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import MainBody from "../components/MainBody";
import ExpenseItem from "../components/ExpensItem";
import LogoutBtn from "../components/LogoutBtn";
import Logo from "../components/Logo";

const Main = () => {
  return (
    <View>
      <ScrollView>
        <Logo />
        <LogoutBtn />
        <MainBody />
        <Text
          style={{
            marginLeft: 65,
            marginBottom: 5,
            marginTop: 15,
            fontWeight: "bold",
            fontSize: 17,
          }}
        >
          최근 결제 내역
        </Text>
        <View style={styles.expenseItemStyle}></View>
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
    shadowColor: "rgb(50, 50, 50)",
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
});

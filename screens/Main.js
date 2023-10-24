import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainBody from "../components/MainBody";
import ExpenseItem from "../components/ExpensItem";

const Main = () => {
  return (
    <View>
      <ScrollView>
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
        <View style={styles.expenseItemStyle}>
          <ExpenseItem />
          <ExpenseItem />
          <ExpenseItem />
          <ExpenseItem />
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
    shadowColor: "rgb(50, 50, 50)",
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
});

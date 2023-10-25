import { ScrollView, Text, View } from "react-native";
import ExpenseHeader from "../components/ExpenseHeader";
import ExpenseItem from "../components/ExpensItem";
import LogoutBtn from "../components/LogoutBtn";

const ExpenseList = () => {
  return (
    <ScrollView>
      <LogoutBtn />
      <ExpenseHeader />
      <View style={{ padding: 10 }}>
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
      </View>
    </ScrollView>
  );
};

export default ExpenseList;

import { ScrollView, Text, View } from "react-native";
import LogoutBtn from "../components/LogoutBtn";

const CardList = () => {
  return (
    <ScrollView>
      <LogoutBtn />
      <View style={{ padding: 10 }}></View>
    </ScrollView>
  );
};

export default CardList;

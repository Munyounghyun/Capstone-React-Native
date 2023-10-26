import { ScrollView, StyleSheet, Text, View } from "react-native";
import LogoutBtn from "../components/LogoutBtn";
import Logo from "../components/Logo";
import CardBox from "../components/CardBox";

const CardList = () => {
  return (
    <ScrollView>
      <Logo />
      <LogoutBtn />
      <View style={styles.cardBoxPosition}>
        <Text
          style={{
            width: 300,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          카드 목록
        </Text>
        <View style={styles.cardBoxWrap}>
          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />
        </View>
      </View>
    </ScrollView>
  );
};

export default CardList;

const styles = StyleSheet.create({
  cardBoxPosition: {
    marginTop: 30,
    alignItems: "center",
  },
  cardBoxWrap: {
    marginTop: 15,
    marginBottom: 40,
    width: 380,
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    borderColor: "#ccc",
  },
});

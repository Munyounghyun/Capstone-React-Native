import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-paper";

const CardBox = () => {
  return (
    <View style={styles.bodyWrap}>
      <Ionicons name="card" color={"white"} size={50} />
      <Text style={styles.cardText}>신한 카드</Text>
      <View>
        <Button style={styles.cardStyle} textColor="white">
          결제 카드 설정
        </Button>
        <Button style={styles.deleteCardStyle} textColor="white">
          카드 삭제
        </Button>
      </View>
    </View>
  );
};

export default CardBox;

const styles = StyleSheet.create({
  bodyWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 15,
    padding: 20,
    borderRadius: 35,
    borderColor: "#ccc",
    backgroundColor: GlobalStyles.color.gray500,
    shadowColor: "rgb(50, 50, 50)",
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  cardText: {
    color: "white",
    fontSize: 16,
  },
  cardStyle: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "gray",
  },
  deleteCardStyle: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#d22e2a",
  },
});

import { Alert, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { chageMainCard, deleteCard } from "../util/http";
import { useContext } from "react";
import { UserContext } from "../store/user-context";

const CardBox = ({ cardData, onRefresh }) => {
  const userCtx = useContext(UserContext);

  //결제카드 변경할건지 물어보는 alert창, 확인 시 바뀜
  const changeCardCheck = () => {
    Alert.alert(
      "대표 카드 변경", // 제목
      "대표 카드를 변경하시겠습니까?", // 내용
      [
        {
          text: "취소",
          style: "cancel",
        },
        { text: "확인", onPress: changeCardRequest },
      ],
      { cancelable: false }
    );
  };
  //결제카드 변경
  const changeCardRequest = async () => {
    const responseData = await chageMainCard({
      id: userCtx.user.id,
      card_num: cardData.card_num,
    });
    if (responseData.success == true) {
      Alert.alert(
        "결제 카드 변경",
        `결제 카드 ${cardData.card_name}으로 변경 완료`
      );
      onRefresh();
    } else {
      Alert.alert("대표 카드 변경", `대표 카드 변경 실패`);
    }
  };

  //카드 삭제 alert 창
  const deleteCardCheck = () => {
    Alert.alert(
      "카드 삭제", // 제목
      "카드를 삭제하시겠습니까?", // 내용
      [
        {
          text: "취소",
          style: "cancel",
        },
        {
          text: "확인",
          onPress: deleteCardRequest,
        },
      ],
      { cancelable: false }
    );
  };

  //카드 삭제
  const deleteCardRequest = async () => {
    const responseData = await deleteCard({
      id: userCtx.user.id,
      card_num: cardData.card_num,
    });
    console.log(responseData);
    if (responseData.success == false) {
      Alert.alert("카드 삭제", `${cardData.card_name} 삭제 완료`);
      onRefresh();
    } else {
      Alert.alert("카드 삭제", `카드 삭제 실패`);
    }
  };

  return (
    <View style={styles.bodyWrap}>
      <Ionicons name="card" color={"white"} size={50} />
      <Text style={styles.cardText}>{cardData.card_name}</Text>
      <View>
        {cardData.pay_card !== 1 ? (
          <Button
            style={styles.cardStyle}
            textColor="white"
            onPress={changeCardCheck}
          >
            결제 카드 설정
          </Button>
        ) : (
          <Button style={styles.mainCardStyle} textColor="white">
            결제 카드
          </Button>
        )}
        <Button
          style={styles.deleteCardStyle}
          textColor="white"
          onPress={deleteCardCheck}
        >
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
    padding: 15,
    borderRadius: 35,
    borderColor: "#ccc",
    backgroundColor: "#7776bc",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  cardText: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
  },
  cardStyle: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#8e9aaf",
  },
  mainCardStyle: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#4059ad",
  },
  deleteCardStyle: {
    width: 100,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#ff595e",
  },
});

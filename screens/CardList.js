import { ScrollView, StyleSheet, Text, View } from "react-native";
import LogoutBtn from "../components/LogoutBtn";
import Logo from "../components/Logo";
import CardBox from "../components/CardBox";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../store/user-context";
import { cardList } from "../util/http";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import BackBtn from "../components/BackBtn";

const CardList = () => {
  const userCtx = useContext(UserContext);
  const navigation = useNavigation();
  const [cardData, setCardData] = useState([]);

  const goAddCard = () => {
    navigation.navigate("카드 등록");
  };

  //카드 불러오기
  const cardListCall = async () => {
    try {
      const responseData = await cardList({
        id: userCtx.user.id,
      });
      if (responseData.success == true) {
        setCardData(responseData.card);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    cardListCall();
  }, []);
  return (
    <ScrollView>
      <Logo />
      <LogoutBtn />
      <BackBtn />
      <View style={styles.cardBoxPosition}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 30,
          }}
        >
          <Text
            style={{
              width: 300,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            카드 목록
          </Text>
          <Button onPress={goAddCard}>
            <Ionicons name="add" size={20} />
          </Button>
        </View>
        <View style={styles.cardBoxWrap}>
          {Array.isArray(cardData) && cardData.length !== 0 ? (
            cardData.map((item, index) => (
              <CardBox key={index} cardData={item} onRefresh={cardListCall} />
            ))
          ) : (
            <>
              <Text>등록된 카드가 없습니다.</Text>
            </>
          )}
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

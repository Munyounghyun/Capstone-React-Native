import { ScrollView, StyleSheet, Text, View } from "react-native";
import LogoutBtn from "../components/LogoutBtn";
import Logo from "../components/Logo";
import CardBox from "../components/CardBox";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../store/user-context";
import { cardList } from "../util/http";

const CardList = () => {
  const userCtx = useContext(UserContext);
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await cardList({
          id: userCtx.user.id,
        });
        if (responseData.success == true) {
          //데이터 불러오기는 성공 수정 필요!!!
          setCardData(responseData.card);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
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
          {Array.isArray(cardData) && cardData.length !== 0 ? (
            cardData.map((item, index) => (
              <CardBox key={index} cardData={item} />
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

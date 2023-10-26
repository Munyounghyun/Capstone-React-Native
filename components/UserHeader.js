import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
const UserHeader = () => {
  return (
    <View style={styles.userHeaderWrap}>
      <View style={styles.userHeaderInnerWrap}>
        <View style={styles.iconWrap}>
          <View style={styles.iconCircle}>
            <FontAwesomeIcon icon={faUser} size={35} color="#1E3050" />
          </View>
        </View>
        <View style={styles.headerRightWrap}>
          <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>
            XXX님
          </Text>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
            이메일 : xxx@naver.com
          </Text>
          <Text style={{ fontWeight: "bold" }}>이번달 사용 금액 : 0원</Text>
        </View>
      </View>
    </View>
  );
};

export default UserHeader;

const styles = StyleSheet.create({
  userHeaderWrap: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "center",
  },
  userHeaderInnerWrap: {
    width: 340,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 25,
    borderRadius: 25,
  },
  iconWrap: {
    width: 20,
  },

  headerRightWrap: {
    width: 240,
    alignItems: "flex-end",
  },
});
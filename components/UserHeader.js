import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { UserContext } from "../store/user-context";
const UserHeader = () => {
  const userCtx = useContext(UserContext);
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
            {userCtx.user.userName}님
          </Text>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
            이메일 : {userCtx.user.email}
          </Text>
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

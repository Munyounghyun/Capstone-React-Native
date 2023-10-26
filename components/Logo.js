import { Image, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

const Logo = () => {
  return (
    <View
      style={{
        marginTop: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        style={{ width: 45, height: 45 }}
        source={require("../assets/images/hifive-logo.png")}
        resizeMode="contain"
      />
      <Text style={styles.logoTextColor}>HiFive</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logoTextColor: {
    fontSize: 30,
    color: GlobalStyles.color.primary500,
    fontWeight: "bold",
    fontStyle: "italic",
    marginLeft: 10,
    marginRight: 40,
  },
});

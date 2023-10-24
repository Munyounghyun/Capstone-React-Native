import { Image, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../constants/styles";

const Logo = () => {
  return (
    <>
      <Image
        style={{ width: 45, height: 45, marginTop: 20 }}
        source={require("../assets/images/hifive-logo.png")}
        resizeMode="contain"
      />
      <Text style={styles.logoTextColor}>HiFive</Text>
    </>
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
    marginTop: 25,
  },
});

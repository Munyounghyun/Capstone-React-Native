import { StyleSheet, TextInput, View } from "react-native";
import { Button } from "react-native-paper";
import { GlobalStyles } from "../constants/styles";

const VerifyInput = ({ text, btnText, color }) => {
  return (
    <View style={styles.inputWrap}>
      <TextInput placeholder={text} style={{ width: 180, fontSize: 18 }} />
      <View style={styles.buttonStyle} backgroundColor={color}>
        <Button textColor="white">{btnText}</Button>
      </View>
    </View>
  );
};

export default VerifyInput;

const styles = StyleSheet.create({
  inputWrap: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    padding: 5,
  },
  buttonStyle: {
    borderRadius: 10,
    shadowColor: "rgb(50, 50, 50)",
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
});

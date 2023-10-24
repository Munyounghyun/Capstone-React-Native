import { Button, Image, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

const PrimaryButton = ({ text, color }) => {
  return (
    <View style={styles.buttonBackground} backgroundColor={color}>
      <Button title={text} color={"white"} />
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonBackground: {
    width: 300,
    padding: 5,
    marginTop: 20,
    borderRadius: 25,
    shadowColor: "rgb(50, 50, 50)",
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
});

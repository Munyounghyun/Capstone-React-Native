import { StyleSheet, TextInput, View } from "react-native";

const Input = ({ text }) => {
  return (
    <View style={styles.inputView}>
      <TextInput style={styles.inputStyle} placeholder={text} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputView: { marginTop: 20, justifyContent: "center", alignItems: "center" },
  inputStyle: {
    width: 300,
    height: 50,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10,
  },
});

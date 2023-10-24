import { StyleSheet, TextInput, View } from "react-native";

const Input = ({ text, secure }) => {
  return (
    <View style={styles.inputView}>
      {secure == "secure" ? (
        <TextInput
          style={styles.inputStyle}
          placeholder={text}
          secureTextEntry="true"
        />
      ) : (
        <TextInput style={styles.inputStyle} placeholder={text} />
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputView: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  inputStyle: {
    width: 300,
    height: 50,
    fontSize: 18,
    borderBottomWidth: 2,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10,
  },
});

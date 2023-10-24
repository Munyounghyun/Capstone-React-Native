import { Platform, StyleSheet, Text, View } from "react-native";
import Input from "../components/Input";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { GlobalStyles } from "../constants/styles";
import VerifyInput from "../components/VerifyInput";

const Signup = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    console.log(currentDate);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 25 }}>
      <View style={{ width: 300 }}>
        <Input text={"ID"} />
        <Input text={"Password"} />
        <Input text={"RePassword"} />
        <View style={styles.birthdayWrap}>
          <Text>BirthDay : </Text>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            display="calendar"
            onChange={onChange}
          />
        </View>
        <View>
          <VerifyInput
            text={"Email"}
            btnText={"메시지 보내기"}
            color={GlobalStyles.color.primary500}
          />
          <VerifyInput text={"Code"} btnText={"확인"} color={"#ccc"} />
        </View>
        <View style={{ marginTop: 10 }}>
          <PrimaryButton text={"취소"} color={"#d22e2a"} />
          <PrimaryButton
            text={"회원가입"}
            color={GlobalStyles.color.primary500}
          />
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  birthdayWrap: {
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    marginTop: 20,
  },
});

import { View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const BackBtn = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View
      style={{
        position: "absolute",
        top: 70,
        left: 30,
      }}
    >
      <Button onPress={goBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>
    </View>
  );
};

export default BackBtn;

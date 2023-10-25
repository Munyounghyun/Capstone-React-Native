import { View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const LogoutBtn = () => {
  return (
    <View
      style={{
        position: "absolute",
        right: 60,
      }}
    >
      <FontAwesomeIcon icon={faArrowRightFromBracket} />
    </View>
  );
};

export default LogoutBtn;

import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign} from "@expo/vector-icons";

const BackBtn = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <AntDesign name="arrowleft" size={24} color="rgba(33, 33, 33, 0.8)" />
    </TouchableOpacity>
  );
};

export default BackBtn;

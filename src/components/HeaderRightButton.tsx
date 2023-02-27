import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type Props = {
  tintColor?: string;
};

const HeaderRightButton = ({ tintColor }: Props) => {
  const navigation = useNavigation<any>();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Settings");
      }}
      hitSlop={10}
    >
      <MaterialCommunityIcons name="cog" size={24} color={tintColor} />
    </Pressable>
  );
};

export default HeaderRightButton;

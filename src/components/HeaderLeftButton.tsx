import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  canGoBack: boolean;
  tintColor?: string;
};

const HeaderLeftButton = ({ canGoBack, tintColor }: Props) => {
  const navigation = useNavigation();
  if (!canGoBack) {
    return null;
  }
  return (
    <Pressable onPress={navigation.goBack} hitSlop={10}>
      <MaterialCommunityIcons name="chevron-left" size={30} color={tintColor} />
    </Pressable>
  );
};

export default HeaderLeftButton;

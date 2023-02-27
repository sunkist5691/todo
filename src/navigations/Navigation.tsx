import { useUserContext } from "../contexts/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./MainStack";
import AuthStack from "./AuthStack";

const Navigation = () => {
  const { user } = useUserContext();
  return (
    <NavigationContainer>
      {user.length > 0 ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;

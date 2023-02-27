import { useContext, useEffect, useRef, useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { signIn } from "../api/auth";
import Button, { ButtonType } from "../components/Button";
import Input, {
  IconName,
  KeyboardAppearance,
  KeyboardType,
  ReturnKeyType,
} from "../components/Input";
import SafeInputView from "../components/SafeInputView";
import { UserContext } from "../contexts/UserContext";

const SignInScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(UserContext);

  const passwordRef = useRef<TextInput>(null);

  useEffect(() => {
    setDisabled(email.length === 0 || password.length === 0);
  }, [email, password]);

  const onSubmit = async () => {
    if (disabled === false && isLoading === false) {
      Keyboard.dismiss();
      setIsLoading(true);
      try {
        const data = await signIn(email, password);
        setUser(data);
      } catch (error) {
        if (typeof error === "string") {
          Alert.alert("SignIn Failed", error, [
            {
              text: "OK",
              onPress: () => setIsLoading(false),
            },
          ]);
        }
      }
      setIsLoading(false);
    }
  };

  return (
    <SafeInputView>
      <SafeAreaView style={styles.container}>
        <Image
          source={require("../../assets/main.png")}
          style={styles.image}
          resizeMode={"cover"}
        />
        <Input
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
          title={"email"}
          placeholder={"your@email.com"}
          keyboardAppearance={KeyboardAppearance.LIGHT}
          keyboardType={KeyboardType.EMAIL}
          returnKeyType={ReturnKeyType.NEXT}
          iconName={IconName.EMAIL}
          secureTextEntry={false}
          onSubmitEditing={() => passwordRef?.current?.focus()}
        />
        <Input
          ref={passwordRef}
          value={password}
          onChangeText={(text) => setPassword(text.trim())}
          title={"password"}
          placeholder={"password"}
          keyboardAppearance={KeyboardAppearance.LIGHT}
          keyboardType={KeyboardType.DEFAULT}
          returnKeyType={ReturnKeyType.DONE}
          iconName={IconName.PASSWORD}
          secureTextEntry={true}
          onSubmitEditing={onSubmit}
        />
        <View style={styles.buttonContainer}>
          <Button
            title={"SIGNIN"}
            onPress={onSubmit}
            disabled={disabled}
            isLoading={isLoading}
            buttonType={ButtonType.PRIMARY}
          />
        </View>
      </SafeAreaView>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
  avoid: { flex: 1 },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default SignInScreen;

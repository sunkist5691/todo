import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Image,
  Platform,
  Pressable,
  Keyboard,
} from "react-native";
import Input, {
  KeyboardAppearance,
  KeyboardType,
  ReturnKeyType,
} from "../components/Input";

const TestAvoid = () => {
  return (
    <KeyboardAvoidingView
      style={styles.avoid}
      behavior={Platform.select({ ios: "position" })}
      contentContainerStyle={{ flex: 1 }}
    >
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={[styles.view, { backgroundColor: "#047857" }]}>
          <Image
            source={require("../../assets/main.png")}
            style={styles.image}
            resizeMode={"cover"}
          />
        </View>
        <View style={[styles.view, { backgroundColor: "#0369a1" }]}>
          <Input
            title={"email"}
            placeholder={"your@email.com"}
            keyboardAppearance={KeyboardAppearance.LIGHT}
            keyboardType={KeyboardType.EMAIL}
            returnKeyType={ReturnKeyType.NEXT}
            secureTextEntry={false}
          />
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default TestAvoid;

const styles = StyleSheet.create({
  avoid: { flex: 1 },
  view: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: 200, height: 200 },
});

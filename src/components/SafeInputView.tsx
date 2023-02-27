import { ReactNode } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
} from "react-native";

type Props = {
  children: ReactNode;
};

const SafeInputView = ({ children }: Props) => {
  return (
    <KeyboardAvoidingView
      style={styles.avoid}
      behavior={Platform.select({ ios: "padding" })}
    >
      <Pressable style={styles.avoid} onPress={Keyboard.dismiss}>
        {children}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default SafeInputView;

const styles = StyleSheet.create({
  avoid: { flex: 1 },
});

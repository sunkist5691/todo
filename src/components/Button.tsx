import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";
import { GRAY, PRIMARY, WHITE, DANGER } from "../colors";

export enum ButtonType {
  PRIMARY = "PRIMARY",
  DANGER = "DANGER",
}

type Props = {
  title: string;
  disabled: boolean;
  isLoading: boolean;
  onPress: () => void;
  buttonType: ButtonType;
};

const Button = ({ title, disabled, isLoading, onPress, buttonType }: Props) => {
  const colors = { PRIMARY, DANGER };
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: colors[buttonType].DEFAULT },
        pressed && { backgroundColor: colors[buttonType].DARK },
        disabled && { backgroundColor: colors[buttonType].LIGHT },
      ]}
      disabled={disabled}
    >
      {isLoading === true ? (
        <ActivityIndicator size={"small"} color={GRAY.DEFAULT} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY.DEFAULT,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },

  title: {
    color: WHITE,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 17,
  },
});

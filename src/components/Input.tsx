import { useState, forwardRef, ForwardedRef } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { BLACK, GRAY, PRIMARY } from "../colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export enum KeyboardType {
  DEFAULT = "default",
  EMAIL = "email-address",
}

export enum ReturnKeyType {
  DONE = "done",
  NEXT = "next",
}

export enum KeyboardAppearance {
  DEFAULT = "default",
  LIGHT = "light",
  DARK = "dark",
}

export enum IconName {
  EMAIL = "email",
  PASSWORD = "lock",
}

type Props = {
  title: string;
  placeholder: string;
  keyboardType: KeyboardType;
  returnKeyType: ReturnKeyType;
  secureTextEntry: boolean;
  keyboardAppearance: KeyboardAppearance;
  value: string;
  iconName: IconName;
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
};

const Input = forwardRef(
  (
    { title, placeholder, value, iconName, ...props }: Props,
    ref: ForwardedRef<TextInput>
  ) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    return (
      <View style={styles.container}>
        <Text
          style={[
            styles.title,
            value.length > 0 && styles.hasValueTitle,
            isFocused && styles.focusedTitle,
          ]}
        >
          {title}
        </Text>
        <View>
          <TextInput
            ref={ref}
            {...props}
            style={[
              styles.input,
              value.length > 0 && styles.hasValueInput,
              isFocused && styles.focusedInput,
            ]}
            placeholder={placeholder}
            placeholderTextColor={GRAY.DEFAULT}
            autoCapitalize={"none"}
            autoCorrect={false}
            textContentType={"none"}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
          />
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name={iconName}
              size={20}
              color={(() => {
                switch (true) {
                  case isFocused:
                    return PRIMARY.DEFAULT;
                  case value.length > 0:
                    return BLACK;
                  default:
                    return GRAY.DEFAULT;
                }
              })()}
            />
          </View>
        </View>
      </View>
    );
  }
);

Input.displayName = "Input";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    marginVertical: 10,
  },

  title: {
    marginBottom: 4,
    color: GRAY.DEFAULT,
  },

  focusedTitle: {
    fontWeight: "600",
    color: PRIMARY.DEFAULT,
  },

  hasValueTitle: {
    color: BLACK,
  },

  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: GRAY.DEFAULT,
    paddingHorizontal: 20,
    height: 42,
    paddingLeft: 30,
  },

  focusedInput: {
    borderWidth: 2,
    borderColor: PRIMARY.DEFAULT,
    color: PRIMARY.DEFAULT,
  },

  hasValueInput: {
    borderColor: BLACK,
    color: BLACK,
  },

  icon: {
    position: "absolute",
    left: 8,
    height: "100%",
    justifyContent: "center",
  },
});

export default Input;

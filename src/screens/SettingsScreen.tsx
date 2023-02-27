import { StyleSheet, View } from "react-native";
import Button, { ButtonType } from "../components/Button";
import { useUserContext } from "../contexts/UserContext";

const SettingsScreen = () => {
  const { setUser } = useUserContext();
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="SIGNOUT"
          onPress={() => setUser("")}
          disabled={false}
          isLoading={false}
          buttonType={ButtonType.DANGER}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
});

import { StyleSheet, Text, View, Image } from "react-native";
import { PRIMARY } from "../colors";

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/main.png")} style={styles.image} />
      <Text style={styles.title}>할 일을 추가해주세요</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "700",
    color: PRIMARY.DARK,
  },

  image: {
    width: 200,
    heigth: 200,
  },
});

export default EmptyList;

import { memo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BLACK, DANGER, PRIMARY } from "../colors";

type Props = {
  item: any;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

type checkProps = {
  name: any;
  color: any;
  size: any;
};

const ListItem = memo(({ item, onDelete, onToggle }: Props) => {
  const checkBoxProps: checkProps = {
    name: item.isDone === true ? "checkbox-marked" : "checkbox-blank-outline",
    color: item.isDone === true ? PRIMARY.DEFAULT : BLACK,
    size: 20,
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => onToggle(item.id)} hitSlop={10}>
        <MaterialCommunityIcons {...checkBoxProps} />
      </Pressable>
      <View style={styles.task}>
        <Text>{item.task}</Text>
      </View>
      <Pressable onPress={() => onDelete(item.id)} hitSlop={10}>
        <MaterialCommunityIcons
          name="trash-can"
          size={20}
          color={DANGER.DEFAULT}
        />
      </Pressable>
    </View>
  );
});

ListItem.displayName = "ListItem";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  task: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default ListItem;

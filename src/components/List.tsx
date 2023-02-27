import { FlatList, StyleSheet, View } from "react-native";
import { GRAY } from "../colors";
import ListItem from "./ListItem";

type Props = {
  data: any[];
  setIsBottom: React.Dispatch<boolean>;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

const Separator = () => {
  return <View style={styles.separator}></View>;
};

const List = ({ data, setIsBottom, onDelete, onToggle }: Props) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ListItem item={item} onDelete={onDelete} onToggle={onToggle} />
      )}
      windowSize={5}
      ItemSeparatorComponent={Separator}
      ListHeaderComponent={() => <View style={{ height: 10 }}></View>}
      onScroll={({
        nativeEvent: { contentSize, contentOffset, layoutMeasurement },
      }) => {
        const distance =
          contentSize.height - (contentOffset.y + layoutMeasurement.height);
        setIsBottom(!(distance > 20 || contentOffset.y === 0));
      }}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: GRAY.LIGHT,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default List;

import { useEffect, useState } from "react";
import EmptyList from "../components/EmptyList";
import InputFAB from "../components/InputFAB";
import List from "../components/List";
import "react-native-get-random-values";
import { nanoid } from "nanoid";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Alert, View } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const ListScreen = () => {
  const [todos, setTodos] = useState<any[]>([]);

  const [isBottom, setIsBottom] = useState<boolean>(false);
  const { bottom } = useSafeAreaInsets();
  const { getItem, setItem } = useAsyncStorage("todos");

  const save = async (data: any[]) => {
    try {
      await setItem(JSON.stringify(data));
      setTodos(data);
    } catch (e) {
      Alert.alert("저장 실패");
    }
  };

  const load = async () => {
    try {
      const data = await getItem();
      const todos = JSON.parse(data || "[]"); // if data is null, then return '[]'
      setTodos(todos);
    } catch (e) {
      Alert.alert("불러오기 실패");
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onInsert = (task: string) => {
    const id = nanoid();
    const newTask = { id, task, isDone: false };
    save([newTask, ...todos]);
    setTodos((prev) => [...prev, newTask]);
  };

  const onDelete = (id: number) => {
    const newTodos = todos.filter((item) => item.id !== id);
    save(newTodos);
  };

  const onToggle = (id: number) => {
    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    save(newTodos);
  };

  return (
    <View style={{ paddingBottom: bottom, flex: 1 }}>
      {todos.length === 0 ? (
        <EmptyList />
      ) : (
        <List
          data={todos}
          setIsBottom={setIsBottom}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      )}
      <InputFAB onInsert={onInsert} isBottom={isBottom} />
    </View>
  );
};

export default ListScreen;

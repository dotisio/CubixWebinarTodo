import { Button } from "react-native-paper";
import { router, Stack } from "expo-router";
import { TodoList } from "@/feature/todos/TodoList";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Button onPress={() => router.navigate("/create")}>Add new</Button>
      <TodoList />
    </>
  );
}

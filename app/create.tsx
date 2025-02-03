import { Text } from "react-native-paper";
import { Stack } from "expo-router";
import { CreateTodo } from "@/feature/todos/CreateTodo";

export default function Create() {
  return (
    <>
      <Stack.Screen options={{ title: "Add new todo" }} />
      <CreateTodo />
    </>
  );
}

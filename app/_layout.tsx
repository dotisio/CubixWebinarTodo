import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import axios from "axios";
import { TodoProvider } from "@/feature/todos/todos";

axios.defaults.baseURL = "http://10.0.2.2:3000";

export default function RootLayout() {
  return (
    <PaperProvider>
      <TodoProvider>
        <Stack />
      </TodoProvider>
    </PaperProvider>
  );
}

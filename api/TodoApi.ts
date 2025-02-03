import { Todo } from "@/models/todo";
import axios from "axios";

export const TodoApi = {
  list: async (): Promise<Todo[]> => {
    const response = await axios.get("/todos");
    return response.data;
  },
  create: async (title: string, description: string): Promise<void> => {
    await axios.post("/todos", {
      title,
      description,
      isDone: false,
    });
  },
  update: async (todoId: number, isDone: boolean): Promise<void> => {
    await axios.patch(`/todos/${todoId}`, {
      isDone,
    });
  },
};

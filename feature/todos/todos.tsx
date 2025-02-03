import { Todo } from "@/models/todo";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { TodoApi } from "@/api/TodoApi";

interface ITodosContext {
  todos: Todo[];
  add: (title: string, description: string) => Promise<void>;
  toggle: (todoId: number) => Promise<void>;
}

export const TodoContext = createContext<ITodosContext | null>(null);

export const TodoProvider = ({ children }: PropsWithChildren) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await TodoApi.list();
    setTodos(response);
  };

  const value = useMemo(
    () => ({
      todos,
      add: async (title: string, description: string) => {
        await TodoApi.create(title, description);
        await fetchTodos();
      },
      toggle: async (todoId: number) => {
        const prev = todos.find((todo) => todo.id === todoId)!;
        await TodoApi.update(todoId, !prev.isDone);
        await fetchTodos();
      },
    }),
    [todos, setTodos],
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodos = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw "Provide todo context";
  }

  return context;
};

import { ScrollView } from "react-native";
import { Card, Checkbox, Text } from "react-native-paper";
import { useTodos } from "@/feature/todos/todos";
import { Todo } from "@/models/todo";
import styled from "styled-components/native";

export const TodoList = () => {
  const { todos, toggle } = useTodos();

  return (
    <>
      <ScrollView>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onPress={() => toggle(todo.id)} />
        ))}
      </ScrollView>
    </>
  );
};

const TodoItem = ({ todo, onPress }: { todo: Todo; onPress: () => void }) => (
  <TodoItemContainer>
    <TitleRow>
      <Text variant="titleLarge">{todo.title}</Text>
      <Checkbox
        status={todo.isDone ? "checked" : "unchecked"}
        onPress={onPress}
      />
    </TitleRow>
    <Text>{todo.description}</Text>
  </TodoItemContainer>
);

const TodoItemContainer = styled(Card)`
  padding: 10px;
  margin: 10px;
`;
const TitleRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

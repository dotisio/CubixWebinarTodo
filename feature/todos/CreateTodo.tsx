import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import { useTodos } from "@/feature/todos/todos";
import styled from "styled-components/native";
import { router } from "expo-router";

export const CreateTodo = () => {
  const { add } = useTodos();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    if (!title) {
      return;
    }
    await add(title.trim(), description.trim());
    router.navigate("/");
  };

  return (
    <Container>
      <TextInput
        label="Title"
        mode="outlined"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        label="Description"
        mode="outlined"
        value={description}
        onChangeText={(text) => setDescription(text)}
        multiline
      />
      <Button onPress={handleSubmit}>Add</Button>
    </Container>
  );
};

const Container = styled.View`
  gap: 10px;
  padding: 10px;
`;

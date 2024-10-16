import React from 'react';
import { Container, Divider, Paper } from '@mui/material';
import { Heading, Input as TodoInput, List as TodoList } from '../components/';
import { useAppSelector } from '../store/hooks.ts';
import { selectTodos } from '../features/todo/todosSlice.ts';

const MainPage = (): React.JSX.Element => {
  const todos = useAppSelector(selectTodos);
  return (
    <Container maxWidth={'sm'}>
      <Heading />
      <Paper>
        <TodoInput />
        <Divider />
        <TodoList todos={todos}></TodoList>
        <Divider />
      </Paper>
    </Container>
  );
};

export default MainPage;

import React from 'react';
import { Container, Divider, Paper } from '@mui/material';
import { Filters, Heading, Input as TodoInput, List as TodoList } from '../components/';
import { useAppSelector } from '../store';
import { selectFilteredTodos } from '../features/todo/todosSlice.ts';

export const MainPage = (): React.JSX.Element => {
  const todos = useAppSelector(selectFilteredTodos);
  return (
    <Container maxWidth={'sm'}>
      <Heading />
      <Paper>
        <TodoInput />
        <Divider />
        <TodoList todos={todos}></TodoList>
        <Divider />
        <Filters />
      </Paper>
    </Container>
  );
};

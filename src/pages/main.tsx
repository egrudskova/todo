import React from 'react';
import { Container, Typography } from '@mui/material';
import TodoList from '../components/List.tsx';
import { useAppSelector } from '../store/hooks.ts';
import { selectTodos } from '../features/todo/todosSlice.ts';

const MainPage = (): React.JSX.Element => {
  const todos = useAppSelector(selectTodos);
  return (
    <Container maxWidth={'sm'}>
      <Typography
        variant="subtitle1"
        style={{
          textAlign: 'center',
          margin: 24,
          font: 'status-bar',
          fontSize: 23,
          color: 'slateblue',
        }}
      >
        Todo App
      </Typography>
      <TodoList todos={todos}></TodoList>
    </Container>
  );
};

export default MainPage;

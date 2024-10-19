import React from 'react';
import { Container, Divider, Paper } from '@mui/material';
import { FilterPanel, Heading, Input as TodoInput, List as TodoList } from '../components/';

export const MainPage = (): React.JSX.Element => {
  return (
    <Container maxWidth={'sm'}>
      <Heading />
      <Paper>
        <TodoInput />
        <Divider />
        <TodoList></TodoList>
        <Divider />
        <FilterPanel />
      </Paper>
    </Container>
  );
};

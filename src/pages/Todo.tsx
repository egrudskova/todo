import React from 'react';
import { Divider } from '@mui/material';
import { FilterPanel, TodoInput as TodoInput, TodoList as TodoList } from '../components/';

export const TodoPage = (): React.JSX.Element => {
  return (
    <>
      <TodoInput />
      <Divider />
      <TodoList />
      <Divider />
      <FilterPanel />
    </>
  );
};

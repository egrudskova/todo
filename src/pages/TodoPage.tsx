import React from 'react';
import { Divider } from '@mui/material';
import { FilterPanel, TodoInput, TodoList } from '@/components';

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

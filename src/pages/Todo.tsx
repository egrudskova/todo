import React from 'react';
import { Divider } from '@mui/material';
import { FilterPanel, Input as TodoInput, List as TodoList } from '../components/';

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

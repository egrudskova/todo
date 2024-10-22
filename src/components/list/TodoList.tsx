import React from 'react';
import { List } from '@mui/material';
import { useAppSelector } from '@/store';
import { selectFilteredTodosIds } from '@/features';
import { TodoListItem } from '@/components';

export const TodoList = (): React.JSX.Element => {
  const ids = useAppSelector(selectFilteredTodosIds);
  return (
    <List>
      {ids.map((id) => {
        return <TodoListItem key={id} id={id} />;
      })}
    </List>
  );
};

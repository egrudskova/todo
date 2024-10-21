import React from 'react';
import { useAppSelector } from '../../store';
import { selectFilteredTodosIds } from '../../features';
import { TodoListItem } from './TodoListItem.tsx';
import { List } from '@mui/material';

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

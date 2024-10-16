import { Paper } from '@mui/material';
import React from 'react';
import { Todo } from '../features/todo/types.ts';
import TodoListItem from './ListItem.tsx';

interface ListProps {
  todos: Todo[];
}

const List = ({ todos }: ListProps): React.JSX.Element => {
  return (
    <Paper>
      {todos.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo} />;
      })}
    </Paper>
  );
};

export default List;

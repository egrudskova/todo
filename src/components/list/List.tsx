import React from 'react';
import { ListItem } from './ListItem.tsx';
import { ListProps } from './types.ts';

export const List = ({ todos }: ListProps): React.JSX.Element => (
  <>
    {todos.map((todo) => {
      return <ListItem key={todo.id} todo={todo} />;
    })}
  </>
);

import React from 'react';
import { useAppSelector } from '../../store';
import { selectFilteredTodosIds } from '../../features';
import { ListItem } from './ListItem.tsx';

export const List = (): React.JSX.Element => {
  const ids = useAppSelector(selectFilteredTodosIds);
  return (
    <>
      {ids.map((id) => {
        return <ListItem key={id} id={id} />;
      })}
    </>
  );
};

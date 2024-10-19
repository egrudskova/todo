import React from 'react';
import { Button, Stack } from '@mui/material';
import { useAppDispatch } from '../../store';
import { removeCompletedTodos } from '../../features';
import { Filters } from './Filters.tsx';
import { Stats } from './Stats.tsx';

export const FilterPanel = (): React.JSX.Element => {
  const dispatch = useAppDispatch();

  const handleClearButtonClick = (): void => {
    dispatch(removeCompletedTodos());
  };

  return (
    <Stack direction="row" alignItems="center" padding={1}>
      <Stats />
      <Filters />
      <Button onClick={handleClearButtonClick}>Clear completed</Button>
    </Stack>
  );
};

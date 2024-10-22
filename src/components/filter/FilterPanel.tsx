import React from 'react';
import { Button, Stack } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/store';
import { removeCompletedTodos, selectCompletedTodosCount } from '@/features';
import { Filters } from './Filters.tsx';
import { Stats } from './Stats.tsx';

export const FilterPanel = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const completedTodosCount = useAppSelector(selectCompletedTodosCount);

  const handleClearButtonClick = (): void => {
    if (completedTodosCount) {
      dispatch(removeCompletedTodos());
    }
  };

  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" padding={1}>
      <Stats />
      <Filters />
      <Button onClick={handleClearButtonClick}>Clear completed</Button>
    </Stack>
  );
};

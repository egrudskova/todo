import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { Filter } from '../features';
import { useAppDispatch, useAppSelector } from '../store';
import { changeActiveFilter, removeCompletedTodos, selectActiveFilter, selectUnfinishedTodosCount } from '../features';

export const Filters = (): React.JSX.Element => {
  const activeFilter = useAppSelector(selectActiveFilter);
  const dispatch = useAppDispatch();
  const unfinishedTodosCount = useAppSelector(selectUnfinishedTodosCount);

  const handleClearButtonClick = (): void => {
    dispatch(removeCompletedTodos());
  };
  const handleFilterButtonClick = (filter: Filter): void => {
    dispatch(changeActiveFilter(filter));
  };

  return (
    <Stack direction="row" alignItems="center" padding={1}>
      <Typography>{unfinishedTodosCount} items left</Typography>
      <Stack flexGrow={1} direction="row" justifyContent="center" spacing={1}>
        {Object.values(Filter).map((filter, idx) => (
          <Button
            key={idx}
            variant="outlined"
            sx={{ borderColor: activeFilter === filter ? 'blue' : 'transparent' }}
            onClick={() => handleFilterButtonClick(filter)}
          >
            {filter}
          </Button>
        ))}
      </Stack>
      <Button onClick={handleClearButtonClick}>Clear completed</Button>
    </Stack>
  );
};

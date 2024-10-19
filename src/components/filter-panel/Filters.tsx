import { Button, Stack } from '@mui/material';
import { changeActiveFilter, Filter, selectActiveFilter } from '../../features';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store';

export const Filters = (): React.JSX.Element => {
  const activeFilter = useAppSelector(selectActiveFilter);
  const dispatch = useAppDispatch();

  const handleFilterButtonClick = (filter: Filter): void => {
    dispatch(changeActiveFilter(filter));
  };
  return (
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
  );
};

import { Button, Stack } from '@mui/material';
import { changeActiveFilter, Filter, selectActiveFilter } from '../../features';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';

export const Filters = (): React.JSX.Element => {
  const activeFilter = useAppSelector(selectActiveFilter);
  const [lastActiveFilter, setLastActiveFilter] = useState<Filter>(activeFilter);
  const dispatch = useAppDispatch();

  const handleFilterButtonClick = (filter: Filter): void => {
    if (filter !== lastActiveFilter) {
      dispatch(changeActiveFilter(filter));
      setLastActiveFilter(filter);
    }
  };

  return (
    <Stack flexGrow={1} direction="row" justifyContent="center" spacing={1}>
      {Object.values(Filter).map((filter, idx) => (
        <Button
          key={idx}
          variant="outlined"
          sx={{ borderColor: activeFilter === filter ? 'primary.main' : 'transparent' }}
          onClick={() => handleFilterButtonClick(filter)}
        >
          {filter}
        </Button>
      ))}
    </Stack>
  );
};

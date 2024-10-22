import React from 'react';
import { Typography } from '@mui/material';
import { useAppSelector } from '@/store';
import { selectUnfinishedTodosCount } from '@/features';

export const Stats = (): React.JSX.Element => {
  const unfinishedTodosCount = useAppSelector(selectUnfinishedTodosCount);

  return (
    <Typography sx={{ fontSize: 'small', marginRight: '2px' }}>
      {unfinishedTodosCount} item{unfinishedTodosCount === 1 ? '' : 's'} left
    </Typography>
  );
};

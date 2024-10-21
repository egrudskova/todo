import { Typography } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../store';
import { selectUnfinishedTodosCount } from '../../features';

export const Stats = (): React.JSX.Element => {
  const unfinishedTodosCount = useAppSelector(selectUnfinishedTodosCount);

  return <Typography>{unfinishedTodosCount} items left</Typography>;
};

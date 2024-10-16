import { Typography } from '@mui/material';
import React from 'react';

export const Heading = (): React.JSX.Element => (
  <Typography
    variant="subtitle1"
    style={{
      textAlign: 'center',
      margin: 24,
      font: 'status-bar',
      fontSize: 23,
      color: 'slateblue',
    }}
  >
    Todo App
  </Typography>
);

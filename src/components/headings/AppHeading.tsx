import { Typography } from '@mui/material';
import React from 'react';

export const AppHeading = (): React.JSX.Element => (
  <Typography
    variant="h1"
    sx={{
      textAlign: 'center',
      font: 'status-bar',
      textTransform: 'uppercase',
      fontWeight: '700',
      fontSize: '2.5em',
      lineHeight: '28px',
      color: 'primary.main',
      margin: '20px 0',
    }}
  >
    Todo App
  </Typography>
);

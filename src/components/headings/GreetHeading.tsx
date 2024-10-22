import React from 'react';
import { Typography } from '@mui/material';

export const GreetHeading = (): React.JSX.Element => {
  const storedUserame = localStorage.getItem('username');
  return (
    <Typography variant="h4" color="secondary.main" gutterBottom>
      Welcome{storedUserame && ` back, ${storedUserame}`}
    </Typography>
  );
};

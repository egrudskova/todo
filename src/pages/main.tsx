import React from 'react';
import { Container, Typography } from '@mui/material';

const MainPage = (): React.JSX.Element => {
  return (
    <Container maxWidth={'sm'}>
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
    </Container>
  );
};

export default MainPage;

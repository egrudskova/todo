import { Outlet } from 'react-router-dom';
import { AppHeading } from '../components';
import React from 'react';
import { Container, Paper } from '@mui/material';

export const Layout = (): React.JSX.Element => (
  <Container
    maxWidth={'sm'}
    style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}
  >
    <Paper elevation={10} sx={{ padding: '5px' }}>
      <AppHeading />
      <Outlet />
    </Paper>
  </Container>
);

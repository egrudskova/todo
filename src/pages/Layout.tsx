import { Outlet } from 'react-router-dom';
import { AppHeading } from '../components';
import React from 'react';
import { Container, Paper } from '@mui/material';

export const Layout = (): React.JSX.Element => (
  <Container maxWidth={'sm'} style={{ margin: '10vh auto' }}>
    <Paper elevation={10} sx={{ padding: '5px' }}>
      <AppHeading />
      <Outlet />
    </Paper>
  </Container>
);

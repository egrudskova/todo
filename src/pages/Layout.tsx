import { Outlet } from 'react-router-dom';
import { AppHeading } from '../components';
import React from 'react';
import { Container, Paper } from '@mui/material';

export const Layout = (): React.JSX.Element => (
  <Container maxWidth={'sm'}>
    <AppHeading />
    <Paper>
      <Outlet />
    </Paper>
  </Container>
);

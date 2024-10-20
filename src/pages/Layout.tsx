import { Outlet } from 'react-router-dom';
import { Heading } from '../components';
import React from 'react';
import { Container, Paper } from '@mui/material';

export const Layout = (): React.JSX.Element => (
  <Container maxWidth={'sm'}>
    <Heading />
    <Paper>
      <Outlet />
    </Paper>
  </Container>
);

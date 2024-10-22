import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Paper } from '@mui/material';
import { AppHeading } from '@/components';

export const LayoutPage = (): React.JSX.Element => (
  <Container maxWidth={'sm'} style={{ margin: '10vh auto' }}>
    <Paper elevation={10} sx={{ padding: '5px' }}>
      <AppHeading />
      <Outlet />
    </Paper>
  </Container>
);

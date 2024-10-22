import React from 'react';
import { Container } from '@mui/material';
import { UsernameInput, GreetHeading } from '@/components';

export const WelcomePage = (): React.JSX.Element => (
  <Container maxWidth="sm" sx={{ padding: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <GreetHeading />
    <UsernameInput />
  </Container>
);

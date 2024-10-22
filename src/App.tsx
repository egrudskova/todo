import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from '@/routes';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/styles';

const router = createBrowserRouter(routes);

export const App = (): React.JSX.Element => (
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);

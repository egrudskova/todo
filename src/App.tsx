import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes/routes.tsx';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/theme.ts';

const router = createBrowserRouter(routes);

const App = (): React.JSX.Element => (
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;

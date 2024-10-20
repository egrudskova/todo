import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes/routes.tsx';

const router = createBrowserRouter(routes);

const App = (): React.JSX.Element => <RouterProvider router={router} />;

export default App;

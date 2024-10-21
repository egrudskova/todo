import { RouteObject } from 'react-router-dom';
import { ErrorPage, Layout, NotFoundPage, TodoPage, WelcomePage } from '../pages';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
      {
        path: 'todos',
        element: <TodoPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;

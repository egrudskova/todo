import { RouteObject } from 'react-router-dom';
import { ErrorPage, LayoutPage, NotFoundPage, TodoPage, WelcomePage } from '@/pages';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <LayoutPage />,
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

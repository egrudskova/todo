import { NotFoundPage } from '../pages';
import { Layout } from '../pages';
import { RouteObject } from 'react-router-dom';
import { ErrorPage } from '../pages/Error.tsx';
import WelcomePage from '../pages/Welcome.tsx';
import { TodoPage } from '../pages/Todo.tsx';

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

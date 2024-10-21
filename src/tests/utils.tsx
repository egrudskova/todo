import React from 'react';
import { queries, render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, Store } from '@reduxjs/toolkit';
import { reducer, RootState } from '../store';
import { Filter, Todo } from '../features';
import { v4 as uuidv4 } from 'uuid';

export const renderWithRedux = (
  component: React.JSX.Element,
  {
    preloadedState,
    store = configureStore({ reducer, preloadedState }),
  }: { preloadedState?: RootState; store?: Store } = {}
): RenderResult<typeof queries> & { store: Store } => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

export const todosMockTest: Todo[] = [
  {
    id: uuidv4(),
    text: 'test10',
    isCompleted: true,
    isEdited: false,
  },
  {
    id: uuidv4(),
    text: 'test11',
    isCompleted: false,
    isEdited: false,
  },
];

export const createMockState = (todos: Todo[]): RootState => ({
  todos: {
    filteredTodosIds: todos.map((todo) => todo.id),
    activeFilter: Filter.All,
    todos: todos,
  },
});

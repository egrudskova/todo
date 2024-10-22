import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from '@/features';

export const reducer = {
  todos: todosReducer,
};

export const store = configureStore({ reducer });

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

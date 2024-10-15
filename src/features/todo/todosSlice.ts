import { createSlice } from '@reduxjs/toolkit';
import { Todo } from './types.ts';
import { RootState } from '../../store/store.ts';

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
});

export const selectTodos = (state: RootState): TodosState['todos'] => state.todos.todos;
export default todosSlice.reducer;

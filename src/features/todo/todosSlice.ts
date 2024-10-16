import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from './types.ts';
import { RootState } from '../../store/store.ts';
import { todosMock } from './mocks.ts';

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: todosMock,
};

const todosSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<Pick<Todo, 'id'>>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoIsCompleted: (state, action: PayloadAction<Pick<Todo, 'id'>>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
    },
    toggleTodoIsEdited: (state, action: PayloadAction<Pick<Todo, 'id'>>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, isEdited: !todo.isEdited } : todo
      );
    },
  },
});

export const selectTodos = (state: RootState): TodosState['todos'] => state.todos.todos;
export const { addTodo, removeTodo, toggleTodoIsCompleted, toggleTodoIsEdited } = todosSlice.actions;
export default todosSlice.reducer;

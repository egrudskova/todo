import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Filter, Todo } from './types.ts';
import { RootState } from '../../store';
import { todosMock } from './mocks.ts';

interface TodosState {
  activeFilter: Filter;
  todos: Todo[];
}

const initialState: TodosState = {
  activeFilter: Filter.All,
  todos: todosMock,
};

const todosSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    changeActiveFilter: (state, action: PayloadAction<Filter>) => {
      state.activeFilter = action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<Pick<Todo, 'id'>>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    removeCompletedTodos: (state) => {
      state.todos = state.todos.filter(({ isCompleted }) => !isCompleted);
    },
    editTodoText: (state, action: PayloadAction<Pick<Todo, 'id' | 'text'>>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
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
export const selectActiveFilter = (state: RootState): Filter => state.todos.activeFilter;
export const selectUnfinishedTodosCount = createSelector(
  [selectTodos],
  (todos: Todo[]) => todos.filter((todo) => !todo.isCompleted).length
);
export const selectFilteredTodos = createSelector([selectTodos, selectActiveFilter], (todos, filter) => {
  switch (filter) {
    case Filter.Active:
      return todos.filter(({ isCompleted }) => !isCompleted);
    case Filter.Completed:
      return todos.filter(({ isCompleted }) => isCompleted);
    default:
      return todos;
  }
});

export const {
  changeActiveFilter,
  addTodo,
  removeTodo,
  removeCompletedTodos,
  editTodoText,
  toggleTodoIsCompleted,
  toggleTodoIsEdited,
} = todosSlice.actions;
export default todosSlice.reducer;

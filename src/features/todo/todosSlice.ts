import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Filter, Todo, TodosState } from './types.ts';
import { RootState } from '../../store';
import { todosMock } from './mocks.ts';

const initialState: TodosState = {
  filteredTodosIds: todosMock.map((todo) => todo.id),
  activeFilter: Filter.All,
  todos: todosMock,
};

const filterTodos = (todos: Todo[], filter: Filter): Todo[] => {
  switch (filter) {
    case Filter.Active:
      return todos.filter(({ isCompleted }) => !isCompleted);
    case Filter.Completed:
      return todos.filter(({ isCompleted }) => isCompleted);
    default:
      return todos;
  }
};

const todosSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    changeActiveFilter: (state, action: PayloadAction<Filter>) => {
      state.activeFilter = action.payload;
      state.filteredTodosIds = filterTodos(state.todos, state.activeFilter).map((todo) => todo.id);
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
      state.filteredTodosIds = filterTodos(state.todos, state.activeFilter).map((todo) => todo.id);
    },
    removeTodo: (state, action: PayloadAction<Pick<Todo, 'id'>>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      state.filteredTodosIds = filterTodos(state.todos, state.activeFilter).map((todo) => todo.id);
    },
    removeCompletedTodos: (state) => {
      state.todos = state.todos.filter(({ isCompleted }) => !isCompleted);
      state.filteredTodosIds = filterTodos(state.todos, state.activeFilter).map((todo) => todo.id);
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

const selectTodos = (state: RootState): Todo[] => state.todos.todos;
export const selectActiveFilter = (state: RootState): Filter => state.todos.activeFilter;
export const selectFilteredTodosIds = (state: RootState): Todo['id'][] => state.todos.filteredTodosIds;
export const selectTodoById = (state: RootState, todoId: Todo['id']): Todo =>
  state.todos.todos.find((todo) => todo.id === todoId)!;
export const selectUnfinishedTodosCount = createSelector(
  [selectTodos],
  (todos: Todo[]) => todos.filter((todo) => !todo.isCompleted).length
);

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

import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { Filter, Todo, TodosState } from './types.ts';
import { todosMock } from './mocks.ts';

const initialState: TodosState = {
  filteredTodosIds: todosMock.map((todo) => todo.id),
  activeFilter: Filter.All,
  todos: todosMock,
};

const updateFilteredTodosIds = (state: TodosState): void => {
  let filteredTodos: Todo[];
  switch (state.activeFilter) {
    case Filter.Active:
      filteredTodos = state.todos.filter(({ isCompleted }) => !isCompleted);
      break;
    case Filter.Completed:
      filteredTodos = state.todos.filter(({ isCompleted }) => isCompleted);
      break;
    default:
      filteredTodos = state.todos;
      break;
  }
  state.filteredTodosIds = filteredTodos.map((todo) => todo.id);
};

const todosSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    updateFilteredTodosIds,
    changeActiveFilter: (state, action: PayloadAction<Filter>) => {
      state.activeFilter = action.payload;
      todosSlice.caseReducers.updateFilteredTodosIds(state);
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
      todosSlice.caseReducers.updateFilteredTodosIds(state);
    },
    removeTodo: (state, action: PayloadAction<Pick<Todo, 'id'>>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      todosSlice.caseReducers.updateFilteredTodosIds(state);
    },
    removeCompletedTodos: (state) => {
      state.todos = state.todos.filter(({ isCompleted }) => !isCompleted);
      todosSlice.caseReducers.updateFilteredTodosIds(state);
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
export const selectCompletedTodosCount = createSelector(
  [selectTodos],
  (todos: Todo[]) => todos.filter((todo) => todo.isCompleted).length
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

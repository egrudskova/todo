export {
  selectTodos,
  selectUnfinishedTodosCount,
  selectActiveFilter,
  changeActiveFilter,
  addTodo,
  removeTodo,
  removeCompletedTodos,
  editTodoText,
  toggleTodoIsCompleted,
  toggleTodoIsEdited,
  default as todosReducer,
} from './todo/todosSlice.ts';

export type { Todo } from './todo/types.ts';
export { Filter } from './todo/types.ts';
export { todosMock } from './todo/mocks.ts';

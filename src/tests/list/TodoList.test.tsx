import { TodoList } from '../../components';
import { createMockState, renderWithRedux, todosMockTest } from '../utils.tsx';
import { RootState } from '../../store';
import { fireEvent, screen } from '@testing-library/react';
import { TodoPage } from '../../pages';

describe('Todo list component', () => {
  it('should render a list of todos for every id', () => {
    const { store } = renderWithRedux(<TodoList />, { preloadedState: createMockState(todosMockTest) });
    const state = store.getState() as RootState;
    const todoIds = state.todos.filteredTodosIds;
    const todos = state.todos.todos;
    todoIds.forEach((id) => {
      expect(screen.getByText(todos.find((todo) => todo.id === id)!.text)).toBeInTheDocument();
    });
  });

  it('should not render a list of todos in case of empty todos', () => {
    renderWithRedux(<TodoList />, { preloadedState: createMockState([]) });
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('should delete todo when the delete button is clicked', () => {
    renderWithRedux(<TodoList />, { preloadedState: createMockState([todosMockTest[0]]) });
    const deleteButton = screen.getByRole('button', { name: /Delete/i });
    fireEvent.click(deleteButton);
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('should add todo when the add button is clicked', () => {
    renderWithRedux(<TodoPage />, { preloadedState: createMockState([]) });
    const inputElement: HTMLInputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'New todo' } });
    const buttonElement = screen.getByRole('button', { name: /Add/i });
    fireEvent.click(buttonElement);
    expect(screen.queryByText('New todo')).toBeInTheDocument();
  });
});

import { screen, fireEvent } from '@testing-library/react';
import { TodoListItem } from '../../components';
import { createMockState, renderWithRedux, todosMockTest } from '../utils.tsx';

describe('Todo list item component', () => {
  const todo = todosMockTest[0];
  it('should display the todo item found by id', () => {
    renderWithRedux(<TodoListItem id={todo['id']} />, { preloadedState: createMockState(todosMockTest) });
    const todoText = screen.getByText(todo.text);
    expect(todoText).toBeInTheDocument();
  });

  it('should toggle the checkbox when clicked', () => {
    renderWithRedux(<TodoListItem id={todo['id']} />, { preloadedState: createMockState(todosMockTest) });
    const checkbox: HTMLInputElement = screen.getByRole('checkbox');

    if (checkbox.checked) {
      fireEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
    } else {
      fireEvent.click(checkbox);
      expect(checkbox).toBeChecked();
    }
  });

  it('should enter edit mode when the edit button is clicked', () => {
    renderWithRedux(<TodoListItem id={todo['id']} />, { preloadedState: createMockState(todosMockTest) });
    const editButton = screen.getByRole('button', { name: /Edit/i });
    fireEvent.click(editButton);
    const editField = screen.getByRole('textbox');
    expect(editField).toBeInTheDocument();
  });

  it('should update the todo text when the edit field is changed', () => {
    renderWithRedux(<TodoListItem id={todo['id']} />, { preloadedState: createMockState(todosMockTest) });
    const editButton = screen.getByRole('button', { name: /Edit/i });
    fireEvent.click(editButton);

    const editField: HTMLInputElement = screen.getByRole('textbox');
    fireEvent.change(editField, { target: { value: 'Updated Todo' } });

    expect(editField.value).toBe('Updated Todo');
  });

  it('should exit edit mode and save the changes when the edit button is clicked again', () => {
    renderWithRedux(<TodoListItem id={todo['id']} />, { preloadedState: createMockState(todosMockTest) });

    const editButton = screen.getByRole('button', { name: /Edit/i });
    fireEvent.click(editButton);

    const editField = screen.getByRole('textbox');
    fireEvent.change(editField, { target: { value: 'Updated Todo' } });
    fireEvent.click(editButton);
    expect(editField).not.toBeInTheDocument();
    expect(screen.getByText('Updated Todo')).toBeInTheDocument();
  });
});

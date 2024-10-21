import { screen, fireEvent } from '@testing-library/react';
import { TodoInput } from '../../components';
import { addTodo } from '../../features';
import { createMockState, renderWithRedux } from '../utils.tsx';

describe('TodoInput component', () => {
  it('should render the input and button', () => {
    renderWithRedux(<TodoInput />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Add/i })).toBeInTheDocument();
  });

  it('should update input value on change', () => {
    renderWithRedux(<TodoInput />);
    const inputElement: HTMLInputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'New todo' } });

    expect(inputElement.value).toBe('New todo');
  });

  it('should display a snackbar when adding an empty todo', () => {
    renderWithRedux(<TodoInput />);
    const buttonElement = screen.getByRole('button', { name: /Add/i });
    fireEvent.click(buttonElement);

    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('should dispatch addTodo action with correct payload when adding a valid todo', () => {
    const { store } = renderWithRedux(<TodoInput />, { preloadedState: createMockState([]) });
    const dispatchSpy = vi.spyOn(store, 'dispatch');
    const inputElement: HTMLInputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'New todo' } });
    const buttonElement = screen.getByRole('button', { name: /Add/i });
    fireEvent.click(buttonElement);

    const expectedTodo = {
      text: 'New todo',
      id: expect.any(String),
      isEdited: false,
      isCompleted: false,
    };

    expect(dispatchSpy).toHaveBeenCalledWith(addTodo(expectedTodo));
    expect(inputElement.value).toBe('');
  });

  it('should dispatch addTodo action on Enter key press', () => {
    const { store } = renderWithRedux(<TodoInput />, { preloadedState: createMockState([]) });
    const dispatchSpy = vi.spyOn(store, 'dispatch');
    const inputElement: HTMLInputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'New todo' } });
    fireEvent.keyUp(inputElement, { key: 'Enter' });

    const expectedTodo = {
      text: 'New todo',
      id: expect.any(String),
      isEdited: false,
      isCompleted: false,
    };

    expect(dispatchSpy).toHaveBeenCalledWith(addTodo(expectedTodo));
    expect(inputElement.value).toBe('');
  });
});

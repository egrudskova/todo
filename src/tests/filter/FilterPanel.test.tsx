import { screen, fireEvent } from '@testing-library/react';
import { FilterPanel } from '../../components';
import { vi } from 'vitest';
import { createMockState, renderWithRedux, todosMockTest } from '../utils.tsx';

describe('FilterPanel component', () => {
  it('should render the Stats, Filters, and Clear completed button', () => {
    renderWithRedux(<FilterPanel />, { preloadedState: createMockState(todosMockTest) });
    expect(
      screen.getByText(`${todosMockTest.filter((todo) => !todo.isCompleted).length} items left`)
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /All/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Active/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Completed' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Clear completed/i })).toBeInTheDocument();
  });

  it('should not dispatch clear completed action on empty list', () => {
    const { store } = renderWithRedux(<FilterPanel />, { preloadedState: createMockState([]) });
    const dispatchSpy = vi.spyOn(store, 'dispatch');
    const button = screen.getByRole('button', { name: 'Clear completed' });
    fireEvent.click(button);
    expect(dispatchSpy).not.toHaveBeenCalled();
  });
});

import { fireEvent, render, screen } from '@testing-library/react';
import { UsernameInput } from '../../components';

const mockGetItem = vi.fn();
const mockSetItem = vi.fn();
const mockedUseNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...mod,
    useNavigate: () => mockedUseNavigate,
  };
});

Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: (...args: string[]) => mockGetItem(...args),
    setItem: (...args: string[]) => mockSetItem(...args),
  },
});

describe('Username input component', () => {
  beforeEach(() => {
    mockGetItem.mockClear();
    mockSetItem.mockClear();
    mockedUseNavigate.mockClear();
  });

  it('should render username input when no username is stored', () => {
    mockGetItem.mockReturnValueOnce(null);
    render(<UsernameInput />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Start/i })).toBeInTheDocument();
  });

  it('should render continue button when username is stored', () => {
    mockGetItem.mockReturnValueOnce('TestUser');
    render(<UsernameInput />);

    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Continue/i })).toBeInTheDocument();
  });

  it('should update username state on input change', () => {
    mockGetItem.mockReturnValueOnce(null);
    render(<UsernameInput />);
    const inputElement: HTMLInputElement = screen.getByRole('textbox', { name: /Username/i });
    fireEvent.change(inputElement, { target: { value: 'NewUserName' } });

    expect(inputElement.value).toBe('NewUserName');
  });

  it('should call localStorage.setItem and navigate to /todos on submit', () => {
    mockGetItem.mockReturnValueOnce(null);
    render(<UsernameInput />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'TestUser' } });
    const buttonElement = screen.getByRole('button', { name: /Start/i });

    fireEvent.click(buttonElement);

    expect(mockSetItem).toHaveBeenCalledWith('username', 'TestUser');
    expect(mockedUseNavigate).toHaveBeenCalledWith('/todos');
  });

  it('should call localStorage.setItem and navigate to /todos on Enter key press', () => {
    mockGetItem.mockReturnValueOnce(null);
    render(<UsernameInput />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'TestUser' } });

    fireEvent.keyUp(inputElement, { key: 'Enter' });

    expect(mockSetItem).toHaveBeenCalledWith('username', 'TestUser');
    expect(mockedUseNavigate).toHaveBeenCalledWith('/todos');
  });
});

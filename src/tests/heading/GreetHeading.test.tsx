import { GreetHeading } from '../../components';
import { render, screen } from '@testing-library/react';

const mockGetItem = vi.fn();

Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: (...args: string[]) => mockGetItem(...args),
  },
});

describe('Greet component', () => {
  beforeEach(() => {
    mockGetItem.mockClear();
  });

  it('should render Welcome with the name when name is provided', () => {
    mockGetItem.mockReturnValueOnce('John Doe');
    render(<GreetHeading />);
    const welcomeText = screen.getByText('Welcome back, John Doe');
    expect(welcomeText).toBeInTheDocument();
    expect(mockGetItem).toHaveBeenCalledTimes(1);
    expect(mockGetItem).toHaveBeenCalledWith('username');
  });

  it('should render Welcome without name when name is not provided', () => {
    mockGetItem.mockReturnValueOnce(null);
    render(<GreetHeading />);
    const welcomeText = screen.getByText('Welcome');
    expect(welcomeText).toBeInTheDocument();
    expect(mockGetItem).toHaveBeenCalledTimes(1);
    expect(mockGetItem).toHaveBeenCalledWith('username');
  });
});

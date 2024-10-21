import { render, screen } from '@testing-library/react';
import { AppHeading } from '../../components';

describe('Heading component', () => {
  it('should render the heading text correctly', () => {
    render(<AppHeading />);

    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent(/todo/i);
  });
});

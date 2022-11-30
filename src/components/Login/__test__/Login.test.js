import { render, screen } from '@testing-library/react';
import Login from '../Login';

it('renders login section', async () => {
    render(<Login title="Login" />);
    const loginElement = screen.getByText(/login/i);
    expect(loginElement).toBeInTheDocument();
  });
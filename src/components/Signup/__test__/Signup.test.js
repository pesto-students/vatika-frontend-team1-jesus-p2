import { render, screen } from '@testing-library/react';
import Signup from '../Signup';

it('renders signup section', async () => {
    render(<Signup title="Login" />);
    const signupElement = screen.getByText(/signup/i);
    expect(signupElement).toBeInTheDocument();
  });
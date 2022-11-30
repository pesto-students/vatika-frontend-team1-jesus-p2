import { render, screen } from '@testing-library/react';
import Cart from '../Cart';

it('renders cart section', async () => {
    render(<Cart title="Cart" />);
    const cartElement = screen.getByText(/cart/i);
    expect(cartElement).toBeInTheDocument();
  });
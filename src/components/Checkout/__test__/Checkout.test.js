import { render, screen } from '@testing-library/react';
import Checkout from '../Checkout';

it('renders checkout section', async () => {
    render(<Checkout title="Checkout" />);
    const checkoutElement = screen.getByText(/checkout/i);
    expect(checkoutElement).toBeInTheDocument();
  });
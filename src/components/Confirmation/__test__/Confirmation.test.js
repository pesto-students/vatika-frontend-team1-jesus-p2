import { render, screen } from '@testing-library/react';
import Confirmation from '../Confirmation';

it('renders confirmation section', async () => {
    render(<Confirmation title="Order Placed Successfully" />);
    const confirmationElement = screen.getByText(/order/i);
    expect(confirmationElement).toBeInTheDocument();
  });
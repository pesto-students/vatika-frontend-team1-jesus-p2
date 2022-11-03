import { render, screen } from '@testing-library/react';
import AboutUs from '../AboutUs';

it('renders about us section', async () => {
    render(<AboutUs title="About Us" />);
    const aboutElement = screen.getByText(/about/i);
    expect(aboutElement).toBeInTheDocument();
  });



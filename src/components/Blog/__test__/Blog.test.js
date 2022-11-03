import { render, screen } from '@testing-library/react';
import Blog from '../Blog';

it('renders blog section', async () => {
    render(<Blog title="Gardening Blog" />);
    const blogElement = screen.getByText(/blog/i);
    expect(blogElement).toBeInTheDocument();
  });
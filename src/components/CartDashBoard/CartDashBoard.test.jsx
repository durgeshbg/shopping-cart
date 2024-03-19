import { describe, expect, it } from 'vitest';
import CartDashBoard from './CartDashBoard';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Cart DashBoard', () => {
  it('Mount', () => {
    const { container } = render(<CartDashBoard />);
    const dashboard = container.querySelector('div');
    expect(dashboard).toBeInTheDocument();
  });

  it('Input field', async () => {
    const user = userEvent.setup();

    render(<CartDashBoard />);

    const input = screen.getByRole('textbox');
    expect(input.value).toMatch(0);

    const inc = screen.getByRole('button', {
      name: /\+/i,
    });
    await user.click(inc);
    expect(input.value).not.toMatch(0);
    expect(input.value).toMatch(1);

    const dec = screen.getByRole('button', {
      name: /-/i,
    });
    await user.click(dec);
    expect(input.value).toMatch(0);
  });

  it('Invalid quantity', async () => {
    const user = userEvent.setup();
    render(<CartDashBoard />);
    const add = screen.getByRole('button', { name: /add cart/i });
    await user.click(add);
    expect(screen.getByText(/quantity invalid!/i)).toBeInTheDocument();
  });
});

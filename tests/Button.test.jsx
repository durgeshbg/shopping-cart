import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../src/App';
import userEvent from '@testing-library/user-event';

describe('Testing temp button', () => {
  it('Button', async () => {
    const user = userEvent.setup();

    render(<App />);

    const btn = screen.getByRole('button');
    const disp = screen.getByLabelText('display');
    expect(disp.textContent).toMatch(0);
    await user.click(btn);
    expect(disp.textContent).toMatch(1);
    expect(btn.textContent).toMatch(/Increment/);
  });
});

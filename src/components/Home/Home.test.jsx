import { render, screen } from '@testing-library/react';
import { it, expect } from 'vitest';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

it('Home Mount', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const home = screen.getByRole('main');
  expect(home).toBeInTheDocument();
});

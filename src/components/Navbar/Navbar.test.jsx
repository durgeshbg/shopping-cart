import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';

it('Navbar Mount', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const nav = screen.getByRole('navigation');
  expect(nav).toBeInTheDocument();
});

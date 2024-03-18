import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar', () => {
  it('Mount', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });
});

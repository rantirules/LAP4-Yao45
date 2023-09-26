import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);
import Navbar from '.';

describe('Navbar', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('renders the Home link', () => {
    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
  });

  it('renders the discover link', () => {
    const discoverLink = screen.getByRole('link', { name: /discover/i });
    expect(discoverLink).toBeInTheDocument();
  });

});

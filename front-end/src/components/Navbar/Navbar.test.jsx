import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);
import Navbar from '.';
import SearchBar from '../Search/SearchBar';
import { userEvent } from '@testing-library/user-event';

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

  it('renders the Discover link', () => {
    const discoverLink = screen.getByRole('link', { name: /discover/i });
    expect(discoverLink).toBeInTheDocument();
  });

it('renders searchBar', () => {
    const searchBar = screen.getByRole("textbox")
    expect(searchBar).toBeInTheDocument();
}) 

//   it('should trigger onSearch when Enter is pressed in the search bar', () => {
//     const mockSubmit = vi.fn(); // Mock the handleSubmit function

//     render(<SearchBar onSearch={mockSubmit} />); // Pass the mock function as a prop

//     const searchBar = screen.getAllByRole('textbox'); // Get the search bar element by its placeholder text

//     // Act
//     userEvent.keyboard(searchBar, { target: { value: 'Test Input' } });
//     userEvent.keyboard(searchBar, { key: 'Enter', code: 'Enter' });

    // Assert
    // expect(mockSubmit).toHaveBeenCalledTimes(1);
  //});
});


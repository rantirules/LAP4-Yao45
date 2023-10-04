import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import UserPost from '.';
import { MemoryRouter } from 'react-router-dom';
import { NavbarProvider } from '../Navbar/NavbarContext';
import { expect, it } from 'vitest';




describe('UserPost Component', () => {
    beforeEach(() => {
        render(
          
          <MemoryRouter>
          <NavbarProvider>
              <UserPost />
          </NavbarProvider> 
          </MemoryRouter>
          
        );
      });
    
      afterEach(() => {
        cleanup();
      });
    
      // it('renders the Home link', () => {
      //   const homeLink = screen.getByRole('link', { name: /home/i });
      //   expect(homeLink).toBeInTheDocument();
      // });

      it.skip('renders a link to view the recipe', () => {

        const link = screen.getAllByRole('link')

        expect(link).toBeInTheDocument()
      })
});

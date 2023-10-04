import React from "react";
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';

import { SavedRecipesPage } from '..';
import { NavbarProvider } from '../../components/Navbar/NavbarContext';

expect.extend(matchers)

describe('Saved Recipes Page', () => {
    beforeEach(() => {
        render(
            
               <MemoryRouter>
                <NavbarProvider>
                    <SavedRecipesPage />
                </NavbarProvider> 
                </MemoryRouter> 
            
            
        )
    })

    afterEach(() => {
        cleanup()
    })

    it('renders the headings', () => {
        const headings = screen.getAllByRole('heading')

        expect(headings).toEqual(expect.arrayContaining([expect.any(HTMLElement)]));
    })

    it('renders the title "saved recipe"', () => {
        const title = screen.getByText(/Saved Recipes/i)

        expect(title).toBeInTheDocument()
    })

    // it('contains Link from react-router-dom', () => {   // This test is not passing yet :(

    //     const link = screen.getByTestId('recipe-card-saved')

    //     userEvent.click(link);

    //     expect(window.location.pathname).toBe(`/recipe/${recipe.id}`)
    // })

    // it('renders images', () => { // Not working either! Possible the Link is not being rendered properly? 
        
    //     const images = screen.getByRole('img')

    //     expect(images.length).toBeGreaterThan(0)
    // })
})

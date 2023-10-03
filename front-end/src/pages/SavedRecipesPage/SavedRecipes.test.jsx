import React from "react";
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, cleanup, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';

import { SavedRecipesPage } from '..';
import { NavbarProvider } from '../../components/Navbar/NavbarContext';

expect.extend(matchers)

describe('Saved Recipes Page', () => {
    beforeEach(() => {
        render(
            <Router>
                <NavbarProvider>
                    <SavedRecipesPage />
                </NavbarProvider> 
            </Router>
            
        )
    })

    afterEach(() => {
        cleanup()
    })

    it('renders the headings', () => {
        const headings = screen.getAllByRole('heading')

        expect(headings).toEqual(expect.arrayContaining([expect.any(HTMLElement)]));
    })

    it('contains link', () => {
        const link = screen.getAllByTestId('recipe-card-saved') // This test is not passing yet

        expect(link.length).toBeGreaterThan(0)
    })
})

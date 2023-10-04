import React from "react";
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, cleanup, render } from '@testing-library/react';

import * as matchers from '@testing-library/jest-dom/matchers';

import { HomePage } from "..";
import { NavbarProvider } from '../../components/Navbar/NavbarContext';

expect.extend(matchers)

describe('HomePage', () => {
    beforeEach(() => {
        render(
            <NavbarProvider>
                <HomePage />
            </NavbarProvider>
        )
    })

    afterEach(() => {
        cleanup()
    })

    it('renders the headings', () => {
        const titles = screen.getAllByRole('heading')

        expect(titles).toEqual(expect.arrayContaining([expect.any(HTMLElement)]));
    })

    it('contains the article cards', () => {
        const card = screen.getAllByTestId('content')

        expect(card.length).toBeGreaterThan(0);
    })

    it('contains images', () => {
        const image = screen.getAllByRole('img')

        expect(image.length).toBeGreaterThan(0)
        expect(image.length).toBe(4)
    })

})

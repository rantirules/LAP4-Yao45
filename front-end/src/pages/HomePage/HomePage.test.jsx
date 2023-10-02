import React from "react";
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, cleanup, render } from '@testing-library/react';

import * as matchers from '@testing-library/jest-dom/matchers';

import { HomePage } from "..";

expect.extend(matchers)

describe('HomePage', () => {
    beforeEach(() => {
        render(<HomePage/>)
    })

    afterEach(() => {
        cleanup()
    })

    it('renders the headings', () => {
        const titles = screen.getAllByRole('heading')

        expect(titles).toEqual(expect.arrayContaining([expect.any(HTMLElement)]));
    
    })

    it('renders a card', () => {
        
    })
})

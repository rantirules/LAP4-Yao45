import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import userEvent from "@testing-library/user-event";
import * as matchers from '@testing-library/jest-dom/matchers';
import { AuthProvider } from '../../../Auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';
import { NavbarProvider } from '../../NavbarContext';
import DisplaySection from './DisplaySection';
expect.extend(matchers);

describe('Secondary Nav', () => {
    beforeEach(()=> {
        render(
        <MemoryRouter>
            <AuthProvider>
            <NavbarProvider>
                <DisplaySection/>
                </NavbarProvider></AuthProvider></MemoryRouter>)

    })

    afterEach(() => {
        cleanup();
    })

    

    it('displays the recipe of the day', () => {
      const title = screen.getByRole('heading');
      expect(title).toBeInTheDocument();
    });


  
    

    })

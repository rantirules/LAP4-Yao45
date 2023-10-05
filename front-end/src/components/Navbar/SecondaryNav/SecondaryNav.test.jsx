import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import {FaUserCircle, FaFacebookMessenger, FaMapMarkedAlt, FaMapMarkerAlt, FaArrowAltCircleUp, FaArrowCircleDown } from 'react-icons/fa'; // Import the icon components
import userEvent from "@testing-library/user-event";
import * as matchers from '@testing-library/jest-dom/matchers';
import { AuthProvider } from '../../Auth/AuthContext';
import SecondaryNav from './SecondaryNav';
import { MemoryRouter } from 'react-router-dom';
import { NavbarProvider } from '../NavbarContext';
expect.extend(matchers);

describe('Secondary Nav', () => {
    beforeEach(()=> {
        render(
        <MemoryRouter>
            <AuthProvider>
            <NavbarProvider>
                <SecondaryNav/></NavbarProvider></AuthProvider></MemoryRouter>)

    })

    afterEach(() => {
        cleanup();
    })

    

    it('renders three icons in the navbar', () => {
      const NavLinks = screen.getAllByRole('link');
      expect(NavLinks.length).toBeGreaterThanOrEqual(3);
    });


    it(' closes the secondaryNav on the click of the arrow',  () => {
        
        const arrowUp =  screen.findByRole
        // userEvent.click(arrowUp)
        // const arrowUpDiv =  screen.findByTestId('arrow-div');
        // expect(arrowUpDiv).toBeInTheDocument();
    })

    })

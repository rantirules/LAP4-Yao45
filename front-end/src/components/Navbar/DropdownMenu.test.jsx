import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup, findByTestId, getByRole } from '@testing-library/react';
import UserEvent, { userEvent }  from '@testing-library/user-event';
import * as matchers from '@testing-library/jest-dom/matchers'
import App from '../../App';
import DropdownMenu, {DropdownItem} from './DropdownMenu';

describe('Dropdown Menu', () => {
    beforeEach(() => {
        render( 
            <DropdownMenu />
            ); 
    })
    afterEach(() => {
        cleanup();
      });
    it('should go to the settings menu when "Settings" is clicked',  () => {
       
    
       
        const settingsOption = screen.getByRole("link", { name: /😁 Settings 🖕/i });
        userEvent.click(settingsOption)
        const secondaryMenu =  screen.getByRole('link', {name: /Settings/i});
        expect(secondaryMenu).toBeInTheDocument();
    
});
})

import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render } from '@testing-library/react';
import { FaEnvelope, FaBell, FaUser } from 'react-icons/fa'; // Import the icon components
import InsertCommentOutlined from '@mui/icons-material/InsertCommentOutlined';
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import * as matchers from '@testing-library/jest-dom/matchers';
import Navbar from '.';
import NavItem from './NavItem'; // Assuming your NavItem component import is correct
import { MemoryRouter } from 'react-router-dom';
expect.extend(matchers);



describe('NavItem', () => {
  it('renders the correct icons', () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
        {/* <NavItem icon={<InsertCommentOutlinedIcon />} />
        <NavItem icon={<LocationOnOutlinedIcon />} />
        <NavItem icon={<AccountCircleOutlinedIcon />} /> */}
      </MemoryRouter>
    );

    // Check if each icon is rendered
    const envelopeIcon = container.querySelector('.fa-envelope');
    const bellIcon = container.querySelector('.fa-bell');
    const userIcon = container.querySelector('.fa-user');

    expect(envelopeIcon).toBeFalsy();
    expect(bellIcon).toBeFalsy();
    expect(userIcon).toBeFalsy();
  });

  
});

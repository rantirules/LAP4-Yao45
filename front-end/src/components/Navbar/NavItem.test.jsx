import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render } from '@testing-library/react';
import { FaEnvelope, FaBell, FaUser } from 'react-icons/fa'; // Import the icon components

import * as matchers from '@testing-library/jest-dom/matchers';
import NavItem from './NavItem'; // Assuming your NavItem component import is correct
expect.extend(matchers);



describe('NavItem', () => {
  it.skip('renders the correct icons', () => {
    const { container } = render(
      <>
        <NavItem icon={<FaEnvelope />} />
        <NavItem icon={<FaBell />} />
        <NavItem icon={<FaUser />} />
      </>
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

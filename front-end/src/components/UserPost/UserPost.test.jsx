import React from 'react';
import { render } from '@testing-library/react';
import UserPost from '.';




describe('UserPost Component', () => {
    beforeEach(() => {
        render(
          
            <UserPost />
          
        );
      });
    
      afterEach(() => {
        cleanup();
      });
    
      it('renders the Home link', () => {
        const homeLink = screen.getByRole('link', { name: /home/i });
        expect(homeLink).toBeInTheDocument();
      });
});

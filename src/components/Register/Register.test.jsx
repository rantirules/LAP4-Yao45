import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from "vitest";
// import '@testing-library/jest-dom/extend-expect';

import { screen, render, cleanup, fireEvent, waitFor } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import Register from '.';

describe("Register component", () => {
    beforeEach(() => {
      render(<Register />);
    });
    // test()

    it.skip('resets on successful submission', async() => {
        const {email, password, passwordConfirm} = Register()
        fireEvent.input(email, {target: {value: 'pet@gmail.com'}});
        fireEvent.input(password, {target: {value: '<PASSWORD>'}});
        fireEvent.input(passwordConfirm,{ target:{ value:'<PASSWORD>'} })
        expect(email.value).toEqual('pet@gmail.com')
        expect(password.value).toEqual('<PASSWORD>')
        await waitFor(() => {
            fireEvent.click(form-submit);
            expect(email.value).toEqual('');
			expect(password.value).toEqual('');

        })
        // fireEvent.click(screen.getByText(/submit/i));

    })
  
    // it("Displays email input", () => {
    //   const emailInput = screen.getByLabelText(/Email/i);
    //   expect(emailInput).toBeInTheDocument();
    // });
  
    // it("Displays password input", () => {
    //   const passwordInput = screen.getByLabelText(/New Password/i);
    //   expect(passwordInput).toBeInTheDocument();
    // });
  
    
    // it("Displays submit button", () => {
    //   const submitButton = screen.getByText(/Submit/i);
    //   expect(submitButton).toBeInTheDocument();
    // });
  
    afterEach(() => {
      cleanup(); 
    });
  });

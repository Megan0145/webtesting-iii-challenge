// Test away
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

afterEach(rtl.cleanup);
let wrapper;
beforeEach(() => {
    wrapper = rtl.render(<Dashboard />);
});

describe('Gate', () => {
    it('defaults to `unlocked`', () => {
        expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
    });
    it('defaults to `open`', () => {
        expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
    });
});
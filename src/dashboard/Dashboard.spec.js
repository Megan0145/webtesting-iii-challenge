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
    it('cannot be closed or opened if it is locked', () => {
        expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
        rtl.fireEvent.click(wrapper.queryByText(/close gate/i));
        expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
        rtl.fireEvent.click(wrapper.queryByText(/lock gate/i));
        expect(wrapper.queryByText(/locked/i)).toBeInTheDocument();
        rtl.fireEvent.click(wrapper.queryByText(/open gate/i));
        expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/locked/i)).toBeInTheDocument();
    });
});

describe('Dashboard component', () => {
    it('Shows controls', () => {
        expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
    });
    it('Shows display', () => {
        expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
    });
});
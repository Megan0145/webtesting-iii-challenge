// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup);
// let wrapper;
// beforeEach(() => {
//     wrapper = rtl.render(<Display />);
// });

// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class

describe('Display component', () => {
    it('Displays if gate is open', () => {
        const wrapper = rtl.render(<Display/>);
        expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/closed/i)).not.toBeInTheDocument();
    });
    it('Displays if gate is closed', () => {
        const wrapper = rtl.render(<Display closed={true}/>);
        expect(wrapper.queryByText(/open/i)).not.toBeInTheDocument();
        expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
    });
    it('Displays if gate is unlocked', () => {
        const wrapper = rtl.render(<Display />);
        expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
    });
    it('Displays if gate is locked', () => {
        const wrapper = rtl.render(<Display locked={true}/>);
        expect(wrapper.queryByText(/locked/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/unlocked/i)).not.toBeInTheDocument();
    });
});
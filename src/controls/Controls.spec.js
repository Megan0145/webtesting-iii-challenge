// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

afterEach(rtl.cleanup);

// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
// - the closed toggle button is disabled if the gate is locked
// - the locked toggle button is disabled if the gate is open

describe('Controls component', () => {
    it('provides button to toggle closed state', () => {
        const wrapper = rtl.render(<Controls />);
        expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
    });
    it('provides button to toggle locked state', () => {
        const wrapper = rtl.render(<Controls />);
        expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
    });
    it('changes button text to reflect state door will be in if clicked (lock button)', () => {
        const wrapper = rtl.render(<Controls locked={true}/>);
        expect(wrapper.queryByText(/unlock gate/i)).toBeInTheDocument();
    });
    it('changes button text to reflect state door will be in if clicked (closed button)', () => {
        const wrapper = rtl.render(<Controls closed={true}/>);
        expect(wrapper.queryByText(/open gate/i)).toBeInTheDocument();
    });
    it('closed toggle button disabled if gate is locked', () => {
        const wrapper = rtl.render(<Controls locked={true}/>);
        expect(wrapper.queryByText(/close gate/i)).toHaveAttribute('disabled');
    });
    it('the locked toggle button is disabled if the gate is open', () => {
        const wrapper = rtl.render(<Controls closed={false}/>);
        expect(wrapper.queryByText(/lock gate/i)).toHaveAttribute('disabled');
    });
});
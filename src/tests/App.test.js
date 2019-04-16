import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Product from '../components/Product';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { mount } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Examining the syntax of Jest tests', () => {
    it('sums numbers', () => {
        expect(1 + 2).toEqual(3);
        expect(2 + 2).toEqual(4);
    });
});

describe('Initial vote has to be a number', () => {
    it('Check vote props value', () => {
        const comp = mount( <Product /> );
        expect(comp.find('.vote').text()).toEqual("0");
    });
});
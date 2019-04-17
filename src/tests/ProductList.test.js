import React from 'react';
import data from '../data';
import {getRandomInt, isValidUrl} from '../utils/Utils';
import ProductList from '../components/ProductList';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { mount } from 'enzyme'

describe('Product list should have an array of products', () => {
    it('Array check', () => {
        const props = {products: []}
        const comp = mount( <ProductList  {...props} /> );
        expect((comp).prop('products')).toEqual([]);
    });
});
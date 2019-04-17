import React from 'react';
import data from '../data';
import {getRandomInt, isValidUrl} from '../utils/Utils';
import Product from '../components/Product';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { mount } from 'enzyme'

describe('Initial vote has to be a number', () => {
    it('Check vote props value', () => {
        let randNumber = getRandomInt(9);
        const comp = mount( <Product data={data[randNumber]} /> );
        let productVote = parseInt(comp.find('.vote').text());
        expect(Number.isInteger(productVote)).toBe(true);
    });
});

describe('Vote up arrow icon should have "vote-block" class', () => {
    it('Check class props', () => {
        let randNumber = getRandomInt(9);
        const comp = mount( <Product data={data[randNumber]} />);
        expect(comp.find('.vote-block').hasClass('vote-block')).toEqual(true);
    });
});

describe('Product image has to have a source url', () => {
    it('URL check', () => {
        let randNumber = getRandomInt(9);
        const comp = mount( <Product data={data[randNumber]} />);
        let imageUrl = comp.find('.card-image').prop('src');
        expect(isValidUrl(imageUrl)).toEqual(true);
    });
});

import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  it('Home has appropriate classes', () => {
    const wrapper = shallow(<Home>test</Home>);

    expect(wrapper.find('h2').hasClass('Home__Title')).toBe(true);
  });
});

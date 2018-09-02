import React from 'react';
import { shallow, mount } from 'enzyme';
import About from '../../../src/ui/components/About';

test('playbutton is rendered', () => {
    const wrapper = mount(<About />);
    const h1 = wrapper.find('h1');
    expect(h1.text()).toBe('About');
});
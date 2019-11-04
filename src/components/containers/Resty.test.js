import React from 'react';
import { shallow } from 'enzyme';
import Resty from './Resty';

describe('Resty component', () => {
  it('renders Resty', () => {
    const wrapper = shallow(<Resty />);
    expect(wrapper).toMatchSnapshot();
  });
});

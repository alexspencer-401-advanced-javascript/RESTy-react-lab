import React from 'react';
import { shallow } from 'enzyme';
import History from './History';

describe('History component', () => {
  it('renders History', () => {
    const wrapper = shallow(<History history={[
      {
        url: 'https://hey-arnold-api.herokuapp.com/api/v1/characters',
        method: 'GET'
      }

    ]} />);
    expect(wrapper).toMatchSnapshot();
  });
});

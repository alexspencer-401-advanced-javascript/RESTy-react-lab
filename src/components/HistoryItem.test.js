import React from 'react';
import { shallow } from 'enzyme';
import HistoryItem from './HistoryItem';

describe('HistoryItem component', () => {
  it('renders HistoryItem', () => {
    const wrapper = shallow(<HistoryItem />);
    expect(wrapper).toMatchSnapshot();
  });
});

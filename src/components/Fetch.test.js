import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';


jest.mock('../services/api-call.js', () => ({
  apiCall() {
    return Promise.resolve([
      {
        '_id': '5da237699734fdcb7bef8f56',
        'name': 'Miles Shortman',
        'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/2/2e/Miles.jpg/revision/latest/scale-to-width-down/243?cb=20101115140639'
      }]);
  }
}));

describe('api call fetch', () => {
  it('makes a successful api call and returns characters', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper).toMatchSnapshot();
  });
});

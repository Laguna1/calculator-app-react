import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

describe('Quote Page', () => {
  it('renders correctly', () => {
    const page = renderer.create(<Quote />);
    expect(page).toMatchSnapshot();
  });
});

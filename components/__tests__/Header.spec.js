import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from '../Header';

describe('Component Header', () => {
  it('renders correctly snapshot test', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

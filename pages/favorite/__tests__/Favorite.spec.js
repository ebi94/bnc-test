import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Favorite from '..';

describe('Component Favorite Page', () => {
  it('renders correctly snapshot test', () => {
    const tree = renderer.create(<Favorite />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

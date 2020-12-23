/**
 * @format
 */

import 'react-native';
import React from 'react';
import Component from '../index';
import renderer from 'react-test-renderer';

it('Screen component renders', () => {
  renderer.create(<Component />);
});

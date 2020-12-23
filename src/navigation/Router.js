import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
enableScreens();

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './index';
import Navigation from './Navigation';

export default class Router extends React.PureComponent {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Navigation />
      </NavigationContainer>
    );
  }
}

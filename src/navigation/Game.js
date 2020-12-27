import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Exploration from 'src/screens/Exploration';
import Settings from 'src/screens/Settings';

const Router = createStackNavigator();

export default function MainNavigator() {
  return (
    <Router.Navigator headerMode="none">
      <Router.Screen name="Exploration" component={Exploration} />
      <Router.Screen name="Settings" component={Settings} />
    </Router.Navigator>
  );
}

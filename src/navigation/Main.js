import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from 'src/screens/Home';
import Settings from 'src/screens/Settings';
import Friends from 'src/screens/Friends';

const Router = createStackNavigator();

export default function MainNavigator() {
  return (
    <Router.Navigator headerMode="none">
      <Router.Screen name="Home" component={Home} />
      <Router.Screen name="Friends" component={Friends} />
      <Router.Screen name="Settings" component={Settings} />
    </Router.Navigator>
  );
}

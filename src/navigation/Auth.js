import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from 'src/screens/Login';
import Settings from 'src/screens/Settings';

const Router = createStackNavigator();

export default function MainNavigator() {
  return (
    <Router.Navigator headerMode="none">
      <Router.Screen name="Login" component={Login} />
      <Router.Screen name="Settings" component={Settings} />
    </Router.Navigator>
  );
}

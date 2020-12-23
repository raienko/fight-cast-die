import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from 'src/screens/Login';
import SignInWithPhone from 'src/screens/SignInWithPhone';
import SignUp from 'src/screens/SignUp';

const Router = createStackNavigator();

export default function MainNavigator() {
  return (
    <Router.Navigator headerMode="none">
      <Router.Screen name="Login" component={Login} />
      <Router.Screen name="SignInWithPhone" component={SignInWithPhone} />
      <Router.Screen name="SignUp" component={SignUp} />
    </Router.Navigator>
  );
}

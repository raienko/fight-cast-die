import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from 'src/components/TabBar';
import Friends from 'src/screens/Friends';
import Storyline from 'src/screens/Storyline';
import Settings from 'src/screens/Settings';

const Router = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Router.Navigator initialRouteName="Storyline" tabBar={TabBar}>
      <Router.Screen name="Friends" component={Friends} />
      <Router.Screen name="Storyline" component={Storyline} />
      <Router.Screen name="Settings" component={Settings} />
    </Router.Navigator>
  );
}

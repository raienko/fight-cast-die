import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
enableScreens();

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Loading from 'src/screens/Loading';
import Home from 'src/screens/Home';
import Main from 'src/screens/Main';
import SignUp from 'src/screens/SignUp';
import Settings from 'src/screens/Settings';
import Exploration from 'src/screens/Exploration';
import Battle from 'src/screens/Battle';
import Character from 'src/screens/Character';
import Store from 'src/screens/Store';

import globalStore from 'src/stores/global';

const Stack = createStackNavigator();

const Initial = () => (
  <Stack.Navigator mode="modal" headerMode="none">
    <Stack.Screen name="Loading" component={Loading} />
  </Stack.Navigator>
);

const Auth = () => (
  <Stack.Navigator mode="modal" headerMode="none">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);

const Game = () => (
  <Stack.Navigator mode="modal" headerMode="none">
    <Stack.Screen name="Exploration" component={Exploration} />
    <Stack.Screen name="Character" component={Character} />
    <Stack.Screen name="Battle" component={Battle} />
    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="Store" component={Store} />
  </Stack.Navigator>
);

const Lobby = () => (
  <Stack.Navigator mode="modal" headerMode="none">
    <Stack.Screen name="Main" component={Main} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
);

const Navigator = () => {
  const {state: globalState} = globalStore.useStore();

  const rehydrated = globalState.rehydrated;

  if (!rehydrated) {
    return <Initial />;
  }

  if (!globalState.token) {
    return <Auth />;
  }

  if (!globalState.game) {
    return <Lobby />
  }

  return <Game />
};

export default () => (
  <NavigationContainer>
    <Navigator />
  </NavigationContainer>
);

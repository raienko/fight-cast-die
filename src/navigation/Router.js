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
import PartySetup from 'src/screens/PartySetup';
import GameSetup from 'src/screens/GameSetup';
import Friends from 'src/screens/Friends';
import Battle from 'src/screens/Battle';
import globalStore from 'src/stores/global';

import gameStore from 'src/stores/game';
const Stack = createStackNavigator();

import {navigationRef} from './index';

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
    <Stack.Screen name="Battle" component={Battle} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
);

const Lobby = () => (
  <Stack.Navigator mode="modal" headerMode="none">
    <Stack.Screen name="Main" component={Main} />
    <Stack.Screen name="PartySetup" component={PartySetup} />
    <Stack.Screen name="GameSetup" component={GameSetup} />
    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="Friends" component={Friends} />
  </Stack.Navigator>
);

const Navigator = () => {
  const {state: globalState} = globalStore.useStore();
  const {state: gameState} = gameStore.useStore();

  const rehydrated = globalState.rehydrated;

  if (!rehydrated) {
    return <Initial />;
  }

  if (!globalState.token) {
    return <Auth />;
  }

  if (!gameState.game) {
    return <Lobby />;
  }

  return <Game />;
};

export default () => (
  <NavigationContainer ref={navigationRef}>
    <Navigator />
  </NavigationContainer>
);
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
enableScreens();

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Loading from 'src/screens/Loading';
import Home from 'src/screens/Home';
import Storyline from 'src/screens/Storyline';
import SignUp from 'src/screens/SignUp';
import Settings from 'src/screens/Settings';
import Exploration from 'src/screens/Exploration';
import PartySetup from 'src/screens/PartySetup';
import GameSetup from 'src/screens/GameSetup';
import Friends from 'src/screens/Friends';
import Lobby from 'src/screens/Lobby';
import Battle from 'src/screens/Battle';
import globalStore from 'src/stores/global';

import TabBar from 'src/components/TabBar';
import gameStore from 'src/stores/game';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

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

const Arena = () => (
  <Stack.Navigator mode="modal" headerMode="none">
    <Stack.Screen name="Lobby" component={Lobby} />
    <Stack.Screen name="PartySetup" component={PartySetup} />
    <Stack.Screen name="GameSetup" component={GameSetup} />
  </Stack.Navigator>
);

const Main = () => (
  <Tabs.Navigator initialRouteName="Storyline" tabBar={TabBar}>
    <Tabs.Screen name="Friends" component={Friends} />
    <Tabs.Screen name="Storyline" component={Storyline} />
    <Tabs.Screen name="Arena" component={Arena} />
    <Stack.Screen name="Settings" component={Settings} />
  </Tabs.Navigator>
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
    return <Main />;
  }

  return <Game />;
};

export default () => (
  <NavigationContainer ref={navigationRef}>
    <Navigator />
  </NavigationContainer>
);

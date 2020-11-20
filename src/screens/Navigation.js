import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
enableScreens();

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Loading from 'src/screens/Loading';
import Fetching from 'src/screens/Fetching';
import SignIn from 'src/screens/SignIn';
import Lobby from 'src/screens/Lobby';
import Creation from 'src/screens/Creation';
import Home from 'src/screens/Home';
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
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
);

const Main = () => (
  <Stack.Navigator mode="modal" headerMode="none">
    <Stack.Screen name="Exploration" component={Exploration} />
    <Stack.Screen name="Character" component={Character} />
    <Stack.Screen name="Battle" component={Battle} />
    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="Store" component={Store} />
  </Stack.Navigator>
);

const Characters = () => (
  <Stack.Navigator mode="modal" headerMode="none">
    <Stack.Screen name="Lobby" component={Lobby} />
    <Stack.Screen name="Creation" component={Creation} />
  </Stack.Navigator>
);

const Navigator = () => {
  const {state} = globalStore.useStore();

  console.log({state});

  if (!state.rehydrated) {
    return <Initial />;
  }

  if (!state.token) {
    return <Auth />;
  }

  if (!state.profile) {
    return <Fetching />;
  }

  if (!state.profile.character) {
    return <Characters />;
  }

  return <Main />;
};

export default () => (
  <NavigationContainer>
    <Navigator />
  </NavigationContainer>
);

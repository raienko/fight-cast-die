import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import globalStore from 'src/stores/global';
import gameStore from 'src/stores/game';
import Router from 'src/navigation/Router';

export default class App extends React.PureComponent {
  render() {
    return (
      <SafeAreaProvider>
        <globalStore.Provider>
          <gameStore.Provider>
            <Router />
          </gameStore.Provider>
        </globalStore.Provider>
      </SafeAreaProvider>
    );
  }
}

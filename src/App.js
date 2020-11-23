import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import globalStore from 'src/stores/global';
import characterStore from 'src/stores/character';
import Navigation from 'src/screens/Navigation';

export default class extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <globalStore.Provider>
          <characterStore.Provider>
            <Navigation />
          </characterStore.Provider>
        </globalStore.Provider>
      </SafeAreaProvider>
    );
  }
}

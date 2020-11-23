import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import globalStore from 'src/stores/global';
import Navigation from 'src/screens/Navigation';

export default class extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <globalStore.Provider>
          <Navigation />
        </globalStore.Provider>
      </SafeAreaProvider>
    );
  }
}

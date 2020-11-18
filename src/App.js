import React from 'react';
import globalStore from 'src/globalStore';
import Navigation from 'src/screens/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

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

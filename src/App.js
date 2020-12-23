import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StoreProvider from 'src/store/Provider';
import Router from 'src/navigation/Router';

export default class App extends React.PureComponent {
  render() {
    return (
      <SafeAreaProvider>
        <StoreProvider>
          <Router />
        </StoreProvider>
      </SafeAreaProvider>
    );
  }
}

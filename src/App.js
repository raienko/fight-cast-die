import React from 'react';
import 'localization';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StoreProvider from 'src/store/Provider';
import Router from 'src/navigation/Router';

export default class App extends React.PureComponent {
  render() {
    return (
      <>
        <StatusBar translucent />
        <SafeAreaProvider>
          <StoreProvider>
            <Router />
          </StoreProvider>
        </SafeAreaProvider>
      </>
    );
  }
}

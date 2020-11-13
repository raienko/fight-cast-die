import React from 'react';
import globalStore from 'src/globalStore';
import Navigation from 'src/screens/Navigation';

export default class extends React.Component {
  render() {
    return (
      <globalStore.Provider>
        <Navigation />
      </globalStore.Provider>
    );
  }
}

import React from 'react';
import Navigation from 'src/screens/Navigation';
import Store from 'src/store';

export default class extends React.Component {
  render() {
    return (
      <Store>
        <Navigation />
      </Store>
    );
  }
}

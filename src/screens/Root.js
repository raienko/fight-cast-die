import React from 'react';
import Battle from 'src/screens/Battle';
import Character from 'src/screens/Character';
import Login from 'src/screens/Login';
import Store from 'src/screens/Store';
import World from 'src/screens/World';

export default class Root extends React.Component {
  render() {
    return (
      <>
        <Battle />
        <Character />
        <Login />
        <Store />
        <World />
      </>
    );
  }
}

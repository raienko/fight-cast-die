import React from 'react';
import globalStore from 'src/globalStore';
import gameMaster from 'src/gameMaster';
import Exploration from 'src/screens/Exploration';

export default class extends React.Component {
  render() {
    return (
      <globalStore.Provider>
        <gameMaster.Provider>
          <Exploration />
        </gameMaster.Provider>
      </globalStore.Provider>
    );
  }
}

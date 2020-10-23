import React, {useContext} from 'react';
import PropTypes from 'prop-types';

const GameMasterContext = React.createContext();

export const useGameMaster = () => useContext(GameMasterContext);

const GameMaster = ({children}) => {
  return (
    <GameMasterContext.Provider>
      {children}
    </GameMasterContext.Provider>
  );
};

GameMaster.propTypes = {
  children: PropTypes.node,
};

GameMaster.defaultProps = {
  children: null,
};

export default GameMaster;

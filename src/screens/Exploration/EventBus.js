import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import levels from 'src/levels';

const LevelContext = React.createContext();

export const useLevel = () => useContext(LevelContext);

const Level = ({children}) => {
  const [level, setLevel] = useState(null);

  const changeLevel = (levelId) => {
    setLevel(levels[levelId]);
  };

  return (
    <LevelContext.Provider value={{level, changeLevel}}>
      {children}
    </LevelContext.Provider>
  );
};

Level.propTypes = {
  children: PropTypes.node,
};

Level.defaultProps = {
  children: null,
};

export default Level;

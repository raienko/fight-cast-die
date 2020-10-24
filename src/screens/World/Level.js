import React, {useState, useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import levels from 'src/levels';

const LevelContext = React.createContext();

export const useLevel = () => useContext(LevelContext);

const Level = ({children}) => {
  const [level, setLevel] = useState(null);
  const [loading, setLoading] = useState(true);

  const changeLevel = (levelId) => {
    return setLevel(levels[levelId]);
  };

  useEffect(() => {
    changeLevel('forest_1');
    setLoading(false);
  }, []);

  return (
    <LevelContext.Provider value={{level, changeLevel, loading}}>
      {loading ? null : children}
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

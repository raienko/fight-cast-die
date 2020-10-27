import React, {useContext} from 'react';
import PropTypes from 'prop-types';

const CharacterContext = React.createContext();

export const useCharacter = () => useContext(CharacterContext);

const Character = ({children}) => {
  const character = {
    name: 'Johny',
    area: 'forest_1',
    x: 7,
    y: 19,
  };

  return (
    <CharacterContext.Provider value={{character}}>
      {children}
    </CharacterContext.Provider>
  );
};

Character.propTypes = {
  children: PropTypes.node,
};

Character.defaultProps = {
  children: null,
};

export default Character;

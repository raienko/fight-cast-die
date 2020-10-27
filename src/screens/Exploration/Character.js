import React, {useState, useEffect, useContext} from 'react';
import PropTypes from 'prop-types';

const CharacterContext = React.createContext();

export const useCharacter = () => useContext(CharacterContext);

const Character = ({children}) => {
  return (
    <CharacterContext.Provider>
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

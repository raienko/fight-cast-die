import React, {useContext} from 'react';
import PropTypes from 'prop-types';

const UserContext = React.createContext();

export const useUser = () => useContext(UserContext);

const User = ({children}) => {
  return (
    <UserContext.Provider>
      {children}
    </UserContext.Provider>
  );
};

User.propTypes = {
  children: PropTypes.node,
};

User.defaultProps = {
  children: null,
};

export default User;

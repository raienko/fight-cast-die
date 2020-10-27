import React, {useState, useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import LoadingOverlay from './LoadingOverlay';

const LoadingContext = React.createContext();

export const useLoading = () => useContext(LoadingContext);

const Loading = ({children}) => {
  const [loading, setLoading] = useState(true);

  const showLoading = () => {
    setLoading(true);
  };

  const hideLoading = () => {
    setLoading(false);
  };

  return (
    <LoadingContext.Provider value={{loading, showLoading, hideLoading}}>
      {children}
      <LoadingOverlay visible={loading} />
    </LoadingContext.Provider>
  );
};

Loading.propTypes = {
  children: PropTypes.node,
};

Loading.defaultProps = {
  children: null,
};

export default Loading;

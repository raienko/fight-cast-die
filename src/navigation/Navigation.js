import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Auth from './Auth';
import Main from './Main';

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps)(
  class Navigation extends React.PureComponent {
    static propTypes = {
      token: PropTypes.string.isRequired,
    };

    render() {
      const {token} = this.props;

      if (!token) {
        return <Auth />;
      }

      return <Main />;
    }
  },
);

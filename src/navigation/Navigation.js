import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Auth from './Auth';
import Main from './Main';
import Game from './Game';

const mapStateToProps = (state) => ({
  token: state.auth.token,
  game: state.game.game,
});

export default connect(mapStateToProps)(
  class Navigation extends React.PureComponent {
    static propTypes = {
      token: PropTypes.string.isRequired,
      game: PropTypes.object,
    };

    static defaultProps = {
      game: null,
    };

    render() {
      const {token, game} = this.props;

      if (!token) {
        return <Auth />;
      }

      if (game) {
        return <Game />;
      }

      return <Main />;
    }
  },
);

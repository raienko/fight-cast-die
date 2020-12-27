import React from 'react';
import {StyleSheet, View} from 'react-native';
import {combineStyles} from 'rn-units';
import PropTypes from 'prop-types';
import theme from 'src/constants/theme';

export default class Screen extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.any,
  };

  static defaultProps = {
    children: null,
    style: null,
  };

  render() {
    const {children, style} = this.props;
    return (
      <View style={combineStyles(styles.wrapper, style)}>
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.white,
  },
});

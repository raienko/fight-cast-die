import React from 'react';
import {StyleSheet} from 'react-native';
import {combineStyles} from 'rn-units';
import {SafeAreaView} from 'react-native-safe-area-context';
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
      <SafeAreaView mode="padding" style={combineStyles(styles.wrapper, style)}>
        {children}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.white,
  },
});

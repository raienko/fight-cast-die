import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const {children} = this.props;
    return (
      <View style={styles.wrapper}>
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
  },
});

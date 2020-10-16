import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class extends React.Component {
  static propTypes = {
    children: PropTypes.node,
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

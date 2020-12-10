import React from 'react';
import {View, StyleSheet} from 'react-native';
import theme from 'src/constants/theme';

export default function Screen(params) {
  return <View {...params} style={styles.wrapper} />;
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.primary,
  },
});

import React from 'react';
import {View, StyleSheet} from 'react-native';
import theme from 'src/constants/theme';
import sizes from 'src/constants/sizes';

export default function Screen(params) {
  return <View {...params} style={styles.wrapper} />;
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.white,
    paddingVertical: sizes.offset,
  },
});

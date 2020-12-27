import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {combineStyles, rem} from 'rn-units';
import theme from 'src/constants/theme';
import sizes from 'src/constants/sizes';

export default function Header({children, style}) {
  return (
    <SafeAreaView
      mode="padding"
      edges={['top']}
      style={combineStyles(styles.wrapper, style)}
    >
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: theme.yellow,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: sizes.offset,
  },
});

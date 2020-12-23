import React from 'react';
import {View, StyleSheet} from 'react-native';
import {rem} from 'rn-units';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function Header({children}) {
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top;
  return (
    <View style={[styles.wrapper, {paddingTop}]}>
      <View style={styles.container}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  container: {
    flexDirection: 'row',
  },
});

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {rem} from 'rn-units';

export default function Screen({children}) {
  const insets = useSafeAreaInsets();
  const paddings = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom + rem(10),
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  return (
    <View style={[styles.wrapper, paddings]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function Wrapper({children}) {
  const insets = useSafeAreaInsets();
  const paddingBottom = insets.bottom;
  return (
    <View style={[styles.wrapper, {paddingBottom}]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#6e6e6e',
  },
});
